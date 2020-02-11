var connect = require('connect');
var logger = require('morgan');
var app = connect();

app.use(logger());
app.use(function(req, res) {
	res.end('Hello world');
})

app.listen(8800);

