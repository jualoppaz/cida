(function(){

    'use strict';

    angular.module('general.brunch').factory('brunchService', service);

    service.$inject = [];

    /**
     * @ngdoc service
     * @name general.brunch
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
