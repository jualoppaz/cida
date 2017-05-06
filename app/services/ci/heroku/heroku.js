(function(){

    'use strict';

    angular.module('heroku').factory('heroku', service);

    service.$inject = [];

    /**
     * @ngdoc service
     * @name heroku.heroku
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
