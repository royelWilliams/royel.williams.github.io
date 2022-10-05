/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// function search(animals, string){
//     for(var i = 0; i = animal.length; i++){

//     } 
//     //comparing the string and the array
// if( animals === string){
//     return animals;
// }
// else{
//     return null;
// }
// }

function search(array, string){
  //looping over the array to acces the objects
    for(var  i = 0; i < array.length; i ++){
      // array[i] = object and storing it 
      var animalObject = array[i];
      console.log(animalObject, string);
      //using the Object.values to return a object that exsist
      if (Object.values(animalObject).includes(string)){
      console.log("this string passs");
      return array[i];
    }
    }
    return null;
  }

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    // loop over the array 
    for (var i = 0; i < animals.length; i++){
      //store the object that was looped over 
      var objectLooped = animals[i];
    // if the animal exsist replace the object found in the loop with the object being referenced 
if(Object.values(objectLooped).includes(name)){
  //update replacement at current index
 //return objectLooped = replacement;
animals[i] = replacement;
console.log(animals, "happy");

}
//then replace the object 
    
}

}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
  for (var i = 0; i < animals.length; i++){
    //store the object that was looped over 
    var objLooped = animals[i];
  // if the animal exsist replace the object found in the loop with the object being referenced 
if(Object.values(objLooped).includes(name)){
//update replacement at current index
 return animals.splice(i);
 
}
  }
  }
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals,animal){
  // if(animal !== animals){
  //   animal.push(animals);
  // }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
