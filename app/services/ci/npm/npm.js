(function(){

    'use strict';

    angular.module('npm').factory('npm', service);

    service.$inject = [];

    /**
     * @ngdoc service
     * @name npm.npm
     * @description
     * Servicio que contendrá todas las operaciones necesarias relacionadas con la sección NPM.
     */
    function service(){
        var service = {
            params: {
                logo: 'images/tecnologia_npm.png'
            }
        };

        return service;

    }

})();
