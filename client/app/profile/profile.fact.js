angular.module('app')


.factory('profileFactory', function() {
  var editObject = [
    {
      name: "Zack Lee",
      imgSrc: "http://1funny.com/wp-content/uploads/2010/09/surfing-grandma.jpg",
      from: {
        city: "houston",
        state: "texas"
      },
      phone: "7132021535",
      email: "",
      jobTitle: "ceo",
      company: "squakermare",
      description: "just a grandma and her surfboard",
      skills: ""
    }
  ]
  this.getProfile = function(){
    return editObject[0]
  };
  this.updateInfo = function(personIndex, obj){
            staffArray.splice(personIndex, 1, obj)
        }

})
