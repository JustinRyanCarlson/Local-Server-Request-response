var http = require("http");

var server7000 = http.createServer(function(request, response) {
    response.end("You don't suck");
});

var server7500 = http.createServer(function(request, response) {
    response.end("You suck");
});



server7000.listen(7000, function() {
    console.log("Server listening on port 7000");
});

server7500.listen(7500, function() {
    console.log("Server listening on port 7500");
});
