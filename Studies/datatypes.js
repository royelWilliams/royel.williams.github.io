/**
 *  DataTypes 
 * data types can be defined as a classification that specifies which type of value a variable 
 * One of the things that you really want to know when it comes to data types is the difference in primative and 
 * complex data types, with this understanding i think everything will be able to be a little easier to understand 
 * First the 
 * 
 * 
 *  1. Boolean Data Types.
 * Boolean is a primitive data type in javascript. Boolean data types consist of logical They consist 
 * of two possible values “true” or “false”.
 * this is generally used when comparing two ideas or things they can also be know when you want to find yes and no values 
 * although the use of booleans seems really simple they are constantly used when coding in Javascript 
 *
 *
 * 2. The null data types 
 * The null data type represents the value 0 it means this data type did not consist any data.
 * if you wish to shred a variable from its assigned cariable you would use a null. This can also be extremely useful 
 * when using booleans; null can be treated as a falsy value when a item is neither true or false but it is merely 
 * not a value at all 
 *
 *
 * 3. Undefined Data Type.
 * This can be one of the trickier data types it generally appears when:A variable that has not been 
 * assigned a value has the value undefined. undefined is a global variable is assigned to an object in one 
 * of the following cases:
 *
 * 1. Declared but not defined –
 * JavaScript assigns ‘undefined’ to any object that has been declared but not initialized or defined. In other words, 
 * in a case where no value has been assigned to the variable, JavaScript calls it ‘undefined’.
 *
 * 2. Array index or object property that does not exist.
 *
 * 3. A function parameter that has not been supplied.
 *
 * 4. The return value of functions that have to but don’t return a value.
 *
 * An illustration of this assignment is shown in the following –
 * Ex.
 *
 * [js]var item;
 * console.log(item)[/js]
 * Upon execution, the code will print undefined.
 * and i am very sure there are more examples 
 * but on to the next data type 
 * 
 * 
 * 4. Number Data Type.
 * Number Data type is for numbers of any kind: integer or floating-point, integers are limited by ±253.
 * The Number type has only one value with multiple representations: 0 is represented as both -0 and +0 
 * (where 0 is an alias() for +0). 
 * 
 * 5. String Data Type.
 * String Data type is used to represent textual data. It is a set of "elements" of 16-bit unsigned 
 * integer values.
 * The String object is used to represent and manipulate a sequence of characters
 * The string is a sequence of characters and the most commonly used data type to store text. Additionally,
 *  a string can also include digits and symbols, however, it is always treated as text
 * strings can be declared with one or two qoutes and whatever is inside of the qoutes will be a string. It does not matter if 
 * there are numbers or words, etc.
 * An array is a colllection of anything in brackets, there can be an array of strings, objects, numbers, booleans, even functions 
 * Arrays are quite intresting as they are represented by the number 8 in the database dictionary. Arrays store a list of elements of the same data type 
 * accessed by an index (element) number. The term array is synonymous with the terms list, vector, and sequence. Elements in arrays can be of any data types (including arrays or structures).
 *  A fully qualified array name (array field in $file) can be used in place of an array variable. The number of items in an array can vary and does not have to be allocated in advance.
 *  Arrays are delimited by curly braces ({ }). The following table shows some examples.
 * 
 * 
 * 7. Objects
 * an object can be easily described as a key and value type deal, to make any object you need both a key and a value. 
 * The object is a complex data type that allows you to store collections of data.
 * An object contains properties, defined as a key-value pair. A property key (name) is always a string, but the value can
 * be any data type, like strings, numbers, booleans, or complex data types like arrays, function and other objects
 * 
 * 
 * 8.NAN
 * well to start nan means not a number. I can say i see this data type more when a test fails compared to actually using it. 
 * While NaN represents a special Not-a-Number value. It is a result of an invalid or an undefined mathematical operation, like
 *  taking the square root of -1 or dividing 0 by 0, etc.
 * the nan data type can also represent a value which is not a valid number. It can be used to check whether a number entered
 *  is a valid number or not a number.
 * 
 * 
 * 9.Infinity and negaitive infinity ]
 *  side note : Infinity in general represents the mathematical Infinity ∞, which is greater than any number. Infinity is the result of dividing a nonzero number by 0,
 * The positive infinity in Javascript is a number which is constant and represents a value which is highest available.
 * It can be generated using a self made function or by an arithmetic operation
 * The negative infinity in JavaScript is a constant value which is used to represent a value which is the lowest available. This means that no 
 * other number is lesser than this value. 
 * 
 *
 * The difference in simple and complex???
 * Primitive data types can hold only one value at a time, whereas composite data types can hold collections of values and more complex entities. 
 */