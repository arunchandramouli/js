/* 

  Aim :: Exploring JavaScript Function objects - Part 1

  We will define a function and pass some arguments to it

*/
// Define the function

    function rating(rating){

      /*
          Inside the function body we will add some if-else / switch logic to compute and return the hike %
      */

      if (rating > 9 && rating <= 10){

           return 'Hike to be offerred for rating == '+rating +' will be 100 %'
      }

      else if(rating > 6 && rating <= 9){

          return 'Hike to be offerred for rating == '+rating +' will be 70 %'
      }

    else if(rating > 4 && rating <= 6){

          return 'Hike to be offerred for rating == '+rating +' will be 40 %'
      }

    else{

        return 'Hike to be offerred for rating == '+rating +' will be 30 %'
    }

}

console.log("Using if-else if- else construct ... \n\n");

for (var x = 0; x<=10;x++){

  console.log(rating(x));  
}

console.log("\n\n");

/*
  Aim :: Using Inner functions - using if-else
*/


function greet(who,gender){

    function honor() {

        if (gender == 'male') {

          return 'We Welcome Mr ' + who
        }
        else{
          return 'We Welcome Ms ' + who
        }
    }

    return honor()
}

console.log(greet("Mary",'female'));
console.log(greet("Peter",'male'));
console.log("\n\n");


/*
  Aim :: Using Inner functions - using switch
*/



function greet(who,gender){

    function honor() {


        switch(gender){


          case 'male':

                return 'We Welcome Mr ' + who
                break;

          default :
                return 'We Welcome Ms ' + who
                break;
        }

        
    }
    return honor()
}

console.log(greet("Mary",'female'));
console.log(greet("Peter",'male'));