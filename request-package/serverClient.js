var http = require('http');

var options = {
	port: 80,
	host: 'www.google.com',
	path: '/index.html'
}

http.get(options, function(response) {
	response.on('data', function(data) {
		console.log('get some code', data.toString());
	})
})
