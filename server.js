var Twit = require('twit');

var fs = require('fs'),
path = require('path'),
Twit = require('twit'),
config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);

T.post('status/update', { status: 'Look, I am tweeting!' }, function(err, data, response) {
	console.log(data)
});
