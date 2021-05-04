/* -*- c++ -*- */
/*
 * Copyright 2020-2021 Free Software Foundation, Inc.
 *
 * This file is part of GNU Radio
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 */

/***********************************************************************************/
/* This file is automatically generated using bindtool and can be manually edited  */
/* The following lines can be configured to regenerate this file during cmake      */
/* If manual edits are made, the following tags should be modified accordingly.    */
/* BINDTOOL_GEN_AUTOMATIC(0)                                                       */
/* BINDTOOL_USE_PYGCCXML(0)                                                        */
/* BINDTOOL_HEADER_FILE(block.h)                                                   */
/* BINDTOOL_HEADER_FILE_HASH(6e911ed08a9560fda459b0de000e210a)                     */
/***********************************************************************************/

#include <pybind11/complex.h>
#include <pybind11/pybind11.h>
#include <pybind11/stl.h>

namespace py = pybind11;

#include <gnuradio/soapy/block.h>
// pydoc.h is automatically generated in the build directory
#include <block_pydoc.h>

void bind_block(py::module& m)
{

    using block = ::gr::soapy::block;


    py::class_<block, gr::block, gr::basic_block, std::shared_ptr<block>>(
        m, "block", D(block))


        .def("set_frontend_mapping",
             &block::set_frontend_mapping,
             py::arg("frontend_mapping"),
             D(block, set_frontend_mapping))


        .def("set_sample_rate",
             &block::set_sample_rate,
             py::arg("channel"),
             py::arg("sample_rate"),
             D(block, set_sample_rate))


        .def("get_sample_rate",
             &block::get_sample_rate,
             py::arg("channel"),
             D(block, get_sample_rate))


        .def("set_frequency",
             (void (block::*)(size_t, double)) & block::set_frequency,
             py::arg("channel"),
             py::arg("freq"),
             D(block, set_frequency, 0))


        .def("set_frequency",
             (void (block::*)(size_t, const std::string&, double)) & block::set_frequency,
             py::arg("channel"),
             py::arg("name"),
             py::arg("freq"),
             D(block, set_frequency, 1))


        .def("get_frequency",
             &block::get_frequency,
             py::arg("channel"),
             D(block, get_frequency))


        .def("set_bandwidth",
             &block::set_bandwidth,
             py::arg("channel"),
             py::arg("bandwidth"),
             D(block, set_bandwidth))


        .def("get_bandwidth",
             &block::get_bandwidth,
             py::arg("channel"),
             D(block, get_bandwidth))


        .def("list_antennas",
             &block::list_antennas,
             py::arg("channel"),
             D(block, list_antennas))


        .def("set_antenna",
             &block::set_antenna,
             py::arg("channel"),
             py::arg("name"),
             D(block, set_antenna))


        .def(
            "get_antenna", &block::get_antenna, py::arg("channel"), D(block, get_antenna))


        .def("has_gain_mode",
             &block::has_gain_mode,
             py::arg("channel"),
             D(block, has_gain_mode))


        .def("set_gain_mode",
             &block::set_gain_mode,
             py::arg("channel"),
             py::arg("automatic"),
             D(block, set_gain_mode))


        .def("get_gain_mode",
             &block::get_gain_mode,
             py::arg("channel"),
             D(block, get_gain_mode))


        .def("set_gain",
             (void (block::*)(size_t, double)) & block::set_gain,
             py::arg("channel"),
             py::arg("gain"),
             D(block, set_gain, 0))


        .def("set_gain",
             (void (block::*)(size_t, const std::string&, double)) & block::set_gain,
             py::arg("channel"),
             py::arg("name"),
             py::arg("gain"),
             D(block, set_gain, 1))


        .def("get_gain", &block::get_gain, py::arg("channel"), D(block, get_gain))


        .def("has_frequency_correction",
             &block::has_frequency_correction,
             py::arg("channel"),
             D(block, has_frequency_correction))


        .def("has_frequency_correction",
             &block::has_frequency_correction,
             py::arg("channel"),
             D(block, has_frequency_correction))


        .def("set_frequency_correction",
             &block::set_frequency_correction,
             py::arg("channel"),
             py::arg("freq_correction"),
             D(block, set_frequency_correction))


        .def("get_frequency_correction",
             &block::get_frequency_correction,
             py::arg("channel"),
             D(block, get_frequency_correction))


        .def("has_dc_offset_mode",
             &block::has_dc_offset_mode,
             py::arg("channel"),
             D(block, has_dc_offset_mode))


        .def("set_dc_offset_mode",
             &block::set_dc_offset_mode,
             py::arg("channel"),
             py::arg("automatic"),
             D(block, set_dc_offset_mode))


        .def("get_dc_offset_mode",
             &block::get_dc_offset_mode,
             py::arg("channel"),
             D(block, get_dc_offset_mode))


        .def("has_dc_offset",
             &block::has_dc_offset,
             py::arg("channel"),
             D(block, has_dc_offset))


        .def("set_dc_offset",
             &block::set_dc_offset,
             py::arg("channel"),
             py::arg("dc_offset"),
             D(block, set_dc_offset))


        .def("get_dc_offset",
             &block::get_dc_offset,
             py::arg("channel"),
             D(block, get_dc_offset))


        .def("has_iq_balance",
             &block::has_iq_balance,
             py::arg("channel"),
             D(block, has_iq_balance))


        .def("set_iq_balance",
             &block::set_iq_balance,
             py::arg("channel"),
             py::arg("iq_balance"),
             D(block, set_iq_balance))


        .def("get_iq_balance",
             &block::get_iq_balance,
             py::arg("channel"),
             D(block, get_iq_balance))


        .def("set_master_clock_rate",
             &block::set_master_clock_rate,
             py::arg("clock_rate"),
             D(block, set_master_clock_rate))


        .def("get_master_clock_rate",
             &block::get_master_clock_rate,
             D(block, get_master_clock_rate))


        .def("set_clock_source",
             &block::set_clock_source,
             py::arg("clock_source"),
             D(block, set_clock_source))


        .def("get_clock_source", &block::get_clock_source, D(block, get_clock_source))

        ;
}