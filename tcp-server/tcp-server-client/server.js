var net = require('net');

var server = net.createServer();

var port = 4000;

server.on('listening', function() {
	console.log('Server is listening on port', port);
});

server.on('connection', function(socket) {
	console.log('A new connection is extablish');

	socket.on('data', function(data) {
		console.log(data);
	})

	socket.on('end', function() {
		console.log('A socket connection is terminated');
	})
})

server.on('close', function() {
	console.log('a server is closed')
});

server.listen(port);
