// Load the http module to create an http server.
const http = require('http');
const util = require('util');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var rnd = randomInt(0, 10);
  var pauseSeconds = randomInt(5, 30);

  switch (rnd) {
    case 0:
      delayedResponse(response, pauseSeconds);
      break;
    case 1:
      errorResponse(response);
      break;
    case 2:
      delayedErrorResponse(response, pauseSeconds);
      break;
    default:
      plainResponse(response);
  }
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");

// random number generator
function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

// does a plain response
function plainResponse(response) {
  console.log("plain response");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World!\n");
}

// does a delayed response to simulate server load
function delayedResponse(response, pauseSeconds) {
  setTimeout(function () {
    console.log("delayed response with %d seconds pause", pauseSeconds);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(util.format("Hello World! delayed by %d seconds.\n", pauseSeconds));
  }, pauseSeconds * 1000);
}

// does a Bad Request
function errorResponse(response) {
  console.log("error response");
  response.writeHead(400, {"Content-Type": "text/plain"});
  response.end("Bad Request\n");
}

// does a delayed Bad Request
function delayedErrorResponse(response, pauseSeconds) {
  setTimeout(function () {
  console.log("delayed error response with %d seconds pause", pauseSeconds);
  response.writeHead(500, {"Content-Type": "text/plain"});
  response.end(util.format("Internal Server Error delayed by %d seconds.\n", pauseSeconds));
  }, pauseSeconds * 1000);
}

/*
var crypto = require('crypto');

function randomValueHex(len) {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len);   // return required number of characters
}
*/
