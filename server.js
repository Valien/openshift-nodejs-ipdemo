var http = require("http"),
    ip   = require("ip"),
    os   = require("os");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello OpenShift!\n");
    response.write("Your IP is: " + ip.address() + "\n");
    response.write("The pod hostname is: " + os.hostname());
    response.end();
}).listen(8080);