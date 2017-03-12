(function(){

    'use strict';

    angular.module('brunch')
        .controller('BrunchController', controller);

    controller.$inject = ['brunchService'];
    function controller(brunch){
        var self = this;

        var params = brunch.params;

        self.logo = params.logo;
    }

})();