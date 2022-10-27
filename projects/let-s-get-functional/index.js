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
 * npm start --prefix ./royel.williams.github.io/projects/let-s-get-functional

 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
//implement _.filter()to return array of only male customers 
let males=_.filter(array,function(customer,index,array){
    //return true if the input customer is male 
    return customer.gender === 'male'; 
})
return males.length;
};

var femaleCount = function(array){
    //implemwnt _.reduce() to return the number of female customers 
     return _.reduce(array,function(acc,current,index,array){
        //determine if customer is female 
        if(current.gender === "female"){
            acc += 1;//acc= acc + 1;
        }
        return acc;
    },0)
};

var oldestCustomer = function(array){
   let age = _.reduce(array, function (acc, current){
    if(acc.age > current.age){
      return acc;
    }
        return current;
        
   }, '')
    return age.name
};
        
var youngestCustomer = function(array){
    let age =  _.reduce(array, function (acc, current){
        if(current.age > acc.age){
            return acc
        }
        else{
            return current
        }
       
       },"");
       return age.name
}
var averageBalance = function(array){
     let total = _.reduce(array, function(acc, current){
        let bal = parseInt(current.balance.replace(/[^\w\s]/gi, ""),10);
         acc += bal; 
         return acc;
     },0);
     let mark = (total/(array.length*100));
     return mark;
    }


    
var firstLetterCount = function(array, letter){
     return _.reduce(array,function(acc, curr){
if(curr.name[0].toLowerCase() === letter.toLowerCase()){
    acc = acc + 1;
}
 return acc;


    }, 0);
}

var friendFirstLetterCount = function(array,customer,letter){
       //store the friends in a room who meet the criteria(object)
       var customerFriends= {};
       // loop through the customers to get their friends 
       for(let i = 0;i < array.length; i++){
        //if name matches name 
        // current customer matches customer in parameter
        if(array[i].name === customer)
     customerFriends = array[i];
       }
       return _.reduce(customerFriends.friends,function(acc, curr){
        if(curr.name[0].toLowerCase() === letter.toLowerCase()){
            acc = acc + 1;
        }
         return acc;
        
        
            }, 0);
        //}
       // if customer friends(first letter) meet requirements(letter passed in) add them to object
       //reduce 
    }


var friendsCount = function(array,name){
// look at the customers who have other customers as their friends 
var fcustomers = [];
//go through the customers array 
//for(let i= 0; i <array.length; i++){
//match a name to a name thats being put in 
//if(friends[i].name === name){
//fcustomers = array[i];

 let custom = _.reduce(array, function(acc,element){
    //trying the customers names 
    for(let i= 0; i < element.friends.length; i++){
        //match a name to a name thats being put in 
        if(element.friends[i].name === name){
            acc = element.name;
           fcustomers.push(acc);
        }
    }
 });
 return fcustomers;
}

var topThreeTags= function(array){
//find the three most common tags among all customers 
var commonTags=[];
//go through the array to get all of the tags 
// for(var i = 0; i < array.length; i ++){
//     if(friends.array[i].tags=== tags)
//     commonTags = array[i];
// }
return_.reduce(array,function(acc,current){
    for(var i = 0; i < current.length; i ++){
        if(current.tags === tags)
        commonTags = array[i];
    if(current.tags=== tags ){
    
    }
}
});


var genderCount=function(array){
   //count the number of each geneder and store it into an object 
   // create somewhere for the genders to go when this is all over 

 let genders = {};
 //use redcuce to compare genders and tally them 
return _. reduce(array,function(acc,currentC){
    for(var i = 0; i < array.length; i++){
        if(currentC === array.gender){
        acc += acc+ 1;
    }
    return acc;
}
});
 // be able to loop through the original array   
  //use redcuce to compare genders and tally them 
}

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
module.exports.genderCount = genderCount;}
