(function(){

    'use strict';

    angular.module('general').factory('general', service);

    service.$inject = ['$state'];

    /**
     * @ngdoc service
     * @name general.general
     * @description
     * Servicio que contendrá todas las operaciones necesarias relacionadas con la sección General.
     */
    function service($state){

        var states = {
            // CI states
            brunch: "ci.brunch",
            npm: "ci.npm",
            bower: "ci.bower",
            sass: "ci.sass",
            angularjs: "ci.angularjs",
            jshint: "ci.jshint",
            ngdocs: "ci.ngdocs",
            heroku: "ci.heroku",

            // ET state
            node: "et.node",
            postgre: "et.postgre",
            sequelize: "et.sequelize",
            404: "404"
        };

        var service = {
            getStateNameByScreen: getStateNameByScreen,
            getURLByScreenName: getURLByScreenName,
            getActualState: getActualState
        };

        return service;

        /**
         * @ngdoc method
         * @name general.general#getStateNameByScreen
         * @methodOf general.general
         * @description
         * Método para consultar el identificador completo de una pantalla dado el nombre corto
         * @param {string} screen Nombre común de la pantalla
         * @returns {string} Código de vista asociado a la pantalla introducida
         */
        function getStateNameByScreen(screen){
            var res;

            res = states[screen] || states["404"];

            return res;
        }

        /**
         * @ngdoc method
         * @name general.general#getURLByScreenName
         * @methodOf general.general
         * @description
         * Método para consultar la URL completa de una pantalla
         * @param {string} screen Nombre común de la pantalla
         * @returns {string} URL completa de la vista asociada a la pantalla introducida
         */
        function getURLByScreenName(screen) {
            var res, name;

            name = getStateNameByScreen(screen);

            res = $state.href(name);

            return res;
        }

        /**
         * @ngdoc method
         * @name general.general#getActualState
         * @methodOf general.general
         * @description
         * Método para consultar el nombre del estado actual
         * @returns {string} Código que identifica de forma única a la pantalla actual
         */
        function getActualState(){
            return $state.current.name;
        }
    }

})();
