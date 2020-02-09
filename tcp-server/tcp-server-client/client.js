var net = require('net');

var port = 4000;

process.stdin.resume();

var conn = net.createConnection(port);

process.stdin.pipe(conn);

conn.on('connect', function() {
	console.log('Connected to server');
	conn.write('Hello world')

});


conn.on('error', function(err) {
	console.log('Error in connection', err.message);
})
