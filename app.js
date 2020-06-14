var http = require('http');
// Read Environment Parameters
var port = Number(process.env.PORT || 8080);
var greeting = process.env.GREETING || 'Hello World!';
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(greeting + "\n");
});
console.log("Running at "+ port)
server.listen(port);