(function(){

    'use strict';

    angular.module('jshint')
        .controller('JSHintController', Controller);

    Controller.$inject = ['jshint'];
    function Controller(jshint){
        var self = this;

        var params = jshint.params;

        self.logo = params.logo;
    }

})();