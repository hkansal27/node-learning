var connect = require('connect');


function replyText(text) {
	return function(req, res, next) {
		res.end(text);
	}
}

function errorCreator() { 
	return function(req, res, next) {
		next(new Error('some error occur'));
	}
}

function errorHandler() {
	return function (err, req, res, next) {
		res.writeHeader(500, {'content-type': 'text/plain'});
		res.end('Something went wrong!')
	}
}

let app = connect();

app.use(errorCreator());
app.use(replyText('HelloWorld'));
app.use(errorHandler());
app.listen(8801);

