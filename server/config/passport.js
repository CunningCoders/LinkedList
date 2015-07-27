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
		emailField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, email, password, done){
		process.nextTick(function(){
			/***********************************************************
			This is MongoDB/Mongoose query I used for testing - sub 
			out for Postgres in Production
			***********************************************************/
			/***********************************************************
			User.findOne is specific to MongoDB, which accepts an object.
			Sequelize has a similar syntax:
			User.find({username: username}).success(function(user))
			This should help with resolving the issue of passport using
			the postgres db. This resource may help:
			http://sarabinns.com/tag/passport-js-sequelize-postgresql

			A solution to implement the authentication would be to not use
			any of the helper query functions found in db.js. Use sequelize 
			for signup/signin functionality.
			***********************************************************/
			User.findOne({'local.email': email}, function(err, user){
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
					newUser.local.email = email;
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
			emailField: 'email',
			passwordField: 'password',
			passReqToCallback: true
		},
		function(req, email, password, done){
			process.nextTick(function(){
			/***********************************************************
			This is MongoDB/Mongoose query I used for testing - sub 
			out for Postgres in Production
			See comments line 30-41.
			***********************************************************/
				User.findOne({ 'local.email': email}, function(err, user){
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