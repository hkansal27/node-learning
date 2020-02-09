var net = require('net');

var port = 4201;

var server = net.createServer();

var sockets = [];

server.on('connection', function(socket) {

	sockets.push(socket);
	socket.on('data', function(data) {
		sockets.forEach((socketInstance) => {
			if(socketInstance !== socket) {
				socketInstance.write(data);
			}
		})
	})
	socket.on('close', function(){
		sockets.splice(sockets.indexOf(socket), 1);
	})
})

server.on('listening', function() {
	console.log('Server start listening on port', port);
})

server.on('error', function() {
	console.log('Error occured');
})

server.listen(port);
