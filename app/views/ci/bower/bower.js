(function(){

    'use strict';

    angular.module('bower')
        .controller('BowerController', Controller);

    Controller.$inject = ['bower'];
    function Controller(bower){
        var self = this;

        var params = bower.params;

        self.logo = params.logo;
    }

})();