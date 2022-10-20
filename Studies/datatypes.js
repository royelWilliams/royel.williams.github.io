/**
 * DataTypes 
 * data types can be defined as a classification that specifies which type of value a variable 
 * has and what type of mathematical, relational or logical operations can be applied to it without 
 * causing an error
 * although there are more than 5 data types i am only going to mention the few that we 
 *  have really gone over
 *1. Boolean Data Types.
Boolean is a primitive data type in javascript. Boolean data types consist of logical They consist 
of two possible values “true” or “false”.
this is generally used when comparing two ideas or things they can also be know when you want to find yes and no values 
although the use of booleans seems really simple they are constantly used when coding in Javascript 
2. Null Data Types.
The null data type represents the value 0 it means this data type did not consist any data.
if you wish to shred a variable from its assigned cariable you would use a null. This can also be extremely useful 
when using booleans; null can be treated as a falsy value when a item is neither true or false but it is merely 
not a value at all 
3. Undefined Data Type.
This can be one of the trickier data types it generally appears when:A variable that has not been 
assigned a value has the value undefined. undefined is a global variable is assigned to an object in one 
of the following cases:

1. Declared but not defined –
JavaScript assigns ‘undefined’ to any object that has been declared but not initialized or defined. In other words, 
in a case where no value has been assigned to the variable, JavaScript calls it ‘undefined’.

2. Array index or object property that does not exist.

3. A function parameter that has not been supplied.

4. The return value of functions that have to but don’t return a value.

An illustration of this assignment is shown in the following –
Ex.

[js]var item;
console.log(item)[/js]
Upon execution, the code will print undefined.
and i am very sure there are more examples 
but on to the next data type 
4. Number Data Type.
Number Data type is for numbers of any kind: integer or floating-point, integers are limited by ±253.
The Number type has only one value with multiple representations: 0 is represented as both -0 and +0 
(where 0 is an alias() for +0). 
5. BigInt Data Type.
BigInt data type is for integer numbers of arbitrary length. With BigInt s, you can safely store and
 operate on large integers even beyond the safe integer limit for number s.
(Im sure we will learn more and in depth about this later )
6. String Data Type.
String Data type is used to represent textual data. It is a set of "elements" of 16-bit unsigned 
integer values.

7. Symbol Data Type.
The symbol data type is used for giving unique identifiers.

8. Properties Data Type.
In JavaScript, objects can be seen as a collection of properties. With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using key values. A key value is either a String or a Symbol value.


 */
