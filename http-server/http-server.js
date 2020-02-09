var http = require('http');

var server = http.createServer();


server.on('error', function(err) {
	console.log('Err', err.message);
})

server.on('connection', function(con) {console.log('A connection is establish', con)});

server.on('request', function(req, res) {
	res.writeHead(200, {'content-type': 'text/plain'});
	res.write('Hello world');
	res.end()
})

server.on('close', function() {console.log('A connection is closed')});

server.listen(4002);
