(function(){

    'use strict';

    angular.module('general.jshint')
        .controller('JSHintController', controller);

    controller.$inject = ['jshintService'];
    function controller(jshint){
        var self = this;

        var params = jshint.params;

        self.logo = params.logo;
    }

})();