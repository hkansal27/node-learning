var server = require('net').createServer();

var port = 4001;


server.on('error', function(err) {
	console.log('Something went wrong!');
	server.close();
})

var sockets = [];

server.on('connection', function(socket) {

	console.log('New connection establish');
	sockets.push(socket);
	socket.on('data', function(data) {
		
		sockets.forEach(function (socketInstance) {
			if(socketInstance !== socket) { 
				socketInstance.write(data);
			}
		})
	})
})

server.on('close', function() {console.log('closing the server')});

server.listen(port);
