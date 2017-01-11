var http = require("http");
var url = require("url");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
});

function handleRequest(req, res) {

    var urlParts = url.parse(req.url);

    switch (urlParts.pathname) {
        case "/":
            home(urlParts.pathname, req, res);
            break;
        case "/favoritefood":
            favoriteFood(urlParts.pathname, req, res);
            break;
        case "/favoritemovies":
            favoriteMovies(urlParts.pathname, req, res);
            break;
        case "/favoritecss":
            favoriteCss(urlParts.pathname, req, res);
            break;
        default:
            display404(urlParts.pathname, req, res);
    }
}

function home(url, req, res) {
    var html = "<html>";
    html += "<body><h1>Home Page</h1></body></html>";
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
}

function favoriteFood(url, req, res) {
    var html = "<html>";
    html += "<body><h1>Favorite Foods</h1><a href='/'>Home</a></body></html>";
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
}

function favoriteMovies(url, req, res) {
    var html = "<html>";
    html += "<body><h1>Favorite Movies</h1><a href='/'>Home</a></body></html>";
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
}

function favoriteCss(url, req, res) {
    var html = "<html>";
    html += "<body><h1>Favorite CSS</h1><a href='/'>Home</a></body></html>";
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
}

function display404(url, req, res) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Not Found </h1>");
    res.end("The page you were looking for: " + url + " can not be found ");
}
