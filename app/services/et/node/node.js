(function(){

    'use strict';

    angular.module('node').factory('node', service);

    service.$inject = [];

    /**
     * @ngdoc service
     * @name node.node
     * @description
     * Servicio que contendrá todas las operaciones necesarias relacionadas con la sección NodeJS.
     */
    function service(){
        var service = {
            params: {
                logo: 'images/tecnologia_nodejs.png'
            }
        };

        return service;

    }

})();
