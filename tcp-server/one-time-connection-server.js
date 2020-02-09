var server = require('net').createServer();

server.on('connection', function(socket) {
	socket.on('data', function(data) {
		console.log(data.toString());
		socket.write('Closing connection');
		socket.end();
		server.close();
	})
})

server.on('error', function(err) {
	console.log('some error occured', err.message);
})

server.on('close', function() {
	console.log('closing server');
})

server.on('listening', function() {
	console.log('listening on port 4000');
})


server.listen(4000);
