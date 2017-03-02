(function(){

    'use strict';

    angular.module('general.heroku').factory('herokuService', service);

    service.$inject = [];

    /**
     * @ngdoc service
     * @name general.heroku
     * @description
     * Servicio que contendrá todas las operaciones necesarias relacionadas con la sección Heroku.
     */
    function service(){
        var service = {
            params: {
                logo: 'images/tecnologia_heroku.png'
            }
        };

        return service;

    }

})();
