const Path = require("path");

const staticRoute = { method: "GET", path: "/static/{param*}", handler: { directory: { path: Path.join(__dirname, "..", "public", "static"), redirectToSlash: true, index: true } } };
const indexRoute = { method: "GET", path: "/", handler: { file: Path.join(__dirname, "..", "public", "index.html") } };

var routes = [ staticRoute, indexRoute ];

module.exports = {
    list: routes
}
