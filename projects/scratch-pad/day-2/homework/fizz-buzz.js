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
        for (var index = 1; index <= 100; index++){
            console.log(index);
          }
          //incrimenting by three 
          for (var i = 1; i <= 100; i+=3){
            console.log(i);
          }
          for(var j = 1;j <= 100; j+=5){
            console.log(j);
          
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