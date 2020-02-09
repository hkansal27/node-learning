var spawn = require('child_process').spawn;

var child = spawn('node', ['plus-one.js']);

setInterval(function() {

	var random = Math.floor(Math.random() * 1000);
	child.stdin.write(random);
	
	child.stdout.once('data', function(data) {
		console.log('data from child', data);
	})

}, 1000)
