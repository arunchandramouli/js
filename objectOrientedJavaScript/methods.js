/* 

  Aim :: Exploring JavaScript Initialization and methods

*/


// Use the display function to print the attributes
function display(){


  console.log('Hello My name is ' + this.name +' and I am ' +this.age + ' years old ' +this.gender +' ,I am a ' +this.profession +' and I am from ' +this.location+',\
  I earn '+this.income+' annually');
}



// Write a function to initialize a Person with the Attributes

function person(name,age,gender,profession,location,income){


      this.name = name;
      this.age = age;
      this.gender = gender;
      this.profession = profession;
      this.location = location;
      this.income = income;
      this.display = display;
      
}



Anne = new person('Anne Elizabeth',20,'Female','Singer','Wales',20000);
Anne.display();
Rosemary = new person('Rosemary Elizabeth',18,'Female','Singer','Wales',19000);
Rosemary.display();