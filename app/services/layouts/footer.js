(function(){

    'use strict';

    angular.module('footer')
        .factory('footer', service);

    service.$inject = ['$http'];

    /**
     * @ngdoc service
     * @name footer.footer
     * @description
     * Servicio que contendrá todas las operaciones necesarias relacionadas con el footer.
     */
    function service($http) {

        var service = {
            messages: {}
        };

        return service;

    }

})();