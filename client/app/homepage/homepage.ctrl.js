angular.module('app')

.controller('homepageController', ['$scope', 'jobs', function($scope, jobs) {
  $scope.allProjects = jobs.data;
  $scope.user = [2,'Wes'];
  $scope.currentProjects = $scope.allProjects.filter(function(job){
    var coworkerIds = [];
    for (var i=0; i<job.coworkers.length; i++) {
      coworkerIds.push(job.coworkers[i][0])
    };
    return job.ownerid[0]===$scope.user[0] || coworkerIds.indexOf($scope.user[0])>=0;
  });
  $scope.pendingProjects = $scope.allProjects.filter(function(job){
    var coworkerIds = [];
    for (var i=0; i<job.pendingcoworkers.length; i++) {
      coworkerIds.push(job.pendingcoworkers[i][0])
    };
    return coworkerIds.indexOf($scope.user[0])>=0;
  });;

}])