(function(){

    'use strict';

    angular.module('sass').factory('sass', service);

    service.$inject = [];

    /**
     * @ngdoc service
     * @name sass.sass
     * @description
     * Servicio que contendrá todas las operaciones necesarias relacionadas con la sección Sass.
     */
    function service(){
        var service = {
            params: {
                logo: 'images/tecnologia_sass.png'
            }
        };

        return service;

    }

})();
