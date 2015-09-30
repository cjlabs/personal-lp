// skills.controller.js
(function () {
    'use strict';
    angular.module('cjlabsApp')
            .controller('SkillsController', SkillsController);

    SkillsController.$inject = ['$scope'];

    function SkillsController($scope) {
        $scope.show ='wordpress';
        $scope.displayDetailSkill = function (skillVal) {
           $scope.show =skillVal;
        }
    }

})();