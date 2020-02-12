var connect = require('connect');
var morgan = require('morgan');
var app = connect();

var bodyParser = require('body-parser');

// setup the middlewares 
app.use(morgan(':method :req[content-type]')); 

app.use(bodyParser());

// actually respond 
app.use(function(req, res) {
	res.end(JSON.stringify(req.body)); 
});
app.listen(8080);
