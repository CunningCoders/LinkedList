var User = require('./models/user');
module.exports = function(app, passport){

	// app.get('/', function(req, res){
	// 	res.render('index.ejs');
	// });

	/******************************************************************
	Login
	******************************************************************/
	app.get('/signin', function(req, res){
		//temporary fix for local testing...
		res.sendFile(__dirname.substr(0,38)+'/client/auth.html');
	});
	app.post('/signin', passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/signin',
		failureFlash: true
	}));

	/******************************************************************
	Signup
	******************************************************************/
	app.get('/signup', function(req, res){
		res.sendFile(__dirname.substr(0,38)+'/client/auth.html');
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/signin',
		failureRedirect: '/signup',
		failureFlash: true
	}));

	/******************************************************************
	Logout
	******************************************************************/
	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/signin');
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