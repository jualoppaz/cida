(function(){

    'use strict';

    angular.module('brunch').factory('brunch', service);

    service.$inject = [];

    /**
     * @ngdoc service
     * @name brunch.brunch
     * @description
     * Servicio que contendrá todas las operaciones necesarias relacionadas con la sección Brunch.
     */
    function service(){
        var service = {
            params: {
                logo: 'images/tecnologia_brunch.png'
            }
        };

        return service;

    }

})();
