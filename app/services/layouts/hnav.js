(function(){

    'use strict';

    angular.module('hnav')
        .factory('hnav', service);

    service.$inject = ['$http'];

    /**
     * @ngdoc service
     * @name hnav.hnav
     * @description
     * Servicio que contendrá todas las operaciones necesarias relacionadas con el menú horizontal.
     */
    function service($http) {

        var service = {
            messages: {}
        };

        return service;

    }

})();