var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    var path = req.url;

  // When we visit different urls, read and respond with different files
  switch (path) {

  case "/":
    return fs.readFile(__dirname + "/assets/index.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

  case "/contact":
    return fs.readFile(__dirname + "/assets/contact.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

  case "/portfolio":
    return fs.readFile(__dirname + "/assets/portfolio.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

  case "/resume":
    return fs.readFile(__dirname + "/assets/resume.html", function(err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });

    // default to rendering index.html, if none of above cases are hit
  default:
    return fs.readFile(__dirname + "/assets/index.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
}

// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
