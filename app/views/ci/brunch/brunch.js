(function(){

    'use strict';

    angular.module('brunch')
        .controller('BrunchController', Controller);

    Controller.$inject = ['brunchService'];
    function Controller(brunch){
        var self = this;

        var params = brunch.params;

        self.logo = params.logo;
    }

})();