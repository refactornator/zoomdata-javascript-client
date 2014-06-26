'use strict';
/*global ZoomdataClient */

/* IE9 Requires jQuery CORS support enabled */
$.support.cors = true;

$(function () {
    /* IE9 requires the client and server to use the same protocol
       If your Zoomdata server is https, this web app must be hosted on https */
    var zoomdataClient = new ZoomdataClient({
        apiKey: '53a35d8ae4b0ccda05c1ef04',
        host: 'qa2-zoomdata.cloudapp.net:8080/zoomdata',
        secure: false
    });

    zoomdataClient.visualize({
        visualization: 'Horizontal Bars',
        source: 'Real Time Sales',
        element: $('#horizontal_bars').get(0)
    }).done(function() {
        zoomdataClient.visualize({
            visualization: 'Vertical Bars',
            source: 'Real Time Sales',
            element: $('#vertical_bars').get(0)
        }).done(function() {
            zoomdataClient.visualize({
                visualization: 'Side by Side Bars',
                source: 'Real Time Sales',
                element: $('#side_by_side_bars').get(0)
            }).done(function() {
                zoomdataClient.visualize({
                    visualization: 'Stacked Bars',
                    source: 'Real Time Sales',
                    element: $('#stacked_bars').get(0)
                }).done(function() {
                    zoomdataClient.visualize({
                        visualization: 'Multi-Metric Bars',
                        source: 'Real Time Sales',
                        element: $('#multi_metric_bars').get(0)
                    }).done(function() {
                        zoomdataClient.visualize({
                            visualization: 'Trend',
                            source: 'Real Time Sales',
                            element: $('#trend').get(0)
                        }).done(function() {
                            zoomdataClient.visualize({
                                visualization: 'Multi-Metric Trend',
                                source: 'Real Time Sales',
                                element: $('#multi_metric_trend').get(0)
                            }).done(function() {
                                zoomdataClient.visualize({
                                    visualization: 'Pie',
                                    source: 'Real Time Sales',
                                    element: $('#pie').get(0)
                                }).done(function() {
                                    zoomdataClient.visualize({
                                        visualization: 'Pivot Table',
                                        source: 'Real Time Sales',
                                        element: $('#pivot_table').get(0)
                                    }).done(function() {
                                        zoomdataClient.visualize({
                                            visualization: 'Heatmap',
                                            source: 'Real Time Sales',
                                            element: $('#heatmap').get(0)
                                        }).done(function() {
                                            zoomdataClient.visualize({
                                                visualization: 'Zoomable Map',
                                                source: 'Real Time Sales',
                                                element: $('#zoomable_map').get(0)
                                            }).done(function() {
                                                zoomdataClient.visualize({
                                                    visualization: 'Bubbles',
                                                    source: 'Real Time Sales',
                                                    element: $('#bubbles').get(0)
                                                }).done(function() {
                                                    zoomdataClient.visualize({
                                                        visualization: 'Word Cloud',
                                                        source: 'Real Time Sales',
                                                        element: $('#word_cloud').get(0)
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
