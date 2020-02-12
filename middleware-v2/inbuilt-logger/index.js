var connect = require('connect');
var logger = require('morgan');
var errorHandler = require('errorhandler');
errorHandler.title = 'My Application';

var app = connect();

var format = ':method :url - :status - :response-time ms';
app.use(logger(format));
app.use(function(req, res, next)  {
	next(new Error('Hello frndz'));
})

app.use(function(req, res) {
	res.end('Hello world');
})
app.use(errorHandler())
app.listen(8800);

