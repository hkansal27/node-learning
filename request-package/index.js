var request = require('request');

request('http://www.google.com', function (error, response, body) {
	console.log('error:', error); // Print the error if one occurred
	console.log('statusCode:', response && response.statusCode);
	response.on('data', function(data) {
		console.log('some data')
	})
	// console.log('body:', body); // Print the HTML for the Google homepage.
});
