// dashboard.js
(function () {
    'use strict';
    angular.module('cjlabsApp')
            .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope) {
        $scope.displayDetail = function () {
            alert('display detail is executer');
        }
    }

})();