angular.module('app.profile', [])


.factory('profileFactory', function() {
	this.updateInfo = function(personIndex, obj){
        staffArray.splice(personIndex, 1, obj)
    }
	
})