var express, http, sysPath;
express = require('express');
sysPath = require('path');
http = require('http');
exports.startServer = function(port, path, callback) {
    var app, server;
    app = express();

    if(process.env.PORT){
        console.log("Path recibido en Heroku:", path);
    }

    app.use(express.static(path));

    require('./express/router')(app);

    app.all("/", function(req, res) {
        console.log("Entramos en ruta: /");
        console.log("Ruta recibida:", req.url);
        return res.redirect('index.html');
    });

    app.get("/docs*", function(req, res) {
        return res.sendFile(sysPath.resolve(sysPath.join(path, "docs/index.html")));
    });

    app.all('/*', function(req, res) {
        console.log("Entramos en ruta: /*");
        console.log("Ruta recibida:", req.url);

        var filePath = sysPath.resolve(sysPath.join(path, 'index.html'));

        console.log("Ubicacion del fichero a retornar:", filePath);
        return res.sendFile(filePath);
    });

    server = http.createServer(app);

    // Inicializacion alternativa en Heroku
    port = process.env.port || port;

    server.listen(parseInt(port, 10), callback);

    return server;
};

var portHeroku = process.env.PORT;

console.log("Ruta actual del servidor:", __dirname);

if(portHeroku){
    console.log("Puerto en Heroku:", portHeroku);

    var directory = sysPath.resolve(sysPath.join(__dirname, "/public"));

    console.log("Path enviado a servidor en Heroku:", directory);

    exports.startServer(portHeroku, directory, function(err, res){
        console.log("Servidor arrancado en Heroku correctamente en puerto:", portHeroku);
    });
}