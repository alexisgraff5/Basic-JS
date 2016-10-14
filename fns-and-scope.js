//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

function isTyler(name) {
  if (name === 'Tyler') {
    return true;
  }
  return false;
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  function getName(){
    var name = prompt("What is your name");
    return name;
  }






//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  function welcome() {
    var name1 = getName();
    alert ("Welcome, " + name1);
  }

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  // Parameters is what the function needs to pass in, but arguments are the actual values of the parameters you pass in. So if the function had the parameter of num, the argument would be the actual number you pass in (e.g., 3)


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  //undefined
  //" " empty string
  //false
  //0
  //null
  //NaN - Not a number





//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName() {
    return "Alexis";
  }



//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = function() {
  var name = myName();
  alert(newMyName);
}


//Now alert the result of invoking newMyName

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn() {
     return function() {
      return "Alexis";
    }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
    var innerFn = outerFn();

//Now invoke innerFn.
innerFn();
