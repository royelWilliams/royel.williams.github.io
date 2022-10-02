// #!/usr/bin/env node

'use strict';

/*
	 * 2: Fizz Buzz
	 *
	 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
	 *  b. BUT, for multiples of three print “Fizz” instead of the number.
	 *  c. AND for the multiples of five print “Buzz”.
	 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
	*/
	function fizzBuzz() {
	    // YOUR CODE GOES BELOW HERE //
	    //using a for loop to log numbers from 1-100
        // for (var index = 1; index <= 100; index++){
        //     console.log(index);
        //   }
        //   //incrimenting by three 
        //   for (var i = 1; i <= 100; i+=3){
        //     console.log(i);
        //   }
        //   for(var j = 1;j <= 100; j+=5){
        //     console.log(j);
          
        //   }
        // create a for loop that tracks all numbers from 0-100
for (var i=1; i < 101; i++){
  // typing fizbuzz when it is a multiple of both 5 and 3 
    if (i % 15 == 0) console.log("FizzBuzz");
      //type fizz if it is a multiple of three 
    else if (i % 3 == 0) console.log("Fizz");
      //  type buzz make a multiple of five 
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
          
	//for multiples of three return 3
	
	    // YOUR CODE GOES ABOVE HERE //
	}






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}