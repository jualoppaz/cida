(function(){

    'use strict';

    angular.module('general.jshint').factory('jshintService', service);

    service.$inject = [];

    /**
     * @ngdoc service
     * @name general.jshint
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
