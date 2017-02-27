(function(){

    'use strict';

    angular.module('general.brunch')
        .controller('BrunchController', controller);

    controller.$inject = ['brunchService'];
    function controller(brunch){
        var self = this;

        self.texto = brunch.getTexto();

    }

})();