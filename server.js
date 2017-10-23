var http = require("http"),
    ip   = require("ip");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello OpenShift!\n");
    response.write("Your IP is: " + ip.address());
    response.end();
}).listen(8080);