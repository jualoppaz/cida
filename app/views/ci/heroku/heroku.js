(function(){

    'use strict';

    angular.module('heroku')
        .controller('HerokuController', Controller);

    Controller.$inject = ['herokuService'];
    function Controller(heroku){
        var self = this;

        var params = heroku.params;

        self.logo = params.logo;
    }

})();