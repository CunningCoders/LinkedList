//This is my test Schema for Mongoose

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		username: String,
		password: String
	}
});

module.exports = mongoose.model('User', userSchema);