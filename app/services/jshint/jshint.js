(function(){

    'use strict';

    angular.module('jshint').factory('jshintService', service);

    service.$inject = [];

    /**
     * @ngdoc service
     * @name jshint.jshint
     * @description
     * Servicio que contendrá todas las operaciones necesarias relacionadas con la sección Heroku.
     */
    function service(){
        var service = {
            params: {
                logo: 'images/tecnologia_jshint.png'
            }
        };

        return service;

    }

})();
