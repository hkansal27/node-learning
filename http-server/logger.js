var spawn = require('child_process').spawn;
var http = require('http');

var server = http.createServer();


server.on('connection', function(connection) {
	connection.setNoDelay(true);
})

server.on('listening', function() {
	console.log('listening on port', 4000);
})


server.on('request', function(req, res) {
	var child = spawn('tail', ['-f', 'index.txt']);
 	res.writeHead(200, {'content-type': 'text/plain'});
        
	//child.stdout.on('data', function(data) {
        //        console.log(data)
	//	for(let i = 0; i< 100; i++) {
 	//		res.write(new Date() + " " +  data + " ");
	//	}
        //        res.write(data);
        //})
  
        child.stdout.pipe(res);
        
	res.on('end', function() {
                child.kill(); 
	});
})

server.listen(4000);
