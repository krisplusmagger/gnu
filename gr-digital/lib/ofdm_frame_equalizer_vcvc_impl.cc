/* -*- c++ -*- */
/* Copyright 2012,2018 Free Software Foundation, Inc.
 *
 * This file is part of GNU Radio
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 */

#ifdef HAVE_CONFIG_H
#include "config.h"
#endif

#include "ofdm_frame_equalizer_vcvc_impl.h"
#include <gnuradio/expj.h>
#include <gnuradio/io_signature.h>
#include <gnuradio/math.h>

static const pmt::pmt_t CARR_OFFSET_KEY = pmt::mp("ofdm_sync_carr_offset");
static const pmt::pmt_t CHAN_TAPS_KEY = pmt::mp("ofdm_sync_chan_taps");

namespace gr {
namespace digital {

ofdm_frame_equalizer_vcvc::sptr
ofdm_frame_equalizer_vcvc::make(ofdm_equalizer_base::sptr equalizer,
                                int cp_len,
                                const std::string& tsb_key,
                                bool propagate_channel_state,
                                int fixed_frame_len)
{
    return gnuradio::make_block_sptr<ofdm_frame_equalizer_vcvc_impl>(
        equalizer, cp_len, tsb_key, propagate_channel_state, fixed_frame_len);
}

ofdm_frame_equalizer_vcvc_impl::ofdm_frame_equalizer_vcvc_impl(
    ofdm_equalizer_base::sptr equalizer,
    int cp_len,
    const std::string& tsb_key,
    bool propagate_channel_state,
    int fixed_frame_len)
    : tagged_stream_block(
          "ofdm_frame_equalizer_vcvc",
          io_signature::make(1, 1, sizeof(gr_complex) * equalizer->fft_len()),
          io_signature::make(1, 1, sizeof(gr_complex) * equalizer->fft_len()),
          tsb_key),
      d_fft_len(equalizer->fft_len()), // what is the different between :: and ->
      d_cp_len(cp_len),
      d_eq(equalizer),
      d_propagate_channel_state(propagate_channel_state),
      d_fixed_frame_len(fixed_frame_len),
      d_channel_state(equalizer->fft_len(), gr_complex(1, 0))
{
    if (tsb_key.empty() && fixed_frame_len == 0) {
        throw std::invalid_argument("Either specify a TSB tag or a fixed frame length!");
    }
    if (d_fixed_frame_len < 0) {
        throw std::invalid_argument("Invalid frame length!");
    }
    if (d_fixed_frame_len) {
        set_output_multiple(d_fixed_frame_len);
    }
    set_relative_rate(1, 1);
    // Really, we have TPP_ONE_TO_ONE, but the channel state is not propagated
    set_tag_propagation_policy(TPP_DONT);
}

ofdm_frame_equalizer_vcvc_impl::~ofdm_frame_equalizer_vcvc_impl() {}

void ofdm_frame_equalizer_vcvc_impl::parse_length_tags(
    const std::vector<std::vector<tag_t>>& tags, gr_vector_int& n_input_items_reqd)
{
    if (d_fixed_frame_len) {
        n_input_items_reqd[0] = d_fixed_frame_len;
    } else {
        for (unsigned k = 0; k < tags[0].size(); k++) {
            if (tags[0][k].key == pmt::string_to_symbol(d_length_tag_key_str)) {
                n_input_items_reqd[0] = pmt::to_long(tags[0][k].value);
            }
        }
    }
}


int ofdm_frame_equalizer_vcvc_impl::work(int noutput_items,
                                         gr_vector_int& ninput_items,
                                         gr_vector_const_void_star& input_items,
                                         gr_vector_void_star& output_items)
{
    const gr_complex* in = (const gr_complex*)input_items[0];
    gr_complex* out = (gr_complex*)output_items[0];
    int carrier_offset = 0;
    int frame_len = 0;
    if (d_fixed_frame_len) {
        frame_len = d_fixed_frame_len;
    } else {
        frame_len = ninput_items[0];
    }

    std::vector<tag_t> tags;
    get_tags_in_window(tags, 0, 0, 1);
    for (unsigned i = 0; i < tags.size(); i++) {
        if (pmt::symbol_to_string(tags[i].key) == "ofdm_sync_chan_taps") {
            d_channel_state = pmt::c32vector_elements(tags[i].value);// d_channel-state --> channel_taps
        }
        if (pmt::symbol_to_string(tags[i].key) == "ofdm_sync_carr_offset") {
            carrier_offset = pmt::to_long(tags[i].value);
        }
    }

    // Copy the frame and the channel state vector such that the symbols are shifted to
    // the correct position
    //when <0, means symbols need to be shifted right
    if (carrier_offset < 0) {
        memset((void*)out, 0x00, sizeof(gr_complex) * (-carrier_offset));/// pointer to the object, 0x00-the character to copy. sizeof(sss), the number of bytes to copy
        memcpy((void*)&out[-carrier_offset],
               (const void*)in,
               sizeof(gr_complex) * (d_fft_len * frame_len + carrier_offset));
    } else {
        memset((void*)(out + d_fft_len * frame_len - carrier_offset),
               0x00,
               sizeof(gr_complex) * carrier_offset);
        // shifted left
        memcpy((void*)out,
               (const void*)(in + carrier_offset),
               sizeof(gr_complex) * (d_fft_len * frame_len - carrier_offset));
    }

    // Correct the frequency shift on the symbols
    gr_complex phase_correction;
    for (int i = 0; i < frame_len; i++) {
        phase_correction =
            gr_expj(-(2.0 * GR_M_PI) * carrier_offset * d_cp_len / d_fft_len * (i + 1));
        for (int k = 0; k < d_fft_len; k++) {
            out[i * d_fft_len + k] *= phase_correction;
        }
    }

    // Do the equalizing
    d_eq->reset();
    d_eq->equalize(out, frame_len, d_channel_state, tags);
    d_eq->get_channel_state(d_channel_state);

    // Update the channel state regarding the frequency offset
    phase_correction =
        gr_expj((2.0 * GR_M_PI) * carrier_offset * d_cp_len / d_fft_len * frame_len);
    for (int k = 0; k < d_fft_len; k++) {
        d_channel_state[k] *= phase_correction;
    }

    // Propagate tags (except for the channel state and the TSB tag)
    get_tags_in_window(tags, 0, 0, frame_len);
    for (size_t i = 0; i < tags.size(); i++) {
        if (tags[i].key != CHAN_TAPS_KEY &&
            tags[i].key != pmt::mp(d_length_tag_key_str)) {
            add_item_tag(0, tags[i]);
        }
    }

    // Housekeeping
    if (d_propagate_channel_state) {
        add_item_tag(0,
                     nitems_written(0),
                     pmt::string_to_symbol("ofdm_sync_chan_taps"),
                     pmt::init_c32vector(d_fft_len, d_channel_state));
    }

    if (d_fixed_frame_len && d_length_tag_key_str.empty()) {
        consume_each(frame_len);
    }

    return frame_len;
}

} /* namespace digital */
} /* namespace gr */
