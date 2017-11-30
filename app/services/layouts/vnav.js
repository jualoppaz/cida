(function(){

    'use strict';

    angular.module('vnav')
        .factory('vnav', service);

    service.$inject = ['$http'];

    /**
     * @ngdoc service
     * @name vnav.vnav
     * @description
     * Servicio que contendrá todas las operaciones necesarias relacionadas con el menú lateral.
     */
    function service($http) {

        var service = {
            messages: {}
        };

        return service;

    }

})();