angular.module('app')

.controller('homepageController', ['$scope', 'jobs', function($scope, jobs) {
  $scope.allProjects = jobs.data;
  $scope.currentProjects = $scope.allProjects.filter(function(job){
    return job.status==='confirmed';
  });
  $scope.pendingProjects = $scope.allProjects.filter(function(job){
    return job.status==='pending';
  });;

}])