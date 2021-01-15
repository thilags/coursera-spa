(function () {
    'use strict';
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', LunchCheckController);

       LunchCheckController.$inject = ['$scope'];

       function LunchCheckController ($scope) {
        $scope.name="";
        $scope.output="";

        $scope.displayValue=function() {
        var totalLength = ($scope.name.split(',').length);
        $scope.name == ""?$scope.output="Please enter data first":(totalLength <=3 && totalLength !=0)?$scope.output="Enjoy!":$scope.output="Too much!";
        };
    };

    })();
