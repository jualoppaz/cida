(function(){

    'use strict';

    angular.module('bower').factory('bower', service);

    service.$inject = [];

    /**
     * @ngdoc service
     * @name bower.bower
     * @description
     * Servicio que contendrá todas las operaciones necesarias relacionadas con la sección Bower.
     */
    function service(){
        var service = {
            params: {
                logo: 'images/tecnologia_bower.png'
            }
        };

        return service;

    }

})();
