(function(){

    'use strict';

    angular.module('ngdocs').factory('ngdocs', service);

    service.$inject = [];

    /**
     * @ngdoc service
     * @name ngdocs.ngdocs
     * @description
     * Servicio que contendrá todas las operaciones necesarias relacionadas con la sección ngdocs.
     */
    function service(){
        var service = {
            params: {
                logo: null
            }
        };

        return service;

    }

})();
