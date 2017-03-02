(function(){

    'use strict';

    angular.module('general.heroku')
        .controller('HerokuController', controller);

    controller.$inject = ['herokuService'];
    function controller(heroku){
        var self = this;

        var params = heroku.params;

        self.logo = params.logo;
    }

})();