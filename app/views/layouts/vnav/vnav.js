(function(){
    'use strict';

    angular.module('vnav')
        .controller('VnavController', VnavController);

    VnavController.$inject = ['vnav', '$state', '$scope'];

    function VnavController(vnav, $state, $scope) {

        var self = this;

        // Inicializacion de items de menu
        self.open = {
            "ci": false,
            "et": false
        };

        /**
         * Metodo para inicializar por defecto los menus replegados
         */
        self.initMenu = function(){
            self.open = {
                "ci": false,
                "ci.brunch": false,
                "ci.npm": false
            };
        };

        /**
         * Metodo para comprobar en la recarga de pagina si un menu padre debe estar desplegado por defecto.
         */
        self.comprobarDesplegados = function(){

            self.initMenu();

            var codigo = $state.current.name;

            var indice = codigo.lastIndexOf(".");

            var codigoPadre = codigo.substring(0, indice);

            self.open[codigoPadre] = true;
        };

        self.comprobarDesplegados();

        $scope.$on('$stateChangeSuccess', function(){
            self.comprobarDesplegados();
        });

    }

})();