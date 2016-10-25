//Libraries
const Hapi = require('hapi');
const Path = require("path");

//FrontEnd API
const api = require(Path.join(__dirname, "api"));

//Server instantiation @ IP[default="localhost"]:PORT[default=8080]
const server = new Hapi.Server();
server.connection({ host: process.env.IP || "localhost", port: process.env.PORT || 8080 });

//Register Plugins
server.register(api.pluginConf, (err) => {
    if(err) throw err;

    //Register Routes
    server.route(api.routes.list);

    //Let it rip
    server.start((err) => {
        if (err) { throw err; }
        console.log('Server running at:', server.info.uri);
    });
});
