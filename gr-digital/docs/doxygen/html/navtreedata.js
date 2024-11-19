/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "GNU Radio C++ API Reference", "index.html", [
    [ "Build Instructions and Information", "build_guide.html", null ],
    [ "Components", "page_components.html", [
      [ "GNU Radio Blocks", "page_components.html#components_blocks", null ],
      [ "In-tree components", "page_components.html#components_list", null ],
      [ "Analog Modulation", "page_analog.html", [
        [ "Introduction", "page_analog.html#analog_introduction", null ]
      ] ],
      [ "Audio Interface", "page_audio.html", [
        [ "Introduction", "page_audio.html#audio_introduction", null ],
        [ "Usage", "page_audio.html#audio_usage", null ],
        [ "Adding a New Audio Machine", "page_audio.html#audio_adding", null ]
      ] ],
      [ "Standard GNU Radio Blocks", "page_blocks.html", [
        [ "Introduction", "page_blocks.html#blocks_introduction", null ]
      ] ],
      [ "Channel Model Blocks", "page_channels.html", [
        [ "Introduction", "page_channels.html#channels_introduction", null ],
        [ "Available Channel Models", "page_channels.html#channels_types", [
          [ "AWGN Channel", "page_channels.html#channels_awgn", null ],
          [ "Fading Channel Model", "page_channels.html#channels_fading", null ],
          [ "Frequency-Selective Fading Model", "page_channels.html#channels_selective_fading", null ],
          [ "Hardware Impairments Model", "page_channels.html#channels_hw_impairments", null ]
        ] ]
      ] ],
      [ "ControlPort", "page_ctrlport.html", [
        [ "Introduction", "page_ctrlport.html#ctrlport_introduction", null ],
        [ "Configuration", "page_ctrlport.html#ctrlport_conf", null ],
        [ "Dependencies", "page_ctrlport.html#ctrlport_deps", [
          [ "Apache Thrift", "page_ctrlport.html#ctrlport_thrift", [
            [ "Configuration", "page_ctrlport.html#ctrlport_thrift_prefs", null ],
            [ "Thrift: Current Issues", "page_ctrlport.html#ctrlport_thrift_issues", null ]
          ] ],
          [ "Translation Layer for Clients", "page_ctrlport.html#ctrlport_client_translation", null ]
        ] ],
        [ "Using ControlPort to Export Variables", "page_ctrlport.html#ctrlport_using", [
          [ "Alternative Registers", "page_ctrlport.html#ctrlport_alt_reg", null ]
        ] ],
        [ "Display Options", "page_ctrlport.html#ctrlport_disp", null ],
        [ "ControlPort Probes", "page_ctrlport.html#ctrlport_probes", null ],
        [ "ControlPort Monitors", "page_ctrlport.html#ctrlport_monitors", [
          [ "Performance Monitor", "page_ctrlport.html#perfmonitor", null ]
        ] ]
      ] ],
      [ "Digital Modulation", "page_digital.html", [
        [ "Introduction", "page_digital.html#digtial_introduction", null ],
        [ "Constellation Objects", "page_digital.html#digital_constellations", [
          [ "Constellation Objects in GRC", "page_digital.html#digital_grc_constellations", null ]
        ] ],
        [ "Python Constellation Helper Functions", "page_digital.html#digital_python_helpers", [
          [ "PSK Python Helpers", "page_digital.html#digital_python_helpers_psk", null ],
          [ "QAM Python Helpers", "page_digital.html#digital_python_helpers_qam", null ]
        ] ],
        [ "The Generic Modulator/Demodulator", "page_digital.html#digital_generic_mod_demod", [
          [ "Generic Modulator", "page_digital.html#digital_generic_mod", null ],
          [ "Generic Demodulator", "page_digital.html#digital_generic_demod", null ],
          [ "Guts of the Modulator and Demodulator", "page_digital.html#digital_generic_guts", null ]
        ] ],
        [ "Constellation Modulator", "page_digital.html#digital_constellation_modulator", null ],
        [ "Support for Soft Decisions", "page_digital.html#digital_softbits", [
          [ "Review of the Soft Decision API/Functions", "page_digital.html#soft_dec_api", null ]
        ] ]
      ] ],
      [ "Packet Communications", "page_packet_comms.html", [
        [ "Introduction", "page_packet_comms.html#packet_introduction", null ],
        [ "Understanding the Transmitter", "page_packet_comms.html#packet_tx", [
          [ "Parameters of the packet_tx Example", "page_packet_comms.html#packet_tx_params", null ],
          [ "Examples", "page_packet_comms.html#packet_tx_examples", null ]
        ] ],
        [ "Understanding the Receiver", "page_packet_comms.html#packet_rx", [
          [ "Correlation Estimator", "page_packet_comms.html#packet_rx_correst", null ],
          [ "Timing Recovery", "page_packet_comms.html#packet_rx_timing", null ],
          [ "Header/Payload Demux", "page_packet_comms.html#packet_rx_hpd", null ],
          [ "Header Processing Chain", "page_packet_comms.html#packet_rx_hdr_chain", null ],
          [ "Payload Processing Chain", "page_packet_comms.html#packet_rx_pld_chain", null ]
        ] ]
      ] ],
      [ "Forward Error Correction", "page_fec.html", [
        [ "Introduction", "page_fec.html#fec_introduction", null ],
        [ "Using the FEC API", "page_fec.html#fec_using", [
          [ "Deployments", "page_fec.html#fec_deployments", [
            [ "Streaming Deployments", "page_fec.html#fec_deploy_simple", null ],
            [ "Tagged Stream Deployments", "page_fec.html#fec_deploy_tag_stream", null ],
            [ "Asynchronous Deployments", "page_fec.html#fec_deploy_async", null ]
          ] ],
          [ "Encoding/Decoding Variables", "page_fec.html#fec_coding_vars", [
            [ "Dummy Encoder/Decoder", "page_fec.html#fec_dummy", null ],
            [ "Repetition Encoder/Decoder", "page_fec.html#fec_repetition", null ],
            [ "Convolutional Encoder/Decoder", "page_fec.html#fec_cc", null ]
          ] ],
          [ "Parallelism", "page_fec.html#fec_parallelism", null ]
        ] ],
        [ "The API of the FECAPI", "page_fec.html#fec_api", null ],
        [ "FEC Examples", "page_fec.html#fec_examples", null ],
        [ "LDPC Codes", "page_fec.html#fec_ldpc", [
          [ "Describing the alist Files", "page_fec.html#fec_alist", null ],
          [ "LDPC Encoders", "page_fec.html#fec_ldpc_encoders", null ],
          [ "LDPC Decoders", "page_fec.html#fec_ldpc_decoder", null ]
        ] ]
      ] ],
      [ "FFT Signal Processing Blocks", "page_fft.html", [
        [ "Introduction", "page_fft.html#fft_introduction", null ],
        [ "Dependencies", "page_fft.html#fft_dependencies", null ]
      ] ],
      [ "Filter Signal Processing Blocks", "page_filter.html", [
        [ "Introduction", "page_filter.html#filter_introduction", null ],
        [ "Dependencies", "page_filter.html#filter_dependencies", null ],
        [ "Usage", "page_filter.html#filter_usage", [
          [ "Kernels", "page_filter.html#filter_kernels", null ],
          [ "Blocks", "page_filter.html#filter_blocks", null ],
          [ "Design Tools", "page_filter.html#filter_design_tools", null ],
          [ "Filter Design GUI Tool", "page_filter.html#filter_design", null ]
        ] ]
      ] ],
      [ "QT Graphical User Interface", "page_qtgui.html", [
        [ "Introduction", "page_qtgui.html#qtgui_introduction", [
          [ "Blocks", "page_qtgui.html#qtgui_blocks", null ]
        ] ],
        [ "Drop-Down Menu and Interacting with Plots", "page_qtgui.html#qtgui_menu", [
          [ "Triggering Menu for Time Plots", "page_qtgui.html#qtgui_menu_trigger", null ]
        ] ],
        [ "Dependencies", "page_qtgui.html#qtgui_dependencies", null ],
        [ "Usage", "page_qtgui.html#qtgui_usage", null ],
        [ "Message Input Support", "page_qtgui.html#qtgui_messages", null ],
        [ "QTGUI Widgets", "page_qtgui.html#qtgui_widgets", [
          [ "Python widgets:", "page_qtgui.html#qtgui_widgets_python", null ],
          [ "C++ and Message-Passing Widgets", "page_qtgui.html#qtgui_widgets_cpp", null ]
        ] ],
        [ "Configuration", "page_qtgui.html#qtgui_configuration", null ]
      ] ],
      [ "UHD Interface", "page_uhd.html", [
        [ "Introduction", "page_uhd.html#uhd_introduction", null ],
        [ "External Documentation", "page_uhd.html#uhd_external_docs", null ],
        [ "Command Syntax", "page_uhd.html#uhd_command_syntax", [
          [ "Common command keys", "page_uhd.html#uhd_command_syntax_cmds", null ],
          [ "Dictionaries vs pairs", "page_uhd.html#uhd_command_syntax_multi_vs_single", null ]
        ] ],
        [ "Configuring a UHD object", "page_uhd.html#uhd_configuring", null ],
        [ "Logging", "page_uhd.html#Logging", null ]
      ] ],
      [ "Voice Coders and Decoders (Vocoders)", "page_vocoder.html", [
        [ "Introduction", "page_vocoder.html#vocoder_introduction", null ],
        [ "Using the vocoders", "page_vocoder.html#vocoders_using", null ]
      ] ],
      [ "ZeroMQ", "page_zeromq.html", [
        [ "Introduction", "page_zeromq.html#zmq_introduction", null ]
      ] ]
    ] ],
    [ "License", "License.html", null ],
    [ "Release Process Documentation", "page_releasing.html", [
      [ "Preparation", "page_releasing.html#Preparation", null ],
      [ "Tagging", "page_releasing.html#Release", null ],
      [ "Of Archives", "page_releasing.html#Creation", null ]
    ] ],
    [ "Topics", "topics.html", "topics" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", "namespacemembers_type" ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", "namespacemembers_eval" ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", "functions_type" ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Properties", "functions_prop.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", "globals_vars" ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"ConstellationDisplayPlot_8h.html",
"add__const__v__pydoc__template_8h.html#a74021f021dcdfbb22891787b79c5529d",
"agc__cc__pydoc__template_8h.html#a8fd3a984e25050c256dc70290cd2d1eb",
"async__decoder__pydoc__template_8h_source.html",
"atsc__viterbi__decoder__pydoc_8h.html",
"ber__sink__b__pydoc__template_8h.html#a3a9a3e6206797f777c98b52ba479936b",
"block__pydoc__template_8h.html#ae686fa7f7f80815514a9191ee2eb3457",
"build_2gr-digital_2python_2digital_2bindings_2pydoc__macros_8h.html#a6f1e731f1c6d2893ff1bf98582a7de6e",
"burst__tagger__pydoc_8h.html",
"channel__model2__pydoc__template_8h_source.html",
"classDisplayPlot.html#a066be975bb64b9cc964f48fb49ba3140",
"classEyeDisplayPlot.html#a662ec1fdaeb4b69f7a7d29ba2fab1699",
"classFrequencyDisplayPlot.html#adb5a261b213cd8641ea6a8dc183f7a2c",
"classNumberUpdateEvent.html#a8af88056f94428722d2d403ccafb8b22",
"classTimeRasterData.html#ae0fa0d8e991aa68ddb14aeeb78812fcc",
"classWaterfallData.html#a99e8f2bbc4b703335121ec5dfab077e4",
"classgr_1_1analog_1_1agc__ff.html#a78231d7e8ecf7b686afe27b9620c6659",
"classgr_1_1analog_1_1probe__avg__mag__sqrd__cf.html#a9694a879accbf3b87c8f0f3e40a3e66e",
"classgr_1_1block.html#a691c55aa7b05a6b316754b4833c7c08b",
"classgr_1_1blocks_1_1burst__to__stream.html#ab94c8f65886d4d0a1fbd41de74d0174b",
"classgr_1_1blocks_1_1file__meta__sink.html",
"classgr_1_1blocks_1_1multiply__matrix.html#affd6d56ec0bb411dd22e84f303148853",
"classgr_1_1blocks_1_1tagged__stream__mux.html#a8b93b729c6b28b7602329fc371d2d4e3",
"classgr_1_1buffer__reader__sm.html#acb53d0b2074b12d0cb5d534b09dfcbd1",
"classgr_1_1digital_1_1adaptive__algorithm__cma.html#ae77697cba88ad968d6f964e1fc9e3f6b",
"classgr_1_1digital_1_1constellation__encoder__bc.html#ac823c889b3d20b1fcebfb279e6b6b30f",
"classgr_1_1digital_1_1header__buffer.html#ad6e25d151d487a80f31c59a79786ac00",
"classgr_1_1digital_1_1ofdm__equalizer__1d__pilots.html#a9c7e2ca360f53503b26dd75871c6e134",
"classgr_1_1dtv_1_1atsc__equalizer.html",
"classgr_1_1dtv_1_1dvbt__energy__descramble.html#ab0d84409f900c830c49e261a75d10185",
"classgr_1_1fec_1_1code_1_1polar__decoder__common.html#acff899cbe0a56c888e5223eb7f89a511",
"classgr_1_1fft_1_1fft.html#a5d7ddd1b58f298c15c9acd5a3a5378cc",
"classgr_1_1filter_1_1kernel_1_1fft__filter__ccc.html#a1302742ba9b8c74f326bc5fbb42c4e22",
"classgr_1_1filter_1_1kernel_1_1pfb__arb__resampler__ccf.html#a13e057b5decc3453c4dfd02123d4bf90",
"classgr_1_1flowgraph.html#a70edda40440a873ae72c7b4324e1c67a",
"classgr_1_1iio_1_1fmcomms2__source.html#a48e7d9c65774ebd1fb2a09fada1d73b5",
"classgr_1_1msg__queue.html#af30f222dc9db01fae0d2068f3974490f",
"classgr_1_1qtgui_1_1const__sink__c.html#a5a47603ef5432a91cf1b856edcce1677",
"classgr_1_1qtgui_1_1freq__sink__c.html#a6fd33a77bfe894f9d8678f3688c91f08",
"classgr_1_1qtgui_1_1number__sink.html#a377235fcef26accab452a023d85c8009",
"classgr_1_1qtgui_1_1time__raster__sink__f.html#ab771e124ae4b12c1d147f831deb89cd0",
"classgr_1_1qtgui_1_1vector__sink__f.html#aefed1871549ca80d595af01bf64a0f52",
"classgr_1_1soapy_1_1block.html#a5357a83f3487354d502da87a5f057818",
"classgr_1_1trellis_1_1interleaver.html#ac5d01f929d729dceab19280fbb173ed6",
"classgr_1_1uhd_1_1rfnoc__graph.html#adf77b9e6b573e41b228cb479b9f7bf38",
"classgr_1_1vocoder_1_1cvsd__decode__bs.html#a4ca301d9457ca597de24592cec6fe0bc",
"classpmt_1_1pmt__base.html#ac2d7ea43edabd18ffebdce0383c3cc66",
"classrpcserver__booter__base.html#ad91b8016dc178034c777f40bd0749130",
"complex__to__interleaved__short__pydoc_8h.html#ab1d412757909776fd098045b30e92b4d",
"constellation__pydoc_8h.html#a092f0a30a3b4b51b1ab0c5d06820653f",
"control__loop__pydoc__template_8h.html#acd879e1bb50fcfd9507ac794fcf067da",
"correlate__access__code__tag__bb__pydoc__template_8h.html#adf199b4fb6e311f887d291e65418af54",
"ctcss__squelch__ff__pydoc__template_8h.html#ac7ee392d3a478d38df8ad2ab49107664",
"dds__control__pydoc_8h.html#a21cf22ed45f03e6d6e88bebc46b51acd",
"dir_056d2f8bb5af639c35c38b0b20b88e83.html",
"dir_a44065ac50e41085e0cb2f87aafa053a.html",
"dvb__bbscrambler__bb__pydoc_8h_source.html",
"dvbt2__config_8h.html#a2671c3945b367b0a5eab090dbde6322ba03faa2897a67613fe08f9b9dfdd92b6b",
"dvbt__convolutional__interleaver__pydoc__template_8h.html#a5eb8eb3fbb265ad1a3ccea5612f10b96",
"encode__ccsds__27__bb__pydoc__template_8h.html#a520e38d75c9389e0953a194b0b1a4116",
"fading__model__pydoc_8h.html#a9be183a61cc34a740e1817c2600c17a9",
"file__descriptor__sink__pydoc__template_8h.html#aa2c27b5f00bcc3af4da59aa4d6046be9",
"fir__filter__with__buffer__pydoc_8h.html#ad092b1e0011ba97ecd2d5d1c64963305",
"flowgraph__pydoc_8h.html#aa3e039cd6a24e61d77ad6cf686851489",
"freq__sink__c__pydoc_8h.html#a74021f021dcdfbb22891787b79c5529d",
"fsm__pydoc_8h_source.html",
"g721__encode__sb__pydoc__template_8h.html#a2ebce97f21e182002c826f771675c7ae",
"globals_a.html",
"gr-customModule_2build_2python_2customModule_2bindings_2pydoc__macros_8h.html#afa7cf06549cf7fd295f622ef6f376357",
"gr-digital_2gr-qtgui_2python_2qtgui_2bindings_2pydoc__macros_8h.html#afdd58e017733f2235c227ef8dd3b2de8",
"gr-soapy_2python_2soapy_2bindings_2block__pydoc_8h.html#ab73e6a72a158968c7c41035bdfb7b75f",
"header__buffer__pydoc_8h.html#a74021f021dcdfbb22891787b79c5529d",
"high__res__timer_8h.html#a929f45f159af9ecb21c42e9c3addc622",
"iir__filter__pydoc_8h.html#a699e9376cccbd6443c32c9f4e946428f",
"ldpc__G__matrix__pydoc_8h.html#a2a407e0156d810d938af44eeddd5ec27",
"linear__equalizer__pydoc_8h.html",
"maxstar_8h.html#a2900d511872eae2e209d6a7000819871",
"mmse__interp__differentiator__cc__pydoc_8h.html#accd85a604a2892e02549b65723c49d6e",
"msg__queue__pydoc_8h.html#a74021f021dcdfbb22891787b79c5529d",
"namespacegr.html#af6ce2f82bb6576f7af96a66e8c135f6d",
"namespacegr_1_1dtv.html#a0c44fd152cd1793fc236a7c9458859ebaf73225568f5332c5620d9163e65c1b60",
"namespacegr_1_1filter_1_1kernel.html#a586eaffdd2e520f032d4d5eaf6764a9b",
"namespacemembers_e.html",
"namespacepmt.html#aa2dfbbf50e23200827e9596bd3dbf3e1",
"number__sink__pydoc__template_8h.html#a5a612c878a005c9d71ac23af90f5771b",
"pack__k__bits__pydoc__template_8h.html#adf06c6a576950b3523b7ba736c920adf",
"pccc__decoder__blk_8h.html#a31b3991265700bd18163359ad11f93c2",
"peak__detector_8h.html#a5893c300b2b789bdd8bbd5d4962d2a73",
"pfb__arb__resampler__pydoc__template_8h.html#ad1f1f9f7462237e59a9decd69e685465",
"phase__shift__pydoc_8h.html#a58338b47e933c96d502cca3a6c5649e0",
"pmt_8h.html#a40d012b25cb6af2b5372820af9d7329f",
"pmt__pydoc_8h.html#a352aacc7c85436ffe6aff0208ad2a16f",
"pmt__pydoc__template_8h.html#a1c66fcdf5e169adce20ac0bddb8e5368",
"pmt__serial__tags_8h.html#abdf3c401a44b88c89208285f00d6643fa06f5d508e4179e6596b587309be01760",
"polar__encoder__systematic__pydoc__template_8h.html#ac6a5dda517ff65a5283df6bace215bef",
"probe__signal__v__pydoc_8h_source.html",
"pwr__squelch__ff__pydoc__template_8h.html#aef2dca0da316b879b6d3cfe1e8dc59ef",
"rep__msg__sink__pydoc__template_8h.html#ae11192faa558366d66ed0019f82d36b9",
"rfnoc__fir__filter__pydoc__template_8h.html#acbaee0790d8837f7b56a81a9758380a0",
"rfnoc__tx__streamer__pydoc_8h.html#a426c9a6c22ebecb7693dfb06cbf15f67",
"sccc__decoder__combined__blk_8h.html#a3b5caa53a139eff0e3637f2d4793f15f",
"single__pole__iir__filter__cc__pydoc__template_8h_source.html",
"soapy__types_8h.html#a56ff9f98449b5f5487c47112b40ffaee",
"stretch__ff__pydoc_8h.html#a80ace54b2528a83aa5d70be59eba4bc9",
"structrpcpmtconverter_1_1to__pmt__string__f.html#acdada0ff7b75111da5c58b531d81eefa",
"tag__debug__pydoc__template_8h_source.html",
"tcp__sink_8h.html#ab2fb7645eafc888b307a9b08934a5e50",
"time__raster__sink__f__pydoc_8h.html#ad12880b21a0e85f567523ea8a24fd148",
"timerasterdisplayform__pydoc__template_8h.html",
"udp__sink__pydoc__template_8h.html#a74021f021dcdfbb22891787b79c5529d",
"usrp__block__pydoc__template_8h.html#acd281468ff697e30efa8c3dd823573fe",
"vector__sink__f__pydoc__template_8h.html#a7b7dadba081883cef62620924333c61e",
"waterfall__sink__f__pydoc__template_8h.html#afc2def4a37d60195b06799a1e7a954ce"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';