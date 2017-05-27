/**=========================================================
 * Module: FlotChartOptionsServices.js
 * Define here the common options for all types of charts
 * and access theme from any controller
 =========================================================*/
angular.module('chart')
        .service('flotService', flotService);

    function flotService() {
      
        var vm = this;

        vm['default'] = {
            grid: {
                hoverable: true,
                clickable: true,
                borderWidth: 0,
                color: '#8394a9'
            },
            tooltip: true,
            tooltipOpts: {
                content: '%x : %y'
            },
            xaxis: {
                tickColor: '#f1f2f3',
                mode: 'categories'
            },
            yaxis: {
                tickColor: '#f1f2f3'
            },
            legend: {
                backgroundColor: 'rgba(0,0,0,0)'
            },
            shadowSize: 0
        };

        vm['area'] = angular.extend({}, vm['default'], {
            series: {
                lines: {
                    show: true,
                    fill: 1
                }
            }
        });

        vm['bar'] = angular.extend({}, vm['default'], {
            series: {
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 1
                }
            }
        });

        vm['bar-stacked'] = angular.extend({}, vm['default'], {
            series: {
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 1,
                    stacked: true
                }
            }
        });

       

    }


