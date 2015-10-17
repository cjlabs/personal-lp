// dashboard.js
(function () {
    'use strict';
    angular
            .module('cjlabsApp')
            .controller('HeaderController', HeaderController);

    function HeaderController() {
        alert('testing header here');
    }

})();