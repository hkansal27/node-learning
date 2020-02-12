var connect = require('connect');
var qs = require('qs');

var app = connect();

// setup the query middleware
app.use(qs());

// actually respond 
app.use(function(req, res) {
	res.end(JSON.stringify(req.query)); 
});
app.listen(8080);
