var net = require('net');

net.createServer(function(socket) {
	
	socket.on('data', function(data) {console.log(data)});

	socket.on('end', function() {console.log('end')});

	socket.write("Hello my name is lakhan");

}).listen(4001)
