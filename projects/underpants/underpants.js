/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/**
 * identity: Function takes in a input value and returns it unchanged.
 * @param : function takes in any input 
 * @return: function returns input  value unchanged
 */ 
   function identity(value){// use function declaration syntax 
return value;
   }
   module.exports.idenity = idenity 
/**
 * typeOf: returns a string for the value type that is put in.
 * this does not count for the object,array, and null so other methods 
 * will have to be taken such as the Array.isArray 
 * @parameter : takes in a value type 
 * @return : returns a string indecating what the operand value is 
 * 
 */
 function typeOf(value){
    if(typeof(value) === "string"){
    return "string";}
else if(typeof(value) === "number"){
    return "number";
}
else if(value === null){ 
    return "null";} 
else if(Array.isArray(value) === true){
return "array";}
 else if(typeof(value) === "object"){
   return "object";}
   else if(typeof(value)=== "undefined"){
        return "undefined";}
 else if(typeof(value)=== "boolean"){
          return "boolean"; }
else{
    return "function";
}   
}
module.exports.typeOf = typeOf
/**
 * first: gives only returns the frist x number of elements in an array 
 * meets a condition generally returning the first element of some array 
 * @param: an array of items 
 * @param:passing the number for where to return 
 * @return: the first element will be returned 
 */
 function first(array, number){
    //empty array to hold the arrays
    let arr = [];
  //if number is not a number (!number)  and if number is not 1 
    if(number === 1 || !number){
        return array[0];
    }
   // if number is less than 0 then it is not needed (edgecase)
// if array is not an array
    else if(number < 0 || !Array.isArray(array)){
        return [];
    } 
     // if number is greater than the lenngth of the array 
     else if(number > array.length){
        // you will still have all of the elements so just return the array 
         return array;
     }
    
    else {
        //pushing elements through a loop 
        for(var i = 0; i < number; i++){
            //return the index arrays
         arr.push(array[i]);
        }
     return arr;
    }
}
module.exports.first = first
/**
 * last: gives only returns the last x number of elements in an array
 * returns the last element in selected items whern using the .last() it returns
 * everything but the last entry so you should use the .last()-1
 * @param:array of items 
 * @param:passing a number for where to return 
 * @return: return everything but where they want to stop the array 
 * 
 */
 function last(array, number){
    if(number === 1 || !number){
      return array[array.length-1];
  }
 // if number is less than 0 then it is not needed (edgecase)
// if array is not an array
  else if(number < 0 || !Array.isArray(array)){
      return [];
  } 
   // if number is greater than the lenngth of the array 
   else if(number > array.length){
      // you will still have all of the elements so just return the array 
       return array;
   }
  
  else {
      // start at the 0th index of the array and stop at number 
return array.slice( number- 1, array.length);   }
 
}
module.exports.last =last 
/**
 * indexOf:returns the index that any given value can be found in an array 
 * or it will return a -1 if the value is not found in the array 
 * @param:an array is being used 
 * @param: and we are passing a value that should be found 
 * @return:returns the index of the value 
 */
 function indexOf(array, value){
    // loop through the array
    
    // loop through the array
    for(var i = 0; i < array.length ; i++){
        if(array[i] === value[0]){
            return i
        }
      
     }
      return -1
           
        module.exports.indexOf = indexOf
  /** 
   * contains:this is to deterine if a collection/ array contains a value or not 
   * 
   * @param:an array 
   * @param: the value that needs to be found in the array 
   * @return:if the value is there it should return true and 
   * if the value is not present return false.. Returns booleans
  */
   function contains(array, value){
    for(var i = 0; i < array.length;i++){
        // using the ternary operator 
        return array.includes(value) ? true: false;
        
    }
}
 }
