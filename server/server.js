var express = require('express');
var app = express();
var port = 3000;

var cookieParser = require('cookie-parser');
var session = require('express-session');
// var mongoose = require('mongoose')
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

//Serve up the LinkedList page

app.use(express.static('client'))

//If the request contains 
app.post('/jobs', function(req,res){
  db.fetchJobs(req,res, function(results){
    res.end(JSON.stringify(results));
  })
})
app.post('/jobs/create', function (req, res) {
  db.addJob(req.body, function(results){
    res.end(JSON.stringify(results));
    db.addUserJob(req.body.owner, req.body.title, req.body.status);
  });
});

app.post('/jobs/create', function(req,res){
  db.addJob(req.body, console.log('Job Added'))
})

app.post('/ownedjobs', function(req,res){
  req.body.filter="ownerID";
  req.body.value="(SELECT id FROM users WHERE username='"+req.body.owner+"')";
  db.fetchJobs(req,res, function(results){
    res.end(JSON.stringify(results));
  })
})

app.post('/signup', function(req, res){
  db.addUser(req.body, function(){
    res.send(200)
  })
})

app.post('/signin', function(req, res){
  db.getUsers(function(user){
    if (!!user.length && req.body.password === user[0].password) {
      console.log("Valid login")
      res.send(200)
    } else {
      console.log("Invalid login")
      res.send(404)
    }
  }, 'username', req.body.username)
})


require('./app/routes.js')(app, passport);

app.listen(port);
console.log('Server running on port: ' + port);



