var Twit = require('twit');

var fs = require('fs'),
path = require('path'),
Twit = require('twit'),
config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);

function random_from_array(images){
	return images[Math.floor(Math.random() * images.length)];
}
