'use strict';
/*global ZoomdataClient */

/* Start Fixes for IE9 */
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };

$.support.cors = true;

/* End Fixes for IE9 */

$(function () {
    var zoomdataClient = new ZoomdataClient({
        apiKey: '53a0d9ffe4b038d2b3933ea2',
        host: 'dev.zoomdata.com/zoomdata',
        secure: true
    });

    zoomdataClient.visualize({
        visualization: 'Horizontal Bars',
        source: 'Real Time Sales',
        element: $('#horizontal_bars').get(0)
    });

    zoomdataClient.visualize({
        visualization: 'Vertical Bars',
        source: 'Real Time Sales',
        element: $('#vertical_bars').get(0)
    });

    zoomdataClient.visualize({
        visualization: 'Side by Side Bars',
        source: 'Real Time Sales',
        element: $('#side_by_side_bars').get(0)
    });

    zoomdataClient.visualize({
        visualization: 'Stacked Bars',
        source: 'Real Time Sales',
        element: $('#stacked_bars').get(0)
    });

    zoomdataClient.visualize({
        visualization: 'Multi-Metric Bars',
        source: 'Real Time Sales',
        element: $('#multi_metric_bars').get(0)
    });

    zoomdataClient.visualize({
        visualization: 'Trend',
        source: 'Real Time Sales',
        element: $('#trend').get(0)
    });

    zoomdataClient.visualize({
        visualization: 'Multi-Metric Trend',
        source: 'Real Time Sales',
        element: $('#multi_metric_trend').get(0)
    });

    zoomdataClient.visualize({
        visualization: 'Pie',
        source: 'Real Time Sales',
        element: $('#pie').get(0)
    });

    zoomdataClient.visualize({
        visualization: 'Pivot Table',
        source: 'Real Time Sales',
        element: $('#pivot_table').get(0)
    });

    zoomdataClient.visualize({
        visualization: 'Heatmap',
        source: 'Real Time Sales',
        element: $('#heatmap').get(0)
    });

    zoomdataClient.visualize({
        visualization: 'Zoomable Map',
        source: 'Real Time Sales',
        element: $('#zoomable_map').get(0)
    });

    zoomdataClient.visualize({
        visualization: 'Bubbles',
        source: 'Real Time Sales',
        element: $('#bubbles').get(0)
    });

    zoomdataClient.visualize({
        visualization: 'Word Cloud',
        source: 'Real Time Sales',
        element: $('#word_cloud').get(0)
    });
});
