(function(){

    'use strict';

    angular.module('heroku')
        .controller('HerokuController', controller);

    controller.$inject = ['herokuService'];
    function controller(heroku){
        var self = this;

        var params = heroku.params;

        self.logo = params.logo;
    }

})();