/** 
 * STRING-MANIPULATION
 * string manipulation is when you have to go through a value of a string and change it up.
 * Strings areIn JavaScript a string is not an array of characters but rather an object; and to change or
 *  manipulate a string some functions or methods are required.
 * we can manipulate a string by using operators or methods. 
 * a quick example by using operators can be used simply as 
 * var car = "red";
 * var girl = "Ronny";
 * var sentence =  girl + " drives a really fast " + car + " toyota.";
 * this is using the plus operator to combine strings so the sentence would read 
 * Ronny drives a really fast red toyota.
 * strings can also be manipulated through various methods when using Javascript 
 * this includes:
 * concat(),- joins more than one string together without damaging or changing the original string 
 * example: 
 * const array1 = ['a', 'b', 'c'];
 * const array2 = ['d', 'e', 'f'];
 * const array3 = array1.concat(array2);
 *
 *indexOf(), -It returns only the first occurrence of a word in a string
 * example:let text = "Hello world, welcome to the universe.";
 * text.indexOf("a");
 *lastIndexOf(), -method gives the index of the last occurrence of the specified word in the given string
 * example: let text = "Hello planet earth, you are a great planet.";
 * let result = text.lastIndexOf("planet");
 *charAt(), - finds a character in a specific place in a string 
  * example:let text = "HELLO WORLD";
 * let letter = text.charAt(0);
 *match(), -This method searches the string to match expressions and returns the result as an Array  Object.
  * example: let text = "The rain in SPAIN stays mainly in the plain";
 * text.match("ain");
 *replace(),- It searches the string for a specific value and then replaces it with the given value 
  * example:let text = "Visit Microsoft!";
 * let result = text.replace("Microsoft", "W3Schools");
 *split(), -It splits the string into an array of substrings and returns the new array.
  * example:let text = "How are you doing today?";
 * const myArray = text.split(" ");
 *splice(),- It simply cuts a specific part of the given string and returns the isolated part. It takes either one or two parameters,
  * example:const fruits = ["Banana", "Orange", "Apple", "Mango"];
 * fruits.splice(2, 0, "Lemon", "Kiwi");
 *length(), -returns the length of a given string (string length of a empty string is 0)
  * example:let text = "Hello World!";
 * let length = text.length;
 *substring(),-It takes two parameters, start and end, and returns the characters in these indexes  excluding the end character. 
  * example:let text = "Hello world!";
  *  let result = text.substring(1, 4);
 *search(),- It searches a word in the string and returns its index. It returns -1 when no match is  found
  * example: let text = "Mr. Blue has a blue house";
  * let position = text.search("Blue"); 
 *toUpperCase(),- uppercases the letters in a string 
  * example:console.log("alphabet".toUpperCase()); // 'ALPHABET'
 *toLowerCase(),- lowercases the letters in a string 
  * example:console.log("ALPHABET".toLowerCase()); // 'alphabet'
 *trim()-This method is used to remove all the whitespace characters (space, tab etc) from both sides of the string
  * example:const orig = "   foo  ";
  * console.log(orig.trim()); // 'foo'
 * There are many methods that you can use on a string but these are some of the more commom methods that one would use to get through a code 
 *  * example: 
 */