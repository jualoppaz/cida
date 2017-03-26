(function(){

    'use strict';

    angular.module('jshint')
        .controller('JSHintController', Controller);

    Controller.$inject = ['jshintService'];
    function Controller(jshint){
        var self = this;

        var params = jshint.params;

        self.logo = params.logo;
    }

})();