process.stdin.resume();

process.stdin.on('data', function(data) {
	var number = parseInt(data.toString(), 10);
	process.stdout.write(++number);
})
