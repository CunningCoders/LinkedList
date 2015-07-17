var express = require('express');
var app = express();
var passport = require('passport');
var passportLocal = require('passport-local');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var db = require('./db');

app.set('view engine', 'ejs');//for testing
// set below for rendering views in PROD
// app.set('views', __dirname + '/views');
// app.set('view engine', 'html');

app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.cookieParser());
app.use(session({ 
  secret: process.env.SESSION.SECRET || 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session())

passport.use(new passportLocal.Strategy(function(username, password, done){
  //DB connection in PROD
  if(username === password){
    done(null, { id: username, name: username });
    console.log('authenticated');
  } else {
    done(null, error);
    console.log('not authenticated');
  }
}));

passport.serializeUser(function(user, done){
  //query db here
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  //query db here
  done(null, {id: id, name: id});
})


app.get('/', function(req, res){
  res.render('index', {
    isAuthenticated: req.isAuthenticated(),
    user: req.user
  });
});

app.get('/login', function(req, res){
  res.render('login');
});

app.post('/login', passport.authenticate('local'),function(req, res){
  res.redirect('/');
  //res.render('login');
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
})

var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log('server running on: ' + port);
  });