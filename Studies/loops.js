/**
 * LOOPS
 * a loop can be various things such as a for loop, a for in loop, a reverse loop, and a while loop
 * a for loop is the most basic kind of loop we have different parts o the loop that help us to work it 
 * in the first part of the loop we are declaring what kind it is so you would say 
 * for
 *  secondly you want to declare a variable and give it a letter
 * this will be the  declare a counter variable. This variable that we keeps track of how many times our 
 * loop has been executed.
 * this will also tell us where to start with our loop so then it will look like this 
 * for(var i = 0;) ** this tells your loop where you want to start 0 being the oth index of the array or the first spot on the object
 * next you want to tell the loop some basic information is is <,>, <=,>= and what is the stopping point 
 * this will help the loop to run smoothly i sudgest using the < or <= or the loop will crash 
 * so now your loop looks like this 
 * for(var i = 0 ; i <= 12;) ** this tells us where to stop when you have the condition met. the loop will stop when the resultis false
 * the last thing you want to do with your loop is to tell it if it will incriment up or down
 * so...
 * for(var i = 0 ; i <= 12;i++)=> going up 
 * for(var i = 0 ; i <= 12;i--)=> going down 
 *  ** incrimenting through the loop lets you know if you are going up or down the ++ signifies that the numbers that are being passed through will get larger and closer to infinity
 * the -- signify that the numbers will contnue to get lower to negative infinity => but this is not possible because we have a place for the loop to actually stop 
 * that would be the basics 
 * the major thing that you want to remember when dealing with a for in loop is the stop start and incrment 
 * ITTERATING FORWARD && BACKWARD
 * var fruits = ["apple","banana","cherry"];
 * var direction = 1;
 *
 * function iterate(arr, direction, callback){
 *  if(direction === 1){
 *       console.log("Forwards");
 *      for(var i = 0; i < arr.length; i++){
 *           //Iterate through array regularly
 *          if(callback !== undefined){
 *               callback(arr[i]);
 *           }
 *       }
 *   }
 *   else{
 *      console.log("Backwards");
 *       for(var i = arr.length - 1; i >= 0; i--){
 *          //Iterate through array backwards
 *           if(callback !== undefined){
 *              callback(arr[i]);
 *          }
 *      }
 *   }
 * }
 *
 * 
 * 
 * now a for in loop is used when you want to loop through a object 
 * they are extremely helpful, however they are quite different from a normal for loop.
 * a for in loop has various parts, there is the loop, and then after the loop we are provided ways to find things within the loop from
 * the object such as keys  and values 
 *  Iterate over the properties of an object and log its name and value to the console
 * for(var key in object){
 * }
 * they key repersents the keys in the opject that are being iterated through and the object(well thats kind of self explanitatory)
 * here is a good example to use a for in loop
 * const capitals = {
 * a:"allu",
 * b:"bee",
 * c:"carmen"};
 * for(var key in capitals){
 * }
 * 
 * 

 * And the last of the three a while loop
 * a while loop is used when you are usually Use a while loop for reading a file into a variable.
 * Use a while loop when asking for user input.They will alo continue exiting the block of code as long as the code is true 
 * Use a while loop when the increment value is nonstandard.
 * and i am sure tehre are many more ways taht you van utilize a while loop 
 * The basic thing to remember when dealing with a while loop is that the The while loop loops through a block of code as long as a 
 * specified condition is true.
 * sooooo...
 * while(x<145){
 * count ++ // make sure to incriment x so the the loop will eventually stop 
 * }
 * results to the loop going on and on until whatever the number x is happens to be greater than the number 145
 */