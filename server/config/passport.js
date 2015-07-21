var LocalStrategy = require('passport-local').Strategy;
var User = require('../app/models/user');

module.exports = function(passport) {


	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});


	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, email, password, done){
		process.nextTick(function(){
			/***********************************************************
			This is MongoDB/Mongoose query I used for testing - sub 
			out for Postgres in Production
			***********************************************************/
			User.findOne({'local.username': email}, function(err, user){
				if(err)
					return done(err);
				if(user){
					return done(null, false, req.flash('signupMessage', 'That email already taken'));
				} else {
					var newUser = new User();
					/***************************************************
					This is storing password as plain text : NOT GOOD
					Improve by implementing Bcrypt to encrypt the data 
					with salt
					***************************************************/
					newUser.local.username = email;
					newUser.local.password = password;

					newUser.save(function(err){
						if(err)
							throw err;
						return done(null, newUser);
					})
				}
			})

		});
	}));

	passport.use('local-login', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true
		},
		function(req, email, password, done){
			process.nextTick(function(){
			/***********************************************************
			This is MongoDB/Mongoose query I used for testing - sub 
			out for Postgres in Production
			***********************************************************/
				User.findOne({ 'local.username': email}, function(err, user){
					if(err)
						return done(err);
					if(!user)
						return done(null, false, req.flash('loginMessage', 'No User found'));
					if(user.local.password != password){
						return done(null, false, req.flash('loginMessage', 'Invalid password'));
					}
					return done(null, user);

				});
			});
		}
	));


};