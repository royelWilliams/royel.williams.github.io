// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./royel.williams.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
//implement _.filter()to return array of only male customers 
let males=_.filter(array,function(customer,index,array){
    //return true if the input customer is male 
    return customer.gender === 'male'; 
})
return male.length
};

var femaleCount;

var oldestCustomer = function(array){
   return _.reduce(array, function (acc, current) {
    if(current.age > acc.age){
        acc = current.name;
    }
   })
return acc;
}
        
var youngestCustomer = function(array){

}


var averageBalance = function(array){
    array_.reduce(array.length);
    var sum = 0;
    for(var i=0;i< array.length;)
;
 
var firstLetterCount = function (array, letter){
    var upper = array.toUpperCase(letter)
    
}

var friendFirstLetterCount = function(array,customer,letter){
array{2 }
}

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
