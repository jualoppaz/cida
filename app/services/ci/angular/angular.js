(function(){

    'use strict';

    angular.module('angular').factory('angular', service);

    service.$inject = [];

    /**
     * @ngdoc service
     * @name angular.angular
     * @description
     * Servicio que contendrá todas las operaciones necesarias relacionadas con la sección AngularJS.
     */
    function service(){
        var service = {
            params: {
                logo: 'images/tecnologia_angularjs.png'
            }
        };

        return service;

    }

})();
