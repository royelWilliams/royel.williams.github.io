// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
   // var num = 12;
 //if(num > base){
   // return true;
 return function(num){
    if(num >base ){
        return true;
    }
else{
    return false;
}
 } 
} 
    // createGreaterThanFilter(23);
    // YOUR CODE ABOVE HERE //
 /* Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return a function with a parameter to be tested against the parameter of base
    return function(number){
    if(number < base){
        // if number is less than base then report true else return false 
        return true;
    }
    else {return false;
    }
}
}
       // YOUR CODE ABOVE HERE //


/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //I have to change the case to lower case so it even if the word is in a different case it can still be tested
 var wow = startsWith.toLowerCase();

// //returning a function to test if starts with is with a given character 
return function(string){

    var oh = string.toLowerCase();
    if(wow === oh[0]){
    return true;
}
else {return false;}
}

}
// var lower = startsWith.toLowerCase();
// var low = str.toLowerCase();
// if(lower === low[0]){
//     return true;
// }
// else{return false;}

// I have to change the case of the character so it can be compared to the starts with function 
//then use a if statement to prove if the characters are the same return true else return false 
    


    // YOUR CODE ABOVE HERE //


/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    var wow = endsWith.toLowerCase();

// //returning a function to test if starts with is with a given character 
return function(string){

    var oh = string.toLowerCase();
    if(wow === oh.length-1){
    return true;
}
else {return false;}
}
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    var arr = [];
    for(var i = 0;i >strings.length;i++ ){
    return[strings,modify];
}
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
