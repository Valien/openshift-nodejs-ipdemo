var http = require("http"),
    ip   = require("ip"),
    os   = require("os");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello OpenShift!\n");
    response.write("The Pod IP is: " + ip.address() + "\n");
<<<<<<< HEAD
    response.write("The Pod hostname is: " + os.hostname() + "\n");
    response.write("this is a pod");  
=======
    response.write("The Pod hostname is: " + os.hostname());
    response.write("this is a demo");
>>>>>>> origin/master
    response.end();
}).listen(8080);
