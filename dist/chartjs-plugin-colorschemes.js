/*
 * @license
 * chartjs-plugin-colorschemes
 * https://github.com/nagix/chartjs-plugin-colorschemes/
 * Version: 0.2.0
 *
 * Copyright 2018 Akihiko Kusanagi
 * Released under the MIT license
 * https://github.com/nagix/chartjs-plugin-colorschemes/blob/master/LICENSE.md
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('chart.js')) :
	typeof define === 'function' && define.amd ? define(['chart.js'], factory) :
	(global['chartjs-plugin-colorschemes'] = factory(global.Chart));
}(this, (function (Chart) { 'use strict';

Chart = Chart && Chart.hasOwnProperty('default') ? Chart['default'] : Chart;

'use strict';

var brewer = {
	// Sequential
	YlGn3: ['#f7fcb9', '#addd8e', '#31a354'],
	YlGn4: ['#ffffcc', '#c2e699', '#78c679', '#238443'],
	YlGn5: ['#ffffcc', '#c2e699', '#78c679', '#31a354', '#006837'],
	YlGn6: ['#ffffcc', '#d9f0a3', '#addd8e', '#78c679', '#31a354', '#006837'],
	YlGn7: ['#ffffcc', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#005a32'],
	YlGn8: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#005a32'],
	YlGn9: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],

	YlGnBu3: ['#edf8b1', '#7fcdbb', '#2c7fb8'],
	YlGnBu4: ['#ffffcc', '#a1dab4', '#41b6c4', '#225ea8'],
	YlGnBu5: ['#ffffcc', '#a1dab4', '#41b6c4', '#2c7fb8', '#253494'],
	YlGnBu6: ['#ffffcc', '#c7e9b4', '#7fcdbb', '#41b6c4', '#2c7fb8', '#253494'],
	YlGnBu7: ['#ffffcc', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#0c2c84'],
	YlGnBu8: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#0c2c84'],
	YlGnBu9: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],

	GnBu3: ['#e0f3db', '#a8ddb5', '#43a2ca'],
	GnBu4: ['#f0f9e8', '#bae4bc', '#7bccc4', '#2b8cbe'],
	GnBu5: ['#f0f9e8', '#bae4bc', '#7bccc4', '#43a2ca', '#0868ac'],
	GnBu6: ['#f0f9e8', '#ccebc5', '#a8ddb5', '#7bccc4', '#43a2ca', '#0868ac'],
	GnBu7: ['#f0f9e8', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#08589e'],
	GnBu8: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#08589e'],
	GnBu9: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],

	BuGn3: ['#e5f5f9', '#99d8c9', '#2ca25f'],
	BuGn4: ['#edf8fb', '#b2e2e2', '#66c2a4', '#238b45'],
	BuGn5: ['#edf8fb', '#b2e2e2', '#66c2a4', '#2ca25f', '#006d2c'],
	BuGn6: ['#edf8fb', '#ccece6', '#99d8c9', '#66c2a4', '#2ca25f', '#006d2c'],
	BuGn7: ['#edf8fb', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#005824'],
	BuGn8: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#005824'],
	BuGn9: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],

	PuBuGn3: ['#ece2f0', '#a6bddb', '#1c9099'],
	PuBuGn4: ['#f6eff7', '#bdc9e1', '#67a9cf', '#02818a'],
	PuBuGn5: ['#f6eff7', '#bdc9e1', '#67a9cf', '#1c9099', '#016c59'],
	PuBuGn6: ['#f6eff7', '#d0d1e6', '#a6bddb', '#67a9cf', '#1c9099', '#016c59'],
	PuBuGn7: ['#f6eff7', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016450'],
	PuBuGn8: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016450'],
	PuBuGn9: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],

	PuBu3: ['#ece7f2', '#a6bddb', '#2b8cbe'],
	PuBu4: ['#f1eef6', '#bdc9e1', '#74a9cf', '#0570b0'],
	PuBu5: ['#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d'],
	PuBu6: ['#f1eef6', '#d0d1e6', '#a6bddb', '#74a9cf', '#2b8cbe', '#045a8d'],
	PuBu7: ['#f1eef6', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#034e7b'],
	PuBu8: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#034e7b'],
	PuBu9: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],

	BuPu3: ['#e0ecf4', '#9ebcda', '#8856a7'],
	BuPu4: ['#edf8fb', '#b3cde3', '#8c96c6', '#88419d'],
	BuPu5: ['#edf8fb', '#b3cde3', '#8c96c6', '#8856a7', '#810f7c'],
	BuPu6: ['#edf8fb', '#bfd3e6', '#9ebcda', '#8c96c6', '#8856a7', '#810f7c'],
	BuPu7: ['#edf8fb', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#6e016b'],
	BuPu8: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#6e016b'],
	BuPu9: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],

	RdPu3: ['#fde0dd', '#fa9fb5', '#c51b8a'],
	RdPu4: ['#feebe2', '#fbb4b9', '#f768a1', '#ae017e'],
	RdPu5: ['#feebe2', '#fbb4b9', '#f768a1', '#c51b8a', '#7a0177'],
	RdPu6: ['#feebe2', '#fcc5c0', '#fa9fb5', '#f768a1', '#c51b8a', '#7a0177'],
	RdPu7: ['#feebe2', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177'],
	RdPu8: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177'],
	RdPu9: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],

	PuRd3: ['#e7e1ef', '#c994c7', '#dd1c77'],
	PuRd4: ['#f1eef6', '#d7b5d8', '#df65b0', '#ce1256'],
	PuRd5: ['#f1eef6', '#d7b5d8', '#df65b0', '#dd1c77', '#980043'],
	PuRd6: ['#f1eef6', '#d4b9da', '#c994c7', '#df65b0', '#dd1c77', '#980043'],
	PuRd7: ['#f1eef6', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#91003f'],
	PuRd8: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#91003f'],
	PuRd9: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],

	OrRd3: ['#fee8c8', '#fdbb84', '#e34a33'],
	OrRd4: ['#fef0d9', '#fdcc8a', '#fc8d59', '#d7301f'],
	OrRd5: ['#fef0d9', '#fdcc8a', '#fc8d59', '#e34a33', '#b30000'],
	OrRd6: ['#fef0d9', '#fdd49e', '#fdbb84', '#fc8d59', '#e34a33', '#b30000'],
	OrRd7: ['#fef0d9', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#990000'],
	OrRd8: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#990000'],
	OrRd9: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],

	YlOrRd3: ['#ffeda0', '#feb24c', '#f03b20'],
	YlOrRd4: ['#ffffb2', '#fecc5c', '#fd8d3c', '#e31a1c'],
	YlOrRd5: ['#ffffb2', '#fecc5c', '#fd8d3c', '#f03b20', '#bd0026'],
	YlOrRd6: ['#ffffb2', '#fed976', '#feb24c', '#fd8d3c', '#f03b20', '#bd0026'],
	YlOrRd7: ['#ffffb2', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#b10026'],
	YlOrRd8: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#b10026'],
	YlOrRd9: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],

	YlOrBr3: ['#fff7bc', '#fec44f', '#d95f0e'],
	YlOrBr4: ['#ffffd4', '#fed98e', '#fe9929', '#cc4c02'],
	YlOrBr5: ['#ffffd4', '#fed98e', '#fe9929', '#d95f0e', '#993404'],
	YlOrBr6: ['#ffffd4', '#fee391', '#fec44f', '#fe9929', '#d95f0e', '#993404'],
	YlOrBr7: ['#ffffd4', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#8c2d04'],
	YlOrBr8: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#8c2d04'],
	YlOrBr9: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],

	Purples3: ['#efedf5', '#bcbddc', '#756bb1'],
	Purples4: ['#f2f0f7', '#cbc9e2', '#9e9ac8', '#6a51a3'],
	Purples5: ['#f2f0f7', '#cbc9e2', '#9e9ac8', '#756bb1', '#54278f'],
	Purples6: ['#f2f0f7', '#dadaeb', '#bcbddc', '#9e9ac8', '#756bb1', '#54278f'],
	Purples7: ['#f2f0f7', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#4a1486'],
	Purples8: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#4a1486'],
	Purples9: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],

	Blues3: ['#deebf7', '#9ecae1', '#3182bd'],
	Blues4: ['#eff3ff', '#bdd7e7', '#6baed6', '#2171b5'],
	Blues5: ['#eff3ff', '#bdd7e7', '#6baed6', '#3182bd', '#08519c'],
	Blues6: ['#eff3ff', '#c6dbef', '#9ecae1', '#6baed6', '#3182bd', '#08519c'],
	Blues7: ['#eff3ff', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#084594'],
	Blues8: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#084594'],
	Blues9: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],

	Greens3: ['#e5f5e0', '#a1d99b', '#31a354'],
	Greens4: ['#edf8e9', '#bae4b3', '#74c476', '#238b45'],
	Greens5: ['#edf8e9', '#bae4b3', '#74c476', '#31a354', '#006d2c'],
	Greens6: ['#edf8e9', '#c7e9c0', '#a1d99b', '#74c476', '#31a354', '#006d2c'],
	Greens7: ['#edf8e9', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#005a32'],
	Greens8: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#005a32'],
	Greens9: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],

	Oranges3: ['#fee6ce', '#fdae6b', '#e6550d'],
	Oranges4: ['#feedde', '#fdbe85', '#fd8d3c', '#d94701'],
	Oranges5: ['#feedde', '#fdbe85', '#fd8d3c', '#e6550d', '#a63603'],
	Oranges6: ['#feedde', '#fdd0a2', '#fdae6b', '#fd8d3c', '#e6550d', '#a63603'],
	Oranges7: ['#feedde', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#8c2d04'],
	Oranges8: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#8c2d04'],
	Oranges9: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],

	Reds3: ['#fee0d2', '#fc9272', '#de2d26'],
	Reds4: ['#fee5d9', '#fcae91', '#fb6a4a', '#cb181d'],
	Reds5: ['#fee5d9', '#fcae91', '#fb6a4a', '#de2d26', '#a50f15'],
	Reds6: ['#fee5d9', '#fcbba1', '#fc9272', '#fb6a4a', '#de2d26', '#a50f15'],
	Reds7: ['#fee5d9', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#99000d'],
	Reds8: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#99000d'],
	Reds9: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],

	Greys3: ['#f0f0f0', '#bdbdbd', '#636363'],
	Greys4: ['#f7f7f7', '#cccccc', '#969696', '#525252'],
	Greys5: ['#f7f7f7', '#cccccc', '#969696', '#636363', '#252525'],
	Greys6: ['#f7f7f7', '#d9d9d9', '#bdbdbd', '#969696', '#636363', '#252525'],
	Greys7: ['#f7f7f7', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525'],
	Greys8: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525'],
	Greys9: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],

	// Diverging
	PuOr3: ['#f1a340', '#f7f7f7', '#998ec3'],
	PuOr4: ['#e66101', '#fdb863', '#b2abd2', '#5e3c99'],
	PuOr5: ['#e66101', '#fdb863', '#f7f7f7', '#b2abd2', '#5e3c99'],
	PuOr6: ['#b35806', '#f1a340', '#fee0b6', '#d8daeb', '#998ec3', '#542788'],
	PuOr7: ['#b35806', '#f1a340', '#fee0b6', '#f7f7f7', '#d8daeb', '#998ec3', '#542788'],
	PuOr8: ['#b35806', '#e08214', '#fdb863', '#fee0b6', '#d8daeb', '#b2abd2', '#8073ac', '#542788'],
	PuOr9: ['#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788'],
	PuOr10: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
	PuOr11: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],

	BrBG3: ['#d8b365', '#f5f5f5', '#5ab4ac'],
	BrBG4: ['#a6611a', '#dfc27d', '#80cdc1', '#018571'],
	BrBG5: ['#a6611a', '#dfc27d', '#f5f5f5', '#80cdc1', '#018571'],
	BrBG6: ['#8c510a', '#d8b365', '#f6e8c3', '#c7eae5', '#5ab4ac', '#01665e'],
	BrBG7: ['#8c510a', '#d8b365', '#f6e8c3', '#f5f5f5', '#c7eae5', '#5ab4ac', '#01665e'],
	BrBG8: ['#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#c7eae5', '#80cdc1', '#35978f', '#01665e'],
	BrBG9: ['#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e'],
	BrBG10: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
	BrBG11: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],

	PRGn3: ['#af8dc3', '#f7f7f7', '#7fbf7b'],
	PRGn4: ['#7b3294', '#c2a5cf', '#a6dba0', '#008837'],
	PRGn5: ['#7b3294', '#c2a5cf', '#f7f7f7', '#a6dba0', '#008837'],
	PRGn6: ['#762a83', '#af8dc3', '#e7d4e8', '#d9f0d3', '#7fbf7b', '#1b7837'],
	PRGn7: ['#762a83', '#af8dc3', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#7fbf7b', '#1b7837'],
	PRGn8: ['#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837'],
	PRGn9: ['#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837'],
	PRGn10: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
	PRGn11: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],

	PiYG3: ['#e9a3c9', '#f7f7f7', '#a1d76a'],
	PiYG4: ['#d01c8b', '#f1b6da', '#b8e186', '#4dac26'],
	PiYG5: ['#d01c8b', '#f1b6da', '#f7f7f7', '#b8e186', '#4dac26'],
	PiYG6: ['#c51b7d', '#e9a3c9', '#fde0ef', '#e6f5d0', '#a1d76a', '#4d9221'],
	PiYG7: ['#c51b7d', '#e9a3c9', '#fde0ef', '#f7f7f7', '#e6f5d0', '#a1d76a', '#4d9221'],
	PiYG8: ['#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221'],
	PiYG9: ['#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221'],
	PiYG10: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
	PiYG11: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],

	RdBu3: ['#ef8a62', '#f7f7f7', '#67a9cf'],
	RdBu4: ['#ca0020', '#f4a582', '#92c5de', '#0571b0'],
	RdBu5: ['#ca0020', '#f4a582', '#f7f7f7', '#92c5de', '#0571b0'],
	RdBu6: ['#b2182b', '#ef8a62', '#fddbc7', '#d1e5f0', '#67a9cf', '#2166ac'],
	RdBu7: ['#b2182b', '#ef8a62', '#fddbc7', '#f7f7f7', '#d1e5f0', '#67a9cf', '#2166ac'],
	RdBu8: ['#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac'],
	RdBu9: ['#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac'],
	RdBu10: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
	RdBu11: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],

	RdGy3: ['#ef8a62', '#ffffff', '#999999'],
	RdGy4: ['#ca0020', '#f4a582', '#bababa', '#404040'],
	RdGy5: ['#ca0020', '#f4a582', '#ffffff', '#bababa', '#404040'],
	RdGy6: ['#b2182b', '#ef8a62', '#fddbc7', '#e0e0e0', '#999999', '#4d4d4d'],
	RdGy7: ['#b2182b', '#ef8a62', '#fddbc7', '#ffffff', '#e0e0e0', '#999999', '#4d4d4d'],
	RdGy8: ['#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#e0e0e0', '#bababa', '#878787', '#4d4d4d'],
	RdGy9: ['#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d'],
	RdGy10: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
	RdGy11: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],

	RdYlBu3: ['#fc8d59', '#ffffbf', '#91bfdb'],
	RdYlBu4: ['#d7191c', '#fdae61', '#abd9e9', '#2c7bb6'],
	RdYlBu5: ['#d7191c', '#fdae61', '#ffffbf', '#abd9e9', '#2c7bb6'],
	RdYlBu6: ['#d73027', '#fc8d59', '#fee090', '#e0f3f8', '#91bfdb', '#4575b4'],
	RdYlBu7: ['#d73027', '#fc8d59', '#fee090', '#ffffbf', '#e0f3f8', '#91bfdb', '#4575b4'],
	RdYlBu8: ['#d73027', '#f46d43', '#fdae61', '#fee090', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4'],
	RdYlBu9: ['#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4'],
	RdYlBu10: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
	RdYlBu11: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],

	Spectral3: ['#fc8d59', '#ffffbf', '#99d594'],
	Spectral4: ['#d7191c', '#fdae61', '#abdda4', '#2b83ba'],
	Spectral5: ['#d7191c', '#fdae61', '#ffffbf', '#abdda4', '#2b83ba'],
	Spectral6: ['#d53e4f', '#fc8d59', '#fee08b', '#e6f598', '#99d594', '#3288bd'],
	Spectral7: ['#d53e4f', '#fc8d59', '#fee08b', '#ffffbf', '#e6f598', '#99d594', '#3288bd'],
	Spectral8: ['#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598', '#abdda4', '#66c2a5', '#3288bd'],
	Spectral9: ['#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd'],
	Spectral10: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
	Spectral11: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],

	RdYlGn3: ['#fc8d59', '#ffffbf', '#91cf60'],
	RdYlGn4: ['#d7191c', '#fdae61', '#a6d96a', '#1a9641'],
	RdYlGn5: ['#d7191c', '#fdae61', '#ffffbf', '#a6d96a', '#1a9641'],
	RdYlGn6: ['#d73027', '#fc8d59', '#fee08b', '#d9ef8b', '#91cf60', '#1a9850'],
	RdYlGn7: ['#d73027', '#fc8d59', '#fee08b', '#ffffbf', '#d9ef8b', '#91cf60', '#1a9850'],
	RdYlGn8: ['#d73027', '#f46d43', '#fdae61', '#fee08b', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850'],
	RdYlGn9: ['#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850'],
	RdYlGn10: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
	RdYlGn11: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],

	// Qualitative
	Accent3: ['#7fc97f', '#beaed4', '#fdc086'],
	Accent4: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99'],
	Accent5: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0'],
	Accent6: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f'],
	Accent7: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17'],
	Accent8: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],

	'Dark2-3': ['#1b9e77', '#d95f02', '#7570b3'],
	'Dark2-4': ['#1b9e77', '#d95f02', '#7570b3', '#e7298a'],
	'Dark2-5': ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e'],
	'Dark2-6': ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02'],
	'Dark2-7': ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d'],
	'Dark2-8': ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],

	Paired3: ['#a6cee3', '#1f78b4', '#b2df8a'],
	Paired4: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c'],
	Paired5: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99'],
	Paired6: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c'],
	Paired7: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f'],
	Paired8: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00'],
	Paired9: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6'],
	Paired10: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a'],
	Paired11: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99'],
	Paired12: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],

	'Pastel1-3': ['#fbb4ae', '#b3cde3', '#ccebc5'],
	'Pastel1-4': ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4'],
	'Pastel1-5': ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6'],
	'Pastel1-6': ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc'],
	'Pastel1-7': ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd'],
	'Pastel1-8': ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec'],
	'Pastel1-9': ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2'],

	'Pastel2-3': ['#b3e2cd', '#fdcdac', '#cbd5e8'],
	'Pastel2-4': ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4'],
	'Pastel2-5': ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9'],
	'Pastel2-6': ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae'],
	'Pastel2-7': ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc'],
	'Pastel2-8': ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],

	'Set1-3': ['#e41a1c', '#377eb8', '#4daf4a'],
	'Set1-4': ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3'],
	'Set1-5': ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00'],
	'Set1-6': ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33'],
	'Set1-7': ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628'],
	'Set1-8': ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf'],
	'Set1-9': ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],

	'Set2-3': ['#66c2a5', '#fc8d62', '#8da0cb'],
	'Set2-4': ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3'],
	'Set2-5': ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854'],
	'Set2-6': ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f'],
	'Set2-7': ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494'],
	'Set2-8': ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],

	'Set3-3': ['#8dd3c7', '#ffffb3', '#bebada'],
	'Set3-4': ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072'],
	'Set3-5': ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3'],
	'Set3-6': ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462'],
	'Set3-7': ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69'],
	'Set3-8': ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5'],
	'Set3-9': ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9'],
	'Set3-10': ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd'],
	'Set3-11': ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5'],
	'Set3-12': ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f']
};

'use strict';

var tableau = {
	// New
	Tableau10: ['#4E79A7', '#F28E2B', '#E15759', '#76B7B2', '#59A14F', '#EDC948', '#B07AA1', '#FF9DA7', '#9C755F', '#BAB0AC'],
	Tableau20: ['#4E79A7', '#A0CBE8', '#F28E2B', '#FFBE7D', '#59A14F', '#8CD17D', '#B6992D', '#F1CE63', '#499894', '#86BCB6', '#E15759', '#FF9D9A', '#79706E', '#BAB0AC', '#D37295', '#FABFD2', '#B07AA1', '#D4A6C8', '#9D7660', '#D7B5A6'],
	ColorBlind10: ['#1170aa', '#fc7d0b', '#a3acb9', '#57606c', '#5fa2ce', '#c85200', '#7b848f', '#a3cce9', '#ffbc79', '#c8d0d9'],
	SeattleGrays5: ['#767f8b', '#b3b7b8', '#5c6068', '#d3d3d3', '#989ca3'],
	Traffic9: ['#b60a1c', '#e39802', '#309143', '#e03531', '#f0bd27', '#51b364', '#ff684c', '#ffda66', '#8ace7e'],
	MillerStone11: ['#4f6980', '#849db1', '#a2ceaa', '#638b66', '#bfbb60', '#f47942', '#fbb04e', '#b66353', '#d7ce9f', '#b9aa97', '#7e756d'],
	SuperfishelStone10: ['#6388b4', '#ffae34', '#ef6f6a', '#8cc2ca', '#55ad89', '#c3bc3f', '#bb7693', '#baa094', '#a9b5ae', '#767676'],
	NurielStone9: ['#8175aa', '#6fb899', '#31a1b3', '#ccb22b', '#a39fc9', '#94d0c0', '#959c9e', '#027b8e', '#9f8f12'],
	JewelBright9: ['#eb1e2c', '#fd6f30', '#f9a729', '#f9d23c', '#5fbb68', '#64cdcc', '#91dcea', '#a4a4d5', '#bbc9e5'],
	Summer8: ['#bfb202', '#b9ca5d', '#cf3e53', '#f1788d', '#00a2b3', '#97cfd0', '#f3a546', '#f7c480'],
	Winter10: ['#90728f', '#b9a0b4', '#9d983d', '#cecb76', '#e15759', '#ff9888', '#6b6b6b', '#bab2ae', '#aa8780', '#dab6af'],
	GreenOrangeTeal12: ['#4e9f50', '#87d180', '#ef8a0c', '#fcc66d', '#3ca8bc', '#98d9e4', '#94a323', '#c3ce3d', '#a08400', '#f7d42a', '#26897e', '#8dbfa8'],
	RedBlueBrown12: ['#466f9d', '#91b3d7', '#ed444a', '#feb5a2', '#9d7660', '#d7b5a6', '#3896c4', '#a0d4ee', '#ba7e45', '#39b87f', '#c8133b', '#ea8783'],
	PurplePinkGray12: ['#8074a8', '#c6c1f0', '#c46487', '#ffbed1', '#9c9290', '#c5bfbe', '#9b93c9', '#ddb5d5', '#7c7270', '#f498b6', '#b173a0', '#c799bc'],
	HueCircle19: ['#1ba3c6', '#2cb5c0', '#30bcad', '#21B087', '#33a65c', '#57a337', '#a2b627', '#d5bb21', '#f8b620', '#f89217', '#f06719', '#e03426', '#f64971', '#fc719e', '#eb73b3', '#ce69be', '#a26dc2', '#7873c0', '#4f7cba'],
	OrangeBlue7: ['#9e3d22', '#d45b21', '#f69035', '#d9d5c9', '#77acd3', '#4f81af', '#2b5c8a'],
	RedGreen7: ['#a3123a', '#e33f43', '#f8816b', '#ced7c3', '#73ba67', '#44914e', '#24693d'],
	GreenBlue7: ['#24693d', '#45934d', '#75bc69', '#c9dad2', '#77a9cf', '#4e7fab', '#2a5783'],
	RedBlue7: ['#a90c38', '#e03b42', '#f87f69', '#dfd4d1', '#7eaed3', '#5383af', '#2e5a87'],
	RedBlack7: ['#ae123a', '#e33e43', '#f8816b', '#d9d9d9', '#a0a7a8', '#707c83', '#49525e'],
	GoldPurple7: ['#ad9024', '#c1a33b', '#d4b95e', '#e3d8cf', '#d4a3c3', '#c189b0', '#ac7299'],
	RedGreenGold7: ['#be2a3e', '#e25f48', '#f88f4d', '#f4d166', '#90b960', '#4b9b5f', '#22763f'],
	SunsetSunrise7: ['#33608c', '#9768a5', '#e7718a', '#f6ba57', '#ed7846', '#d54c45', '#b81840'],
	OrangeBlueWhite7: ['#9e3d22', '#e36621', '#fcad52', '#ffffff', '#95c5e1', '#5b8fbc', '#2b5c8a'],
	RedGreenWhite7: ['#ae123a', '#ee574d', '#fdac9e', '#ffffff', '#91d183', '#539e52', '#24693d'],
	GreenBlueWhite7: ['#24693d', '#529c51', '#8fd180', '#ffffff', '#95c1dd', '#598ab5', '#2a5783'],
	RedBlueWhite7: ['#a90c38', '#ec534b', '#feaa9a', '#ffffff', '#9ac4e1', '#5c8db8', '#2e5a87'],
	RedBlackWhite7: ['#ae123a', '#ee574d', '#fdac9d', '#ffffff', '#bdc0bf', '#7d888d', '#49525e'],
	OrangeBlueLight7: ['#ffcc9e', '#f9d4b6', '#f0dccd', '#e5e5e5', '#dae1ea', '#cfdcef', '#c4d8f3'],
	Temperature7: ['#529985', '#6c9e6e', '#99b059', '#dbcf47', '#ebc24b', '#e3a14f', '#c26b51'],
	BlueGreen7: ['#feffd9', '#f2fabf', '#dff3b2', '#c4eab1', '#94d6b7', '#69c5be', '#41b7c4'],
	BlueLight7: ['#e5e5e5', '#e0e3e8', '#dbe1ea', '#d5dfec', '#d0dcef', '#cadaf1', '#c4d8f3'],
	OrangeLight7: ['#e5e5e5', '#ebe1d9', '#f0ddcd', '#f5d9c2', '#f9d4b6', '#fdd0aa', '#ffcc9e'],
	Blue20: ['#b9ddf1', '#afd6ed', '#a5cfe9', '#9bc7e4', '#92c0df', '#89b8da', '#80b0d5', '#79aacf', '#72a3c9', '#6a9bc3', '#6394be', '#5b8cb8', '#5485b2', '#4e7fac', '#4878a6', '#437a9f', '#3d6a98', '#376491', '#305d8a', '#2a5783'],
	Orange20: ['#ffc685', '#fcbe75', '#f9b665', '#f7ae54', '#f5a645', '#f59c3c', '#f49234', '#f2882d', '#f07e27', '#ee7422', '#e96b20', '#e36420', '#db5e20', '#d25921', '#ca5422', '#c14f22', '#b84b23', '#af4623', '#a64122', '#9e3d22'],
	Green20: ['#b3e0a6', '#a5db96', '#98d687', '#8ed07f', '#85ca77', '#7dc370', '#75bc69', '#6eb663', '#67af5c', '#61a956', '#59a253', '#519c51', '#49964f', '#428f4d', '#398949', '#308344', '#2b7c40', '#27763d', '#256f3d', '#24693d'],
	Red20: ['#ffbeb2', '#feb4a6', '#fdab9b', '#fca290', '#fb9984', '#fa8f79', '#f9856e', '#f77b66', '#f5715d', '#f36754', '#f05c4d', '#ec5049', '#e74545', '#e13b42', '#da323f', '#d3293d', '#ca223c', '#c11a3b', '#b8163a', '#ae123a'],
	Purple20: ['#eec9e5', '#eac1df', '#e6b9d9', '#e0b2d2', '#daabcb', '#d5a4c4', '#cf9dbe', '#ca96b8', '#c48fb2', '#be89ac', '#b882a6', '#b27ba1', '#aa759d', '#a27099', '#9a6a96', '#926591', '#8c5f86', '#865986', '#81537f', '#7c4d79'],
	Brown20: ['#eedbbd', '#ecd2ad', '#ebc994', '#eac085', '#e8b777', '#e5ae6c', '#e2a562', '#de9d5a', '#d99455', '#d38c54', '#ce8451', '#c9784d', '#c47247', '#c16941', '#bd6036', '#b85636', '#b34d34', '#ad4433', '#a63d32', '#9f3632'],
	Gray20: ['#d5d5d5', '#cdcecd', '#c5c7c6', '#bcbfbe', '#b4b7b7', '#acb0b1', '#a4a9ab', '#9ca3a4', '#939c9e', '#8b9598', '#848e93', '#7c878d', '#758087', '#6e7a81', '#67737c', '#616c77', '#5b6570', '#555f6a', '#4f5864', '#49525e'],
	GrayWarm20: ['#dcd4d0', '#d4ccc8', '#cdc4c0', '#c5bdb9', '#beb6b2', '#b7afab', '#b0a7a4', '#a9a09d', '#a29996', '#9b938f', '#948c88', '#8d8481', '#867e7b', '#807774', '#79706e', '#736967', '#6c6260', '#665c51', '#5f5654', '#59504e'],
	BlueTeal20: ['#bce4d8', '#aedcd5', '#a1d5d2', '#95cecf', '#89c8cc', '#7ec1ca', '#72bac6', '#66b2c2', '#59acbe', '#4ba5ba', '#419eb6', '#3b96b2', '#358ead', '#3586a7', '#347ea1', '#32779b', '#316f96', '#2f6790', '#2d608a', '#2c5985'],
	OrangeGold20: ['#f4d166', '#f6c760', '#f8bc58', '#f8b252', '#f7a84a', '#f69e41', '#f49538', '#f38b2f', '#f28026', '#f0751e', '#eb6c1c', '#e4641e', '#de5d1f', '#d75521', '#cf4f22', '#c64a22', '#bc4623', '#b24223', '#a83e24', '#9e3a26'],
	GreenGold20: ['#f4d166', '#e3cd62', '#d3c95f', '#c3c55d', '#b2c25b', '#a3bd5a', '#93b958', '#84b457', '#76af56', '#67a956', '#5aa355', '#4f9e53', '#479751', '#40914f', '#3a8a4d', '#34844a', '#2d7d45', '#257740', '#1c713b', '#146c36'],
	RedGold21: ['#f4d166', '#f5c75f', '#f6bc58', '#f7b254', '#f9a750', '#fa9d4f', '#fa9d4f', '#fb934d', '#f7894b', '#f47f4a', '#f0774a', '#eb6349', '#e66549', '#e15c48', '#dc5447', '#d64c45', '#d04344', '#ca3a42', '#c43141', '#bd273f', '#b71d3e'],

	// Classic
	Classic10: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'],
	ClassicMedium10: ['#729ece', '#ff9e4a', '#67bf5c', '#ed665d', '#ad8bc9', '#a8786e', '#ed97ca', '#a2a2a2', '#cdcc5d', '#6dccda'],
	ClassicLight10: ['#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5', '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5'],
	Classic20: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'],
	ClassicGray5: ['#60636a', '#a5acaf', '#414451', '#8f8782', '#cfcfcf'],
	ClassicColorBlind10: ['#006ba4', '#ff800e', '#ababab', '#595959', '#5f9ed1', '#c85200', '#898989', '#a2c8ec', '#ffbc79', '#cfcfcf'],
	ClassicTrafficLight9: ['#b10318', '#dba13a', '#309343', '#d82526', '#ffc156', '#69b764', '#f26c64', '#ffdd71', '#9fcd99'],
	ClassicPurpleGray6: ['#7b66d2', '#dc5fbd', '#94917b', '#995688', '#d098ee', '#d7d5c5'],
	ClassicPurpleGray12: ['#7b66d2', '#a699e8', '#dc5fbd', '#ffc0da', '#5f5a41', '#b4b19b', '#995688', '#d898ba', '#ab6ad5', '#d098ee', '#8b7c6e', '#dbd4c5'],
	ClassicGreenOrange6: ['#32a251', '#ff7f0f', '#3cb7cc', '#ffd94a', '#39737c', '#b85a0d'],
	ClassicGreenOrange12: ['#32a251', '#acd98d', '#ff7f0f', '#ffb977', '#3cb7cc', '#98d9e4', '#b85a0d', '#ffd94a', '#39737c', '#86b4a9', '#82853b', '#ccc94d'],
	ClassicBlueRed6: ['#2c69b0', '#f02720', '#ac613c', '#6ba3d6', '#ea6b73', '#e9c39b'],
	ClassicBlueRed12: ['#2c69b0', '#b5c8e2', '#f02720', '#ffb6b0', '#ac613c', '#e9c39b', '#6ba3d6', '#b5dffd', '#ac8763', '#ddc9b4', '#bd0a36', '#f4737a'],
	ClassicCyclic13: ['#1f83b4', '#12a2a8', '#2ca030', '#78a641', '#bcbd22', '#ffbf50', '#ffaa0e', '#ff7f0e', '#d63a3a', '#c7519c', '#ba43b4', '#8a60b0', '#6f63bb'],
	ClassicGreen7: ['#bccfb4', '#94bb83', '#69a761', '#339444', '#27823b', '#1a7232', '#09622a'],
	ClassicGray13: ['#c3c3c3', '#b2b2b2', '#a2a2a2', '#929292', '#838383', '#747474', '#666666', '#585858', '#4b4b4b', '#3f3f3f', '#333333', '#282828', '#1e1e1e'],
	ClassicBlue7: ['#b4d4da', '#7bc8e2', '#67add4', '#3a87b7', '#1c73b1', '#1c5998', '#26456e'],
	ClassicRed9: ['#eac0bd', '#f89a90', '#f57667', '#e35745', '#d8392c', '#cf1719', '#c21417', '#b10c1d', '#9c0824'],
	ClassicOrange7: ['#f0c294', '#fdab67', '#fd8938', '#f06511', '#d74401', '#a33202', '#7b3014'],
	ClassicAreaRed11: ['#f5cac7', '#fbb3ab', '#fd9c8f', '#fe8b7a', '#fd7864', '#f46b55', '#ea5e45', '#e04e35', '#d43e25', '#c92b14', '#bd1100'],
	ClassicAreaGreen11: ['#dbe8b4', '#c3e394', '#acdc7a', '#9ad26d', '#8ac765', '#7abc5f', '#6cae59', '#60a24d', '#569735', '#4a8c1c', '#3c8200'],
	ClassicAreaBrown11: ['#f3e0c2', '#f6d29c', '#f7c577', '#f0b763', '#e4aa63', '#d89c63', '#cc8f63', '#c08262', '#bb7359', '#bb6348', '#bb5137'],
	ClassicRedGreen11: ['#9c0824', '#bd1316', '#d11719', '#df513f', '#fc8375', '#cacaca', '#a2c18f', '#69a761', '#2f8e41', '#1e7735', '#09622a'],
	ClassicRedBlue11: ['#9c0824', '#bd1316', '#d11719', '#df513f', '#fc8375', '#cacaca', '#67add4', '#3a87b7', '#1c73b1', '#1c5998', '#26456e'],
	ClassicRedBlack11: ['#9c0824', '#bd1316', '#d11719', '#df513f', '#fc8375', '#cacaca', '#9b9b9b', '#777777', '#565656', '#383838', '#1e1e1e'],
	ClassicAreaRedGreen21: ['#bd1100', '#c82912', '#d23a21', '#dc4930', '#e6583e', '#ef654d', '#f7705b', '#fd7e6b', '#fe8e7e', '#fca294', '#e9dabe', '#c7e298', '#b1de7f', '#a0d571', '#90cb68', '#82c162', '#75b65d', '#69aa56', '#5ea049', '#559633', '#4a8c1c'],
	ClassicOrangeBlue13: ['#7b3014', '#a33202', '#d74401', '#f06511', '#fd8938', '#fdab67', '#cacaca', '#7bc8e2', '#67add4', '#3a87b7', '#1c73b1', '#1c5998', '#26456e'],
	ClassicGreenBlue11: ['#09622a', '#1e7735', '#2f8e41', '#69a761', '#a2c18f', '#cacaca', '#67add4', '#3a87b7', '#1c73b1', '#1c5998', '#26456e'],
	ClassicRedWhiteGreen11: ['#9c0824', '#b41f27', '#cc312b', '#e86753', '#fcb4a5', '#ffffff', '#b9d7b7', '#74af72', '#428f49', '#297839', '#09622a'],
	ClassicRedWhiteBlack11: ['#9c0824', '#b41f27', '#cc312b', '#e86753', '#fcb4a5', '#ffffff', '#bfbfbf', '#838383', '#575757', '#393939', '#1e1e1e'],
	ClassicOrangeWhiteBlue11: ['#7b3014', '#a84415', '#d85a13', '#fb8547', '#ffc2a1', '#ffffff', '#b7cde2', '#6a9ec5', '#3679a8', '#2e5f8a', '#26456e'],
	ClassicRedWhiteBlackLight10: ['#ffc2c5', '#ffd1d3', '#ffe0e1', '#fff0f0', '#ffffff', '#f3f3f3', '#e8e8e8', '#dddddd', '#d1d1d1', '#c6c6c6'],
	ClassicOrangeWhiteBlueLight11: ['#ffcc9e', '#ffd6b1', '#ffe0c5', '#ffead8', '#fff5eb', '#ffffff', '#f3f7fd', '#e8effa', '#dce8f8', '#d0e0f6', '#c4d8f3'],
	ClassicRedWhiteGreenLight11: ['#ffb2b6', '#ffc2c5', '#ffd1d3', '#ffe0e1', '#fff0f0', '#ffffff', '#f1faed', '#e3f5db', '#d5f0ca', '#c6ebb8', '#b7e6a7'],
	ClassicRedGreenLight11: ['#ffb2b6', '#fcbdc0', '#f8c7c9', '#f2d1d2', '#ecdbdc', '#e5e5e5', '#dde6d9', '#d4e6cc', '#cae6c0', '#c1e6b4', '#b7e6a7']
};

'use strict';

var colorschemes = {
	brewer: brewer,
	tableau: tableau
};

'use strict';

var helpers = Chart.helpers;

Chart.defaults.global.plugins.colorschemes = {
	scheme: 'brewer.Paired12',
	fillAlpha: 0.5
};

var colorSchemesPlugin$1 = {
	id: 'colorschemes',

	beforeUpdate: function(chart, options) {
		var s = options.scheme.split('.');
		var category = colorschemes[s[0]];
		var scheme, color;

		if (category) {
			scheme = category[s[1]];
			if (scheme) {
				// Set scheme colors
				chart.config.data.datasets.forEach(function(dataset, datasetIndex) {
					color = scheme[datasetIndex % scheme.length];

					// Object to store which color option is set
					dataset.colorschemes = {};

					switch (dataset.type || chart.config.type) {
					// For line, radar and scatter chart, borderColor and backgroundColor (50% transparent) are set
					case 'line':
					case 'radar':
					case 'scatter':
						if (typeof dataset.backgroundColor === 'undefined') {
							dataset.backgroundColor = helpers.color(color).alpha(options.fillAlpha).rgbString();
							dataset.colorschemes.backgroundColor = true;
						}
						if (typeof dataset.borderColor === 'undefined') {
							dataset.borderColor = color;
							dataset.colorschemes.borderColor = true;
						}
						if (typeof dataset.pointBackgroundColor === 'undefined') {
							dataset.pointBackgroundColor = helpers.color(color).alpha(options.fillAlpha).rgbString();
							dataset.colorschemes.pointBackgroundColor = true;
						}
						if (typeof dataset.pointBorderColor === 'undefined') {
							dataset.pointBorderColor = color;
							dataset.colorschemes.pointBorderColor = true;
						}
						break;
					// For doughnut and pie chart, backgroundColor is set to an array of colors
					case 'doughnut':
					case 'pie':
						if (typeof dataset.backgroundColor === 'undefined') {
							dataset.backgroundColor = dataset.data.map(function(data, dataIndex) {
								return scheme[dataIndex % scheme.length];
							});
							dataset.colorschemes.backgroundColor = true;
						}
						break;
					// For the other chart, only backgroundColor is set
					default:
						if (typeof dataset.backgroundColor === 'undefined') {
							dataset.backgroundColor = color;
							dataset.colorschemes.backgroundColor = true;
						}
						break;
					}
				});
			}
		}
		return true;
	},

	afterUpdate: function(chart) {
		// Unset colors
		chart.config.data.datasets.forEach(function(dataset) {
			if (dataset.colorschemes) {
				if (dataset.colorschemes.backgroundColor) {
					delete dataset.backgroundColor;
				}
				if (dataset.colorschemes.borderColor) {
					delete dataset.borderColor;
				}
				if (dataset.colorschemes.pointBackgroundColor) {
					delete dataset.pointBackgroundColor;
				}
				if (dataset.colorschemes.pointBorderColor) {
					delete dataset.pointBorderColor;
				}
				delete dataset.colorschemes;
			}
		});
	}
};

'use strict';

Chart.colorschemes = colorschemes;
Chart.plugins.register(colorSchemesPlugin$1);

return colorSchemesPlugin$1;

})));