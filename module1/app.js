(function () {
    'use strict';
    angular.module('LunchCheck', [])

        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.name = "";
        $scope.output = "";

        $scope.displayValue = function () {
            var totalLength = 0;
            if (($scope.name === undefined) || ($scope.name == ""))  {
                $scope.output = "Please enter data first";
            } else {
                totalLength = ($scope.name.split(',').length);
              (totalLength <= 3) ? $scope.output = "Enjoy!" : $scope.output = "Too much!";
            }
        };
    };

})();
