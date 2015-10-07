
(function () {
    'use strict';
    angular
            .module('cjlabsApp.config')
            .config('config',loadConfig)
    
    function loadConfig(){
        return {'testing':'dsdsds'};
    }
});