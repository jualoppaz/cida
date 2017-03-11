(function(){
    'use strict';

    angular.module('vnav')
        .controller('VnavCtrl', VnavCtrl);

    VnavCtrl.$inject = ['vnav', '$state'];

    function VnavCtrl(vnav, $state) {

        var self = this;

        // Inicializacion de items de menu
        self.open = {
            "ci": false,
            "ci.brunch": false,
            "ci.npm": false
        };

        vnav.getMenuCI();

        /**
         * Metodo para comprobar en la recarga de pagina si un menu padre debe estar desplegado por defecto.
         */
        self.comprobarDesplegados = function(){

            var codigo = $state.current.name;

            var indice = codigo.lastIndexOf(".");

            var codigoPadre = codigo.substring(0, indice);

            self.open[codigoPadre] = true;
        };

        self.comprobarDesplegados();

    }

})();