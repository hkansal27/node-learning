var connect = require('connect');
var path = require('path');
var fs = require('fs');
var util = require('util');

function logRequestFile(dirname) {
	
	return function(req, res, next) {
		 fs.open(path.join(dirname, '_' + Date.now().toString() + '_' + Math.floor(Math.random() * 1000) + '.txt'), 'w', function(err, fd) {
                	if(err) {
				res.writeHeader(500);
				res.end('Something went wrong!');		
			}
			let logFile = fs.createWriteStream(null, {fd});
			logFile.write(req.method + ' ' + req.url + '\n'); 
			logFile.write(util.inspect(req.headers) + '\n');
			req.pipe(logFile);
			next();
        	})
	}
}

let app = connect();
app.use(logRequestFile('request'));
app.use(function(req, res) {
	res.end('Hello world');
})

app.listen(8800);
