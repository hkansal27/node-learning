var connect = require('connect');

function setHeader(name, value) {
	return function(req, res, next) {
		// res.writeHeader(name, value);
		res.writeHeader(200, { 'Content-Type': 'text/plain' });
		next();
	}
}

function replyText(text) {
	return function(req, res) {
		// res.writeHeader(200, { 'Content-Type': 'text/plain' });
		res.end(text);
	}
}

let app = connect();

app.use(setHeader('X-Powered-By', 'Node'));
app.use(replyText('Hello world'));

app.listen(8800);
