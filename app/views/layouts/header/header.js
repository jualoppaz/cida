(function() {

    'use strict';

    angular.module('hnav')

        .directive('menuControl', function() {

            function directiva(scope, element) {

                element.bind("click", function(){
                    angular.element('#menu').toggleClass('hide-menu');
                });

            }

            return {
                restrict: 'A',
                link: directiva
            };
        });

})();