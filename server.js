var express, http, sysPath, statik;
express = require('express');
sysPath = require('path');
http = require('http');
statik = require('statik');

if(process.env.PORT){
    statik({
        port: process.env.PORT
    });
}else {
    exports.startServer = function (port, path, callback) {
        var app, server;
        app = express();

        if (process.env.PORT) {
            console.log("Path recibido en Heroku:", path);
        }

        app.use(express.static(path));

        require('./express/router')(app);

        app.all("/", function (req, res) {
            console.log("Entramos en ruta: /");
            console.log("Ruta recibida:", req.url);
            var filePath = sysPath.resolve(sysPath.join(path, 'index.html'));
            return res.sendFile(filePath);
        });

        app.get("/docs*", function (req, res) {
            return res.sendFile(sysPath.resolve(sysPath.join(path, "docs/index.html")));
        });

        app.all('/*', function (req, res) {
            console.log("Entramos en ruta: /*");
            console.log("Ruta recibida:", req.url);

            var filePath = sysPath.resolve(sysPath.join(path, 'index.html'));

            console.log("Ubicacion del fichero a retornar:", filePath);
            return res.redirect('/');
        });

        server = http.createServer(app);

        // Inicializacion alternativa en Heroku
        port = process.env.port || port;

        server.listen(parseInt(port, 10), callback);

        return server;
    };
}