angular.module('app')

.controller('homepageController', function($scope) {
  $scope.currentProjects = [
    { id: 1,
    title: 'Gosu Dev',
    ownerid: 1,
    description: 'Take naps, dispense wisdom',
    skills: 'Backend Analysis, C, Visual Basic',
    coworkers: 'Wes, Brittney, John, Zach' }, 
    { id: 2,
    title: 'Usog Dev',
    ownerid: 2,
    description: 'Do ALL THE THINGS',
    skills: 'Node.js, Passport, PostgreSQL',
    coworkers: 'Colin, Brittney, John, Zach' }
  ];
  $scope.pendingProjects = [
    { id: 3,
    title: 'Awesome JS',
    ownerid: 2,
    description: 'Make it awsome.',
    skills: 'Angular, UI-Router, Backbone',
    coworkers: 'Colin, Brittney, John, Zach' }
  ];
})