module.exports.contains=contains
/**
 * unique:mkaes sure a given value is the first occurance 
 * and any duplicates will not be copied 
 * it then returns an array with only unique values from the given array  
 * @param:an array that holds all of the values(including duplicates)
 * @return: you will hold all of the vlues not including duplicates 
 */
 function unique(array){
    // empty array to repersent the new array
    var newArray = [];
//loop through the array 
for(var i = 0; i < array.length; i++){
    //if the new array takes the index of the old array taking out the repeating values 
if(newArray.indexOf(array[i]) === -1){
    //push the indexes of the old array into the new array  
    newArray.push(array[i]);
}  
}
// return the new array 
return newArray;
}
module.exports.unique=unique
 /**
  * filter:looks through each value in a list/ array and return
  * values that pass the test from the provided function
  * filter only returns values that can prove true from the array that was pushed into 
  * the callback and then the output will put all of the true values into an array/list 
  * @param:an array thats holding all of the values 
  * @param:a function that is used to run each test 
  * @return:creates a new array that pass all of the test 
  */
  function filter(array, func){
    var arr = [];
        //iterate through collection with a loop 
        for(var i =0; i < array.length;i++){
            //call the input func on each element 
            if(func(array[i], i, array) === true ){
                arr.push(array[i])
            }
        }
            //func(current element, curent index, array)
       
return arr;
    }
    module.exports.filter=filter
    /**
     * reject: this will return the elements
     *  that the filter test would pass 
     * reject only returns values that can prove false from the array that was pushed into 
  * the callback and create another an array/ list with those rejected(false) values 
     * @param:the array of elements 
     * @param:a function that has to loop through the elements 
     * @return: returns the values from the new array/ list that 
     * were not passing the test 
     * 
     */
     function reject(array, func){
        var arr = [];
        //iterate through collection with a loop 
        for(var i =0; i < array.length;i++){
            //call the input func on each element 
            if(func(array[i], i, array) === false ){
                arr.push(array[i])
            }
        }
            //func(current element, curent index, array)
       
    return arr;
    
    }
    module.exports.reject = reject
    /**
     * partition: uses one array as a input and splits it into two arrays 
     * the first containing elements that satisfy the function and the second taht dosent 
     * @param: an array - the original array 
     * @param: a functionn that will be passed through the array 
     * @return: 2 arrays will be returned one that has the elements that make the function happy 
     * and the rest 
     */
     function partition(array, func){
        var original = [];
        var truthy = [];
           var falsy = [];
    
            _.each(array,function(element,key,array){
         if(func(element,key,array) === true){
            truthy.push(array[key]);
         }else {
          falsy.push(array[key])
    }
    });
    original.push(truthy,falsy);
    return original;
    };
    module.exports.partition=partition
    /**
     * map:creates an array by calling a specific function on each element present in the parent array.
     *  map iterates through every value in the array that was pushed in and then gets passed to a callback function
     * whatever the callback function returns become the values to a new array(output)
     * @param: collection(an arraay(s))
     * @param: function- calls the function once for each element in the array
     * @return: a new array with transformed elements 
     */
     function map(collection, func){
        let newArray1 = [];
        if(Array.isArray(collection)){
            for(let i = 0; i < collection.length; i++){
                newArray1.push(func(collection[i],i,collection))
            }
        }else{
            for(let key in collection){
                newArray1.push(func(collection[key], key,collection));
            }
        }
        return newArray1;
    }
    module.exports.map=map
    /**
     * pluck: used when u need to extract a list of a given property 
     * takes an array of objects then iterated through them one by one an array is the produced that returns 
     * every value at the input property of each object 
     * 
     * pluck takes in an array of objects 
     * @param: an array of objects 
     * @param: a property that is being looked for in the array of objects 
     * @return: all of the values from the given key 
     */
     function pluck(array, property){
        return _.map(array, function(index){
    return index[property];
        })
    }
module.exports.pluck = pluck
module.exports.pluck = pluck
/**
 * every:goes throug a function for each element in an a array then returns 
 * true if the function is true for all elements 
 * @param: collection which is an array that is being passed through 
 * @param: the function that has to pass through the array 
 * @return: returns true when all of the elements of the array are true 
 */
 function every(collection, func){

    // determine if function is not provided 
    if(func === undefined){
      //determine if it is an array
if(Array.isArray(collection)){
  //iterate through a loop 
for(let i = 0; i < collection.length; i++){
  if(!collection[i]){
   //determine if collection[i] it is a falty datatype    
    return false;
  }
}
}
  else{
      for(let key in collection){
          if(!collection[key]){
              return false;
          }
      }
  }
}
else{
  //else a function was involved 
  if(Array.isArray(collection)){
      //iterate through the collection
      for(let i = 0;i < collection.length;i++){
          //what am i determining
          if(func(collection[i], i, collection) === false){
              return false;
          }
      }
  }else{
      //iterate through a object
      for(let key in collection){
          if(func(collection[key], key, collection)=== false){
              return false;
          }
      }

  }
}
return true;
}
module.exports.every=every
/**
 * some::goes throug a function for each element in an a array then returns 
 * true if the function is true for even one element 
 * @param:a collection (an array )
 * @param: a function that is going to loop through the array 
 * @return: returns true if some of the test in the array are passing 
 */
 function some(collection,test){
    // similar to every
    let result = false;
    if(test){
        _.map(collection,function(element,index,array){
            if(test(element,index,array) === true){
               return  result = true;
            }
        });
    } else{
        _.map(collection,function(element){
            if(element === true){
              return result = true; 
            }
        });

    }
    return result;
};
module.exports.some= some
/**
 * reduce: cycles through an array and makes a callback function on each element in the 
 * array, then consolidates the value from each iteration to the seed(accumulator)
 * @param: the first parameter is an array which is 
 * @param: there will be a function that has to pass 
 * through the array to get the elements 
 * @param: the seed  accumulates the value of each iteration and the value will be 
 * returned when the function is later invoked
 * @return: the final result of using a reduce should return a sinlge value 
 */
 function reduce( array, func, seed){
    // create result value 
    let result;
    if(seed === undefined){
        result = array[0];
        // iterate through the array 
        for(let i = 1; i < array.length; i++){
result = func(result, array[i], i, array);
        }
    }else { 
        result = seed;
    //iterates through array 
for(let i = 0; i < array.length; i++){
   //assign result to the  result of the invoking callback function 
   result = func(result, array[i], i,array);
}
}
return result;
}
method.exports.reduce=reduce

/**
 * extend: is usef in class declaration/ expressions this is 
 * used to create a child of another class(another function that has a
 * parent )
 * @param:this takes in an object (the parent )
 * @param:and takes in another object(s)(the child/children)
 * @return:the destination object 
 */
 function extend (obj1, ...object2){
    // we need to copy properties from ...obj to obj1
    // return the updated obj1

    // first we need use a for loop to loop through object two because it is somewhat of an array now thinks to the spread operator
    for(var i = 0; i < object2.length; i++){
    // use a for in loop to apply everything from    
      for(let key in object2[i]){
        obj1[key] = object2[i][key];
    }
    }
       return obj1;
   };
   module.exports.extend=extend