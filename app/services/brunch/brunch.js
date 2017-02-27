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
            getTexto: getTexto
        };

        return service;

        /**
         * @ngdoc method
         * @name getTexto
         * @methodOf general.brunch
         * @description Método para obtener el HTML que se visualizará en la página principal de la sección Brunch.
         */
        function getTexto(){
            var html;

            html = "<p>El Front-End de esta aplicación web se compila al completo con el framework Brunch.</p>";

            return html;
        }
    }

})();
