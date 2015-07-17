var db = require('./db.js')



var populate = function(){
//   db.addUser({
//   username: 'Not Colin',
//   password: 'abc',
//   skills: 'Javascript, NodeJS, Hearthstone',
//   GitHub_ID: 10624139,
//   Description: "Alovernotafighter",
//   CurrentJobs: "MakerSquareGreenfield",
//   PendingJobs: "Gettingajob"
// })

// db.addUser({
//   username: 'Colin',
//   password: 'abcd',
//   skills: 'Javascript, NodeJS, Hearthstone',
//   GitHub_ID: 10624140,
//   Description: "Something something pants",
//   CurrentJobs: "Not Currently working",
//   PendingJobs: "S"
// })

// db.addJob({
//   title: 'Gosu Dev',
//   owner: 'Not Colin',
//   description: 'Take naps, dispense wisdom',
//   skills: 'Backend Analysis, C, Visual Basic',
//   coworkers: 'Wes, Brittney, John, Zach'
// })

db.addUserJob('Colin', 'Gosu Dev', 'Pending')
}

// db.initDB()
populate()


// db.getJobs(function(a){console.log(a)});

//  title:
//  description:
//  owner:
//  skills:
//  coworkers: 
//  status: