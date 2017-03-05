(function(){

    'use strict';

    /**
     * @ngdoc overview
     * @name index
     * @description
     * Bienvenido a la Documentación de la aplicación <b>CIDA</b>: Continuous Integration Demo App</b>.
     * <br/>En el menú lateral de la izquierda tienes accesible la documentación de todos y cada uno de los
     * módulos y componentes de la aplicación.
     */

    /**
     * @ngdoc overview
     * @name rutas
     * @description Módulo que contendrá la definición de rutas de la aplicación.
     */
    angular.module('rutas', ['ui.router']);

    /**
     * @ngdoc overview
     * @name footer
     * @description Módulo asociado al footer de la página.
     */
    angular.module('footer', []);

    /**
     * @ngdoc overview
     * @name hnav
     * @description Módulo asociado al menú horizontal de la página.
     */
    angular.module('hnav', []);

    /**
     * @ngdoc overview
     * @name vnav
     * @description Módulo asociado al menú lateral de la página.
     */
    angular.module('vnav', []);

    /**
     * @ngdoc overview
     * @name angular
     * @description Módulo asociado a la sección AngularJS.
     */
    angular.module('general.angular', []);

    /**
     * @ngdoc overview
     * @name jshint
     * @description Módulo asociado a la sección JSHint.
     */
    angular.module('general.jshint', []);

    /**
     * @ngdoc overview
     * @name brunch
     * @description Módulo asociado a la sección Brunch.
     */
    angular.module('general.brunch', []);

    /**
     * @ngdoc overview
     * @name heroku
     * @description Módulo asociado a la sección Heroku.
     */
    angular.module('general.heroku', []);

    /**
     * @ngdoc overview
     * @name bower
     * @description Módulo asociado a la sección Bower.
     */
    angular.module('general.bower', []);

    /**
     * @ngdoc overview
     * @name node
     * @description Módulo asociado a la sección NodeJS.
     */
    angular.module('general.node', []);

    /**
     * @ngdoc overview
     * @name sass
     * @description Módulo asociado a la sección Sass.
     */
    angular.module('general.sass', []);

    /**
     * @ngdoc overview
     * @name npm
     * @description Módulo asociado a la sección NPM.
     */
    angular.module('general.npm', []);

    /**
     * @ngdoc overview
     * @name general
     * @description Módulo en el que se incluirán las pantallas básicas de la aplicación.
     */
    angular.module('general', [
        'general.angular',
        'general.brunch',
        'general.node',
        'general.sass',
        'general.bower',
        'general.npm',
        'general.heroku',
        'general.jshint'
    ]);

})();