// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    // using the .length method identify(by using a return) the lengh of the parameter string 
    
return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */

function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
//use the toLowerCase() method to return a sring with lowerase letters 
var low = string.toLowerCase();
return low;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
//useing the toUpperCase() to RETURN a given string using uppercase letters 
var change  = "STRING";
var up = string.toUpperCase();
return up;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
// first make a string that can be manipulated like the Hello world string

  //console.log(string);
//use the split method to split the words using dashes 
var run = string.split(" ");
  console.log(run);
//use the join method to turn the array back into a string 
var stop = run.join("-");
console.log(stop);
var go = stop.toLowerCase();
console.log(go);
return go;
}

console.log(toDashCase("Hello World beautiful day"));
    // YOUR CODE ABOVE HERE //


/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 function beginsWith(string, char){
    // YOUR CODE BELOW HERE //
    //using the lowercase you want to make sure all of the characters in the given string are the same 
var now = string.toLowerCase();
  //console.log(now,"now");
//now by using the new variable now(that is all of the characters in the same form) create a if statement that is explaining true if a match false if not 
if (now[0] !== char.toLowerCase()){
    console.log(now[0], char, "happy");
  return false;
}
  //else {
      return true;
  }

//onsole.log(beginsWith('Hello', 'h'));

    // YOUR CODE ABOVE HERE //
/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
// make all of the characters in the same case
var later = string.toLowerCase();
  console.log(later[later.length - 1]);
// find the last character in the string, use it in if statement to prove that the last letter does equal the character given 
if (later[later.length- 1] === char.toLowerCase()){
  console.log(later[later.length- 1]);
    return true;
}
else{ 
  return false; 
}
}
console.log(endsWith('hello', 'o'));
    // YOUR CODE ABOVE HERE //

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // by returning the two strings being + together using the sign 
return stringOne. concat(stringTwo);



    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// use the array that was given and join it by the spaces using .join 
        var args = Array.from(arguments);
      console.log(args);
      args.join('');
      console.log(args.join(''));
      return args.join('');
    }
      join("today","tomorrow","later");

 // YOUR CODE ABOVE HERE //

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// using the .length property find the length of both of the strings 
//compare using a if else statement 
if(stringOne.length > stringTwo.length){
    return stringOne;
}
// else if(stringTwo.length > stringOne.length) {
    else{
    return  stringTwo;
}
}

longest("today", "tomorrow");
// provide a value to insert to test

    // YOUR CODE ABOVE HERE //


/*/ Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {   
    // YOUR CODE BELOW HERE //
    var string1 = stringOne.toLowerCase();
    var string2 = stringTwo.toLowerCase();
    // make a if statement  using the .localeCompare method returns a number indicating
    // whether a reference string comes before, or after, or is the same as the given string in sort order. 
    if(string2 > string1){
      return 1;
    }
else if(string1 > string2){
  return -1;
}    
    else{
      return 0;
    }
      }
      



// var string1 = "apple";
//   var string2 = "hello";
// var compare = string1.localeCompare(string2);
// console.log(compare);
// var values= string2.localeCompare(string1);
// console.log(values);
// var even= string2 === string1;
// console.log(even);


  //}
 // sortAscending("happy", "had");
    // YOUR CODE ABOVE HERE //



/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var string1 = stringOne.toLowerCase();
    var string2 = stringTwo.toLowerCase();
    // there should be a if statement to test which is hidher vs which is lower and the else being the 0 
    if(string1 > string2){
      return 1;
    }
else if(string2 > string1){
  return -1;
}    
    else{
      return 0;
    }
  }
  

//     // YOUR CODE ABOVE HERE //
// }


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;}