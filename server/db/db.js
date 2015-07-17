// CREATE DATABASE LinkedList;

var pg = require('pg');

var initDB = function() {
  var connectionString = process.env || 'postgres://localhost:5432/';

  var client = new pg.Client(connectionString);
  client.connect();

  var createDatabase = client.query(
    'CREATE DATABASE linkedlist'
    );
  createDatabase.on('end', function() { 
    console.log('Creating Database')
    client.end(); 
    initUserTable()
  });
}

//Queries server and calls callback once done
var queryDB = function(queryStr, callback) {
  callback = callback || function(){}
  var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/linkedlist';
  var client = new pg.Client(connectionString);
  client.connect();
  
  var sendQuery = client.query(queryStr);
  sendQuery.on('end', function(result) { 
    callback(result)
    client.end();
  });
}

//Queries server and calls callback on each returned row.
var requestDB = function(queryStr, callback) {
  var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/linkedlist';
  var client = new pg.Client(connectionString);
  client.connect();
    
  var sendQuery = client.query(queryStr);
  sendQuery.on('row', function(result){
    callback(result)
  })
  sendQuery.on('end', function(result) { 
    client.end();
  });
}

  
var initUserTable = function() {
  queryDB(
    'CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(20) NOT NULL UNIQUE, password VARCHAR(20) NOT NULL, Skills VARCHAR(100) NOT NULL,  GitHub_ID INTEGER UNIQUE, Description VARCHAR(255), CurrentJobs VARCHAR(255), PendingJobs VARCHAR(255), complete BOOLEAN)',
    initJobsTable
  )
} 

var initJobsTable = function() {
  queryDB(
    'CREATE TABLE jobs(id SERIAL PRIMARY KEY, title VARCHAR(20), ownerID int references users(id), description VARCHAR(255), skills VARCHAR(100), coworkers VARCHAR(100))',
    function(){console.log('Creating Tables')}
  )
} 

var resetDB = function() {
  queryDB(
    'DROP DATABASE linkedlist',
    function(){console.log('Dropping Database')}
  )
}

var addUser = function(user) {
  queryDB(
    "INSERT INTO users (username, password, skills, GitHub_ID, Description, CurrentJobs, PendingJobs) VALUES ('"+user.username+"','"+user.password+"','"+user.skills+"',"+user.GitHub_ID+",'"+user.Description+"','"+user.CurrentJobs+"','"+user.PendingJobs+"')",
    function(){console.log('Adding User')}
  )
}

var addJob = function(job) {
  queryDB(
    "INSERT INTO jobs (title, ownerID, description, skills, coworkers) VALUES ('"+job.title+"',"+"(SELECT id from users WHERE username='"+job.owner+"')"+",'"+job.description+"','"+job.skills+"','"+job.coworkers+"')",
    function(){console.log('Adding Job')}
  )
}

var getJobs = function(filter, value){
  if (filter === undefined) {
    requestDB(
      "SELECT * FROM jobs",
      function(results){return results}
    )
  } else {
    requestDB(
      "SELECT * FROM jobs WHERE "+filter+" = '"+value+"'",
      function(results){return results}
    )
  }
}

var getUsers = function(filter, value){
  if (filter === undefined) {
    requestDB(
      "SELECT * FROM users",
      function(results){console.log(results)}
    )
  } else {
    requestDB(
      "SELECT * FROM users WHERE "+filter+" = '"+value+"'",
      function(results){
        console.log(results)}
    )
  }
}

var testUser = function() {
  addUser({
    username: 'Not Colin',
    password: 'abc',
    skills: 'Javascript, NodeJS, Hearthstone',
    GitHub_ID: 10624139,
    Description: "Alovernotafighter",
    CurrentJobs: "MakerSquareGreenfield",
    PendingJobs: "Gettingajob"
  })
}

var testJob = function() {
  addJob({
    title: 'Gosu Dev',
    owner: 'Not Colin',
    description: 'Take naps, dispense wisdom',
    skills: 'Backend Analysis, C, Visual Basic',
    coworkers: 'Wes, Brittney, John, Zach'
  })
}

initDB();
