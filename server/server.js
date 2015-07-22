var express = require('express');
var app = express();
var port = 3000;

var cookieParser = require('cookie-parser');
var session = require('express-session');
//Morgan logs http request to the console - this was pretty handy in debugging
var morgan = require('morgan'); 
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
//Flash is the middleware that handles the messages such as "User not found" etc.
var flash = require('connect-flash');

/**********************************************************
This is MongoDB settings for testing - sub out for Postgres
**********************************************************/

var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//This is the view engine - may need to change depending on front end implementation
app.set('view engine', 'ejs');



require('./app/routes.js')(app, passport);

app.listen(port);
console.log('Server running on port: ' + port);



