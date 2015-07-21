var express = require('express');
var app = express();
var passport = require('passport');
var passportLocal = require('passport-local');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
//var db = require('./db');
var pg = require('pg');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    user     : 'postgres',
    password : 'password',
    database : 'mydb',
    port: 5432
    // debug: true
  }
});

//test


//TESTING
// app.get('/test', function(req, res){
//  knex('users').where('username', 'john');
//    res.send(users.username);
// });

// knex.select("*").from("users").then(function(users){
//  //res.end();
//  console.log({user:users});
//  return({user:users});
// });

var pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING
});

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
app.use(passport.session());

passport.use(new passportLocal.Strategy(function(username, password, done){
  //DB connection in PROD
  knex('users').where({
      username: this.username
  }).select('username')

  //db.initDB();
  //var results = pg.query('select * from Users where username = "john1";');
  //console.log(results);
  if(knex('users').where({
      username: this.username
  }).select('username')){
    done(null, { user: username, user: password });
    console.log('authenticated');
  } else {
    done(null, false);
    console.log('not authenticated');
  }
}));

passport.serializeUser(function(user, done){
  //query db here
  done(null, user.username);
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