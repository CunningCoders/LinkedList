var db = require('./db.js')
var _ = require('underscore')


var populate = function(){
  db.addUser({
    username: 'colin',
    password: 'abc',
    skills: 'Javascript, NodeJS, SQL',
    gitHub_ID: 10624139,
    description: "Expert napper",
  },  function(){db.addUser({
      username: 'zach',
      password: 'defg',
      skills: 'Javascript, NodeJS, Hearthstone, Angular',
      gitHub_ID: 10624140,
      description: "Plays some sweet violin.",
      },
      function(){db.addUser({
      username: 'john',
      password: '1234',
      skills: 'Javascript, NodeJS, Express',
      gitHub_ID: 10624141,
      description: "Something something something",
      }, 
  function(){db.addJob({
      title: 'Gosu Dev',
      owner: 'colin',
      description: 'Take naps, dispense wisdom',
      skills: JSON.stringify(['Backend Analysis', 'C', 'Visual Basic']),
    },
  function(){db.addJob({
      title: 'Junior Dev',
      owner: 'zach',
      description: 'Screw up merges, Drop databases',
      skills: JSON.stringify(['Javascript']),
    },
    function(){
      db.addUserJob('zach', 'Gosu Dev', 'Pending')
      db.addUserJob('john', 'Gosu Dev', 'Current')
      db.addUserJob('colin', 'Junior Dev', 'Pending')
  })})})})})
}

var testUpUser = function() {
  db.updateUser({
    id : 2,
    username: 'ColinW',
    skills: 'Javascript, NodeJS, Hearthstone, Naps',
    gitHub_ID: 10624140,
    description: "Not a real doctor, just a love doctor",
  })
}

var testUpJob = function() {
  db.updateJob({
      id: 1,
      title: 'Mega Gosu Dev',
      description: 'Take naps, dispense wisdom, invent The Facebook',
      skills: 'Backend Analysis, C, Visual Basic, Fly helicopters',
  })
}

var testUpUserjobs = function(){
  db.updateUserJob({
    id: 1,
    username: 'Not Colin',
    status: 'Current'

  })
}
// db.initDB()
populate()



// db.getCoworkers(
//   function(a){
//     console.log(a)
//   }, 'Mega Dev'
// )
// testUpUser()
// testUpUserjobs()
// db.getUserJobs(function(a){
//   console.log(a)
// },'Colin')


// db.getJobs(function(a){console.log(a)});