/* 

  Aim :: Exploring JavaScript Function objects - Prototype

  From the Autohor of Sam's Learn Javascript in 24 hours;

  *** You can add both properties and methods to an existing object by using the prototype
keyword. (A prototype is another name for an object’s definition, or constructor
function.) The prototype keyword enables you to change the definition of an object
outside its constructor function. ***

*/

// Define the Person constructor
var Person = function(firstName) {
  
  this.firstName = firstName;

};

// Add a couple of methods to Person.prototype
Person.prototype.walk = function(){
  console.log("I am "+this.firstName+" and I'm now walking!");
};

Person.prototype.sayHello = function(){
  console.log("Hello, How are you doing? Welcome! , I'm " + this.firstName);
};


var Anna = new Person("Anna");
console.log(Anna) // returns Anna object in json format

// walk and sayHello are added @ using prototype - below function calls are valid
Anna.walk();
Anna.sayHello();
