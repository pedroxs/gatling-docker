// Load the http module to create an http server.
const http = require('http');
const util = require('util');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
	plainResponse(response);
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");


// does a plain response
function plainResponse(response) {
  console.log("plain response");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("STATICRESPONSE\n");
}
