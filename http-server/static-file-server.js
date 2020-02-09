var path = require('path');
var fs = require('fs');

var port = 4001;

var server = require('http').createServer();

server.on('request', function(request, response) {
	
	let file =  path.normalize('./'+ request.url);
	
	
	function reportError(err) {
		 console.log(err); 
		 response.writeHead(500);
		 response.end('Internal Server Error');
	}	

	fs.exists(file, function(exist) {
		if(!exist) {
			response.writeHead(404);
			response.end('Not found');
		}
		
		fs.stat(file, function(err, stat) {
			
			if(err) {
				return reportError(err);
			}
			if(stat.isDirectory()) {
				response.writeHead(302);
                        	response.end('Request is a directory');
			}

			var rs = fs.createReadStream(file);
			rs.on('error', (err) => {reportError(err)});
			response.writeHead(200);
			rs.pipe(response);
		})	
		
	})
})

server.on('close', function() {
	console.log('Closing connection')
})

server.on('listening', function() {
	console.log(`Server listening on port ${port}`)
});

server.on('error', function(err) {
	console.log(`Error occured ${err && err.message}`);
})

server.listen(port);
