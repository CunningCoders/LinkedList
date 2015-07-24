var User = require('./models/user');
module.exports = function(app, passport){

	app.get('/', function(req, res){
		res.render('index.ejs');
	});

	/******************************************************************
	Login
	******************************************************************/
	app.get('/login', function(req, res){
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	}));

	/******************************************************************
	Signup
	******************************************************************/
	app.get('/signup', function(req, res){
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	}));

	/******************************************************************
	Profile
	******************************************************************/
	app.get('/profile', isLoggedIn, function(req, res){
		res.render('profile.ejs', { user: req.user });
	});


	/******************************************************************
	Logout
	******************************************************************/
	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})
};

/******************************************************************
Middleware func to check if user is authenticated or not, redirects
to login if not
******************************************************************/
function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/login');
}

	// app.get('/:email/:password', function(req, res){
	// 	var newUser = new User();
	// 	newUser.local.email = req.params.email;
	// 	newUser.local.password = req.params.password;
	// 	console.log(newUser.local.email + " " + newUser.local.password);
	// 	newUser.save(function(err){
	// 		if(err)
	// 			throw err;
	// 	});
	// 	res.send("Success!");
	// });