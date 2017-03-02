exports.config = {
    /*overrides: {
        production: {
            optimize: false
        }
    },*/
    npm: {
        enabled: false
    },
    //fileListInterval: 2000,
    files: {
        javascripts: {
            joinTo: {
                'js/app.js': /^app/,
                'js/vendor.js': /^(vendor|bower_components)/
            },
            entryPoints: {
                'app/app.js': 'js/app.js'
            },
            order: {
                before: [
                    'bower_components/jquery/dist/jquery.js',
                    'app/modules/definition.js'],
                after: [
                    'bower_components/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js',
                    'app/views/components/cargando/cargando.js',
                    'app/router.js',
                    'app/app.js']
            }
        },
        stylesheets: {
            order: {
                before: ['bower_components/bootstrap/dist/css/bootstrap.css']
            },
            joinTo: {
                'css/app.css': /^app(\/|\\)styles/,
                'css/vendor.css': /^(vendor|bower_components)/
            }
        },
        templates: {
            joinTo: {
                'js/templates.js': /^bower_components(\/|\/)angular-utils-ui-breadcrumbs|app/
            }
        }
    },
    modules: {
        wrapper: false,
        definition: false
    },
    plugins: {
        jshint: {
            pattern: /^app\/.*\.js$/,
            options: {
                strict: true,
                bitwise: true,
                curly: true,
                unused: true,
                eqeqeq: true
            },
            warnOnly: true
        },
        digest: {
            alwaysRun: false,
            environments: ['production']
        },
        //afterBrunch: ['rm -f public/config/config_*.json'],
        uglify: {
            mangle: false
        }
    },
    // Configuracion especifica del servidor NodeJS utilizado mediante Brunch
    server: {
        path: 'server.js',
        port: 3333,
        base: '/'
    }
};
