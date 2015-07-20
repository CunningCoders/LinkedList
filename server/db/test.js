var db = require('./db.js')



var populate = function(){
  db.addUser({
    username: 'Not Colin',
    password: 'abc',
    skills: 'Javascript, NodeJS, Hearthstone',
    GitHub_ID: 10624139,
    Description: "Alovernotafighter",
  },  function(){db.addUser({
      username: 'Colin',
      password: 'abcd',
      skills: 'Javascript, NodeJS, Hearthstone',
      GitHub_ID: 10624140,
      Description: "Something something pants",
      }
  , 
  function(){db.addJob({
      title: 'Gosu Dev',
      owner: 'Not Colin',
      description: 'Take naps, dispense wisdom',
      skills: 'Backend Analysis, C, Visual Basic',
    },
    function(){db.addUserJob('Colin', 'Gosu Dev', 'Pending')}
  )})})
}

// db.initDB()
// populate()
var testUpUser = function() {
  db.updateUser({
    id : 2,
    username: 'ColinW',
    skills: 'Javascript, NodeJS, Hearthstone, Naps',
    GitHub_ID: 10624140,
    Description: "Not a real doctor, just a love doctor",
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

testUpUserjobs()
// db.getUserJobs(function(a){
//   console.log(a)
// },'Colin')


// db.getJobs(function(a){console.log(a)});