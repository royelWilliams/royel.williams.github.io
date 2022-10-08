// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  //YOUR CODE BELOW HERE //
   // loop through the array and then return the index of the array 
   for(var i = 0; i < array.length; i++){
    // log the index of of the array 
     console.log(array[i]);
   }
  // var i = 0;
  // while(i< array.length){
  //   console.log(i);
  //   i++;
  }

  printArrayValues("today");
  //printArrauValues(1,2,3);
  // YOUR CODE ABOVe HERE //


/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array){
// using the reverse loop properly to return the index
   for(var i = array.length -1 ; i >= 0;i--){
    //console.log(i);
      console.log(array[i]);
    }
   
  
}
  //printArrayValuesInReverse(["tomorrow", "today", "yesterday"]);
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //create output array 
  var keys =[]
  //iterate through object
  for(var key in object){
//push the current key into keys array  
keys.push(key);
  }
  //return object array
  return keys;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // create a output array 
  // use a for in loop  then use console. log to return the key in the object 
for(var key in object){
  console.log(key);
}
}

//printObjectKeys(object);
/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //  for(var key in object){
  //   console.log(object[key])
  // console. log the object values pass in object into the paramerter to show what object you are taking the values from 
    console.log(Object.values(object));
    return Object.values(object);
  }
  // YOUR CODE ABOVE HERE //
/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // create a for in loop to pass the values fro the object 
  for(var key in object){
    //console.log(key);
    // go in the object loop and find all of the key values 
    console.log(object[key]);
  }
}
//printObjectValues(obj[]);   
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //for(var key in object){
    // using the . keys go into the key values of the object and then use the .length method to find the length of the keys 
return Object.keys(object).length;
  }
   // YOUR CODE ABOVE HERE //
/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
// 

//var array = [];
//loop over the array backwards 
//Object.values(object);
// this is the array  of values being passed into a loop
// loop over the arr
for(var i = Object.values(object).length -1; i >= 0;i--){
  
  console.log(Object.values(object)[i])}



}

//printObjectValuesInReverse();
  // YOUR CODE ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
