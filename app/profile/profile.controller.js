// profile.controller.js
(function () {
    'use strict';
    angular.module('cjlabsApp')
            .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope'];

    function ProfileController($scope) {
        $scope.show = null;
        $scope.mainProfile = 1;
        $scope.displayDetail = function (detailVal) {
            $scope.show = detailVal;
            if ($scope.show !== 1) {
                $scope.mainProfile = 0;
            }
        };
        $scope.closeAbout = function () {
            $scope.mainProfile = 1;
            $scope.show = null;
        }
    }

})();