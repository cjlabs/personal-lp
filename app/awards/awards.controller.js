// awards.controller.js
(function () {
    'use strict';
    angular.module('cjlabsApp')
            .controller('AwardsController', AwardsController);

    AwardsController.$inject = ['$scope'];

    function AwardsController($scope) {
        $scope.show = 'webdev';
        $scope.displayDetailAward = function (skillVal) {
            $scope.show = skillVal;
        }
    }

})();