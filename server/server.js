var express = require('express');
var app = express();
var port = 3000;

var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose')
//Morgan logs http request to the console - this was pretty handy in debugging
var morgan = require('morgan'); 
var bodyParser = require('body-parser');
var passport = require('passport');
//Flash is the middleware that handles the messages such as "User not found" etc.
var flash = require('connect-flash');
var path = require('path')
var db = require(path.join(__dirname+'/db/db.js')) 
  
  

/**********************************************************
This is MongoDB settings for testing - sub out for Postgres
**********************************************************/

// var configDB = require('./config/database.js');
// mongoose.connect(configDB.url);
// require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//This is the view engine - may need to change depending on front end implementation
// app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/../client/index.html'));
})

//If the request contains 
app.post('/jobs', function(req,res){
  db.fetchJobs(req,res, function(results){
    res.end(JSON.stringify(results));
  })
})

app.post('/ownedjobs', function(req,res){
  req.body.filter="ownerID";
  req.body.value="(SELECT id FROM users WHERE username='"+req.body.owner+"')";
  db.fetchJobs(req,res, function(results){
    res.end(JSON.stringify(results));
  })
})


require('./app/routes.js')(app, passport);

app.listen(port);
console.log('Server running on port: ' + port);



