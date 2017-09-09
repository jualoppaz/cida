(function(){

    'use strict';

    angular.module('angularjs').factory('angularjs', service);

    service.$inject = [];

    /**
     * @ngdoc service
     * @name angularjs.angularjs
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
