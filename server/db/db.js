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
    initTables()
  });
}
  
var initTables = function() {
  var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/linkedlist';

  var client = new pg.Client(connectionString);
  client.connect();

  var createUsersTable = client.query(
    'CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(20) NOT NULL UNIQUE, password VARCHAR(20) NOT NULL, Skills VARCHAR(100) NOT NULL,  GitHub_ID INTEGER UNIQUE, Description VARCHAR(255), CurrentJobs VARCHAR(255), PendingJobs VARCHAR(255), complete BOOLEAN)'
  ); 
  createUsersTable.on('end', function() {
    var createJobsTable = client.query(
    'CREATE TABLE jobs(title VARCHAR(20), ownerID int references users(id), description VARCHAR(255), Skills VARCHAR(100), Coworkers VARCHAR(100))'
    );
      console.log('Creating Tables')
      client.end();
  });
}

var resetDB = function() {
  var connectionString = process.env || 'postgres://localhost:5432/';

  var client = new pg.Client(connectionString);
  client.connect();

  var createDatabase = client.query(
    'DROP DATABASE linkedlist'
    );
  createDatabase.on('end', function() { 
    console.log('Dropping Database')
    client.end();
    initDB(); 
  });
}

var addUser = function(user) {
  
  var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/linkedlist';
  var client = new pg.Client(connectionString);
  client.connect();

  var insertUser = client.query(
    "INSERT INTO users (username, password, skills, GitHub_ID, Description, CurrentJobs, PendingJobs) VALUES ('"+user.username+"','"+user.password+"','"+user.skills+"',"+user.GitHub_ID+",'"+user.Description+"','"+user.CurrentJobs+"','"+user.PendingJobs+"')"
  ); 
  insertUser.on('end', function() { 
    console.log('Adding User')
    client.end();
  });
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

initDB();
