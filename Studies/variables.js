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
 * BREAKDOWN OF KEYWODS
 * var 
 * - can be redeclared with the same name 
 * -can take a global or functional scope
 *  let
 * - can't be redeclared 
 * - can be reassigned 
 * -must be initalized with a value
 * -block scoped(variable can not be called outside of its block of code)
 * const 
 * -can't be redeclared(const is short for constant so the numbers shouldnt change)
 * -can't be reassigned (const shouldnt change)
 * -can be modified but not initialized 
 * -block scoped(variable can not be called outside its block of code)
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
*console.log(sadness);=> 321,345 prints to the console
*/