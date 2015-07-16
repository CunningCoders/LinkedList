// CREATE DATABASE LinkedList;

var pg = require('pg');

var initDB = function() {
  console.log('Creating Database')
  var connectionString = process.env || 'postgres://localhost:5432/';

  var client = new pg.Client(connectionString);
  client.connect();

  var createDatabase = client.query(
    'CREATE DATABASE linkedlist'
    );
  createDatabase.on('end', function() { 
    client.end(); 
    initTables()
  });
}
  
var initTables = function() {
  console.log('Creating Tables')
  var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/linkedlist';

  var client = new pg.Client(connectionString);
  client.connect();

  var createUsersTable = client.query(
    'CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(20) not null, password VARCHAR(20) not null, Skills VARCHAR(100) not null,  GitHub_ID VARCHAR(20), Description VARCHAR(255), CurrentJobs VARCHAR(255), PendingJobs VARCHAR(255), complete BOOLEAN)'
  ); 
  createUsersTable.on('end', function() {
    var createJobsTable = client.query(
    'CREATE TABLE jobs(title VARCHAR(20), ownerID int references users(id), description VARCHAR(255), Skills VARCHAR(100), Coworkers VARCHAR(100))'
    );
    createJobsTable.on('end', function() { client.end();});
  });
}

var resetDB = function() {
  console.log('Dropping Database')
  var connectionString = process.env || 'postgres://localhost:5432/';

  var client = new pg.Client(connectionString);
  client.connect();

  var createDatabase = client.query(
    'DROP DATABASE linkedlist'
    );
  createDatabase.on('end', function() { 
    client.end();
    initDB(); 
  });
}

resetDB();

