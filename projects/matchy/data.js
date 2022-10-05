/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal ={};
animal.species = "lion";
animal["name"] = "George";
animal.noises =[];
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// create a variable noises witha a empty array 
var noises = [];
// push a sound using bracket notation 
//noises.quietNoises = ['roar','purrr','growl','yip'];
noises[0] = 'roar';

noises.push('purrr');
noises.unshift('growl');
noises[noises.length]= "yip";
console.log(noises.length);
console.log(noises.length -1);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// assign the noises property to the noises array 
animal["noises"] = noises;
noises.push("yawn");
console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *Dot property accessor: object. property.
Square brackets property access: object['property']
Object destructuring: const { property } = object.
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare animals with empty array
var animals = [];
//push animal to animals 
animals.push(animal);
//create duck variable and and assign given object 
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
// create for in loop to push object property to the array 
animals.push(duck)
console.log(animals);
 var cow ={ species: "cow", name:"Frankie", noises:["moo","yawn"] }
var monkey = { species:"monkey", name:"limpy", noises: ["ohoh","ahah"] }
animals.push(cow);
animals.push(monkey);

//console.log animals and length of animals 
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* making a list of friends usind an array so all of the friends information can stay together and be seperated with a ,
This also allows more than one friend to be looked at to see its details, etc.
*/
var friends = [];

function getRandom (animals){
  //Math.random(animals);
 //return Math.floor(Math.random()* animals.length);
  return animals[Math.floor(Math.random()* animals.length -1)]
}
console.log(friends);
//add the friends as a property 
 animal["friends"] = friends;
 console.log(friends);
// create another index
//var newIndex = getRandom(animals);
// add it to the names array 
//friends.push(newIndex.name)
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}