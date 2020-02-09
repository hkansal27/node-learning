process.stdin.resume(); 
process.stdin.on("data", function(data) {
	var number;
	try {
		// parse the input data into a number 
		number = parseInt(data.toString(), 10) 
		process.stdout.write("Hello");
 	} catch(err) {
		process.stderr.write(err.message);
 	}
});
