
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles() {
// write a for loop that only goes to the 7th number of the #
// counter="#";
// for(let i =0; i < 7;i++){
// console.log(counter);
// counter+="#";
// }
 for(var i = "#"; i.length <= 7; i += "#")
 console.log(i);
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for ( var num = 1; num <= 100; num++)
  if (num % 3 == 0 && num % 5 == 0)
    console.log("FizzBuzz");
  else if (num % 3 == 0)
    console.log("Fizz");
  else if (num % 5 == 0)
    console.log("Buzz");
  else 
    console.log(num);
}

  


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard() {
  let size = 8;
  let nextLetter = ' ';  // Represents topmost left square
  let string = '';
  
  // Create a string of length (size^2 + size) characters depicting a chessboard pattern.
  for (let n = 1; n <= (size * size); n++) {
    string += nextLetter;
  
    // If a string has become `size` chars long, move to the new row;
    // Otherwise, alternate between ' ' & '#' based on the current value of nextLetter.
    if (n % size == 0) {
      string += '\n';
  
          // Perform another alternation of the value of nextLetter if size is an odd number,
          // to ensure that the new row starts with the letter opposite to the one in current row.
          if (size % 2 == 1) {
            nextLetter = (nextLetter == ' ')? '#': ' ';
          }
    }
    else {
      nextLetter = (nextLetter == ' ')? '#': ' ';
    }
  }
  
  console.log(string);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
