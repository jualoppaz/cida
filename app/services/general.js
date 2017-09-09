(function(){

    'use strict';

    angular.module('general').factory('generalService', service);

    service.$inject = ['$state'];

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
         * Método privado para consultar el código del estado de una pantalla
         * @param screen Nombre común de la pantalla
         * @returns {*|string} Código del estado
         */
        function getStateNameByScreen(screen){
            var res;

            res = states[screen] || states["404"];

            return res;
        }

        /**
         * Método para obtener la URL del estado de una pantalla
         * @param screen Nombre común de la pantalla
         * @returns {*|string}
         */
        function getURLByScreenName(screen){
            var res, name;

            name = getStateNameByScreen(screen);

            res = $state.href(name);

            return res;
        }

        /**
         * Método que indica el nombre del estado actual
         * @returns {*|string}
         */
        function getActualState(){
            return $state.current.name;
        }
    }

})();
