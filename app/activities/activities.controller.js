// awards.controller.js
(function () {
    'use strict';
    angular.module('cjlabsApp')
            .controller('ActivitiesController', ActivitiesController);

    ActivitiesController.$inject = ['$scope', 'GithubActivityService'];

    function ActivitiesController($scope, GithubActivityService) {
 
        GithubActivityService.events({
            user: 'puterakahfi',
            params: {
                callback: 'JSON_CALLBACK'
            }
        }).get().$promise.then(function (events) {
            $scope.activity = events.data;
            console.log($scope.activity)
        });

        $scope.config = {
            limit: 3
        }
    }

})();