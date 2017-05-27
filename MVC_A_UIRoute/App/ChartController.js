angular.module('chart')
        .controller('ChartController', ChartController);

    function ChartController($scope, $http, $timeout, flotService) {

        $scope.areaSeries = [true, true, true];
        $scope.chartAreaFlotChart = flotService['area'];
        $scope.chartBarFlotChart = flotService['bar'];
        $scope.chartBarStackedFlotChart = flotService['bar-stacked'];
        }
