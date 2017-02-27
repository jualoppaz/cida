var express, http, sysPath;
express = require('express');
sysPath = require('path');
http = require('http');
exports.startServer = function(port, path, callback) {
    var app, server;
    app = express();
    app.use(express.static(path));

    app.all("/", function(req, res) {
        return res.redirect('/index.html');
    });

    app.get("/docs*", function(req, res) {
        return res.sendFile(sysPath.resolve(sysPath.join(path, "docs/index.html")));
    });

    app.all('/*', function(request, response) {
        return response.sendFile(sysPath.resolve(sysPath.join(path, 'index.html')));
    });

    server = http.createServer(app);

    // Inicializacion alternativa en Heroku
    port = process.env.port || port;

    server.listen(parseInt(port, 10), callback);
    return server;
};