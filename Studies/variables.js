/** 
 * VARIABLES
 * The big idea is variables are containers for storing data that can be changed later.Vairables were used in the var
 * form from around 1995 until 2015 when two new "keywords" were created (let and const). Each keyword has a special task 
 * when called they help a softwear engineer to work as diligently as possible. Variables can have local or global scope.
 * Local variables cannot be accessed out of the function where they are declared, whereas the global variables can be accessed 
 * from anywhere. It is also important to remember that variables are case sensitive and must be initialized before being accessed.
 * Variables are used as idenifiers to access other values such as strings, numbers, arrays, booleans , etc.
 * NOW LETS SEE THEM IN ACTION 
 * followed by the keyword you will want some form of ifentification/tag for the statement that you are about to create.
 * BREAKDOWN OF KEYWORDS:
 * 
 * var 
 * - can be redeclared with the same name 
 * -can take a global or functional scope
 * 
 *  declaration & Assignment:
 * when assigning using the var keyword remember that things can be assigned the same thing in and out of a global 
 * scope which can cause confusion later because var does not serve as a block scoped variable 
 *  assigning var:
 * var age; //is the var variable being declared. this is simply when you add a keyword to the var variable and 
 * 
 *  var name;
 * 
 * var boolean; 
 * 
 * declaring var:
 * 
 * var age = 19;
 * 
 * var name = "royel";
 * 
 * var boolean = true;
 * 
 *  you declare the variables by adding an equal sign this tells the variable that something is going to come next 
 * this also opens the ground to any form of datatype to follow from a simple string to assigning an object or function 
 * one thing to really pay attention to when using var is that it is not block scope so if and when you declare a variable using the same keyword 
 * the equation or result for lack of better words will change.
 * 
 * 

 *  let
 * - can't be redeclared 
 * - can be reassigned 
 * -must be initalized with a value
 * -block scoped(variable can not be called outside of its block of code)
 * declaration & Assignment:
 * when assigning the let variable similarly to var you van simply define it without assigning it to a definate value.
 * however let is different from the var keyword in the sende that it is blocked scoped meaning that it can not be accessed outside of a score that is not global
 * for instance if you are using a let keyword inside of a function you will not be able to continue to reach that keyword 
 * if you call it again in a global scope because it was not defined in that scope 
 * 
 * assignment:
 * let simple;
 * 
 * let family;
 * 
 * let custom;
 * 
 * declaration:
 * let simple = "strings";
 * 
 * let family = [ 'brother', 'sister','mother' ,'father'];
 * 
 * let custom = function(smiling){
 * let smiling = 'happy'
 * };
 * // from the function you would not be able to call the smiling keyword anywhere but in that function because of the blocked scope feature of the let variable 
 * 
 * 
 * const 
 * -can't be redeclared(const is short for constant so the numbers shouldnt change)
 * -can't be reassigned (const shouldnt change)
 * -can be modified but not initialized 
 * -block scoped(variable can not be called outside its block of code)
 * 
 * 
 *  unlike both var and let there is no option to assign a declaration to const later it is suppose to be a constant key that does not change so when it is assigned it must be 
 * declared or a error will form 
 * const color = "blue";
 * const sound = "PAINO:
 * 
 * Similar to the let keyword the const keyword is alo blocked scoped meaning it can not be called outside of its block weather that is a function or something else 
 * if created inside a function it can not be called globally.
 * 
 * Assignment:
 * there are different things that you want to pay attention to when variables are being assigned and declared 
 * this includes the keyword that is being used and what you intend yo happen in each declaration 
 *   
 * 
 * DECLARATION
 * var sadness; => declaration
 * console.log(sadness);=> undefined
 * -this console prints to undefined because there has not been an assignment
 * 2.) Secondly you will want to assign/initalize your variable so it can work.
 * this can be done by using the assignment opperator (=).
 * var  sadness = 23;
 * console.log(sadness); => 23
 * - this console is now defined because of the assignment operator
 * 
 * 3.)Finally you can redeclare/reassign a variable if needed. 
 * sadness = 321,345; => recall the function without the variable 
 * console.log(sadness);=> 321,345 prints to the console
 * 
 * 
 * HOISTING:
 * Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
 *  (to the top of the current script or the current function)
 * 
 * Example:
 *  x = 5; // Assign 5 to x
 *
 * elem = document.getElementById("demo"); // Find an element
 * elem.innerHTML = x;                     // Display x in the element
 * 
 * var x; // Declare x
 * 
 * 
*/