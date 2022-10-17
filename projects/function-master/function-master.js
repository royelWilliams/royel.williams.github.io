//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //create a bin to push keys 
   var arr = [];
   // for in loop to go through the object 
for(var key in object){
    // push the key out of the object 
   arr.push(object[key]);
}
    return arr;
}
//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var string = [];
    //for in loop 
for(var key in object){
    // console.log(string);
    // console.log(object[string]); 
    string.push(key);

}
//join keys and return 
//string.join(' ');
//console.log(string.join(' '), "here");
return string.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var sims = [];
    //for in loop 
for(var key in object ){
    // values 
   // sims.push(object[key])
    //console.log(sims, "over");
if (typeof object[key] === "string"){
    sims.push(object[key]);
}
}
//join with a space between and return 
//sims.join(' ');
//console.log( sims, "hi");
return sims.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
// use a if statement  and the Array.isArray method to go through the collections
//object then returning array if an array else returning an object from the object 
 if (Array.isArray(collection)){
return "array";
 }
else{ return "object";}
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    /* use the charAt in (0 index) upper case that letter at the 0 index 
then by using the substr(taking out the lowercased letter) at the index 1 
so all that is left is the string with the uppercase letter first
*/
    var sam = string.charAt(0).toUpperCase() + string.substr(1);
//console.log(sam);
    return sam;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // split string into an array 
    var array = string.split(" ");
    var str = "";
   // console.log(string.split(" "));
    //single out the first letter in each sring in the array 
    for( var i = 0; i < array.length; i++){
        // using previous example to uppercase the first letter in the strings
        var dan = array[i].charAt(0).toUpperCase() + array[i].substr(1);
        console.log(dan)
        
    str += dan + " ";  
}
console.log(str);
// using trim to get rid of space in last index
return str.trim();
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //create a variable and locate the object name 
 var name = object.name;
 // uppercase the first letter of the object name and add the rest unchanged
 var capitalName = name[0].toUpperCase() + name.substr(1);
 //console.log(capitalName,"here");
 // create a welcome statement using strings and the object name 
 var welcomeSent = "Welcome " + capitalName + "!";

 return welcomeSent;
console.log("!", welcomeSent);
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
var name = object.name; 
var nameUpper = name[0].toUpperCase() + name.substr(1);
console.log(nameUpper);
var species = object.species;
var speciesUpper = species[0].toUpperCase() + species.substr(1);
var together = nameUpper + " is a " + speciesUpper;
console.log(together);
 return together;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
 //  assign a variable and retrieve the the noises key from the object 
             var noises = object.noises;
            //console.log(noises.join(" "));
            // make sure it is an array 
             var array = Array.isArray(noises);
          // if object has a noise array return them as a string
            if(array && noises.length > 1){
              return noises.join(" ");
            }
            //if there are no noses return  string "there are no noises"
            else {
              return "there are no noises"
          } 
          }



//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
        // using the includes method go through the string and see if the word is being used if so true 
          if(string.includes(word)){
            return true;
          }
          else {
           return false;
          }
          // if word is not there return false 
        }


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
// get the frinds array  add the name using push and return object 
object.friends.push(name); 
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
// does the array exsist and is the name a actual friend in the array 
if(Array.isArray(object.friends) && object.friends.includes(name)){
    return true;
  }
// return true if name is a friend in the objecet
else {
  return false;
    }
  // false otherwise 
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  var notFriends = [];
// loop through the array 
for(let i = 0; i < array.length; i++){
    // edge case: if the name of the person === name then do nothing
    if(array[i].name === name){
     // if the name is not a friend then push name into arr     
    } else if(!array[i].friends.includes(name)){
        notFriends.push(array[i].name)
        
    } 
} console.log(notFriends);
return notFriends;


}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  object[key] = value;
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // create a loop to get to the array elements 
    for (var i = 0; i < array.length; i++){
      // now that i have access to the array elements i can delete the given key if its in the array 
      delete object[array[i]];
    }
    return  object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
         return [...new Set(array)];
  }



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}