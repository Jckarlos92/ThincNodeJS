var http = require('http');
var url = require('url');
var router = require ('./router');

var server = {};
var PORT;


server.config = function (config) {
	PORT = config.port || 80; // If config.port == undefined THEN 80
};

server.start = function (port) {

	http.createServer(function (request, response) {
	//	var data = {'key_1': '1', 'key_2': '2', 'key_3': 3};
		//var message = JSON.stringify(data);
		
		//response.writeHead(200, {'Content-type': 'text/plain'}); 

		var pathname = url.parse(request.url).pathname;

		//Without call-backs
		/*
		var message = router(pathname);

		response.writeHead(200, {'Content-type': 'application/json'}); 
		response.write(message);
		response.end();*/

		// With call-backs
		router (pathname, function(message) {
			if (message === '') {
				response.writeHead(404, {'Content-type': 'application/json'}); 
				response.end();
			} else {
				response.writeHead(200, {'Content-type': 'application/json'}); 
				response.write(message);
				response.end();
			}
		});

	}).listen(PORT);

	console.log ('Server is running on port:' +  PORT);

};

//module.exports = server.start // Si en index.js solo invocas server()

module.exports = server; // Exportar el modulo