(function(){

    'use strict';

    angular.module('sass')
        .controller('SassController', Controller);

    Controller.$inject = ['sass'];
    function Controller(sass){
        var self = this;

        var params = sass.params;

        self.logo = params.logo;
    }

})();