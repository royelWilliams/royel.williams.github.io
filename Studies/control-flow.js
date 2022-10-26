/**
 * CONTROL FLOW 
 * control flow is Code is run in order from the first line in the file
 *  to the last line, unless the computer runs across the (extremely frequent) structures 
 * that change the control flow, such as conditionals and loops.
 * 
 * IF STATEMENTS:
 * The if statement is the fundamental control statement that allows JavaScript to make 
 * decisions and execute statements conditionally.
 * we use if statements usually to compre to items and return something weather it
 *  be true or false or a value 
 * It is important to go through all of the posibilities and return all of them so if 
 * multiple things are true it would be best to put them in the else statement rather than
 *  the first if statement. 
 * example:
 * if (expression) {
 *  Statement(s) to be executed if expression is true
 * }
 * 
 * ELSE -IF STATEMENTS 
 * Use "else if" condition when you want to apply second level condition after if statement.
 * you can use them when there is more than one thing that has to be found/ determined  they can 
 * also be used to specify a new condition to test, if the first condition is false
 * example:
 * if(condition expression)
 * {
 *   //Execute this code block
 * }
 * else if(condition expression){ 
 *   //Execute this code block
 * }
 *
 * ELSE STATEMTNTS:
 * else statements would be the last result and how to end a code. 
 * Use else statement when you want to execute the code every time when if condition evaluates to false.
 * The else statement must follow if or else if statement. 
 * Multiple else block is NOT allowed.The else is the last thing that should be in a if else code block 
 * example:
 * if (condition1) {
 * // block of code to be executed if condition1 is true
 * } else if (condition2) {
 *  // block of code to be executed if the condition1 is false and condition2 is true
 * } else {
 *  // block of code to be executed if the condition1 is false and condition2 is false
 * }
 * 
 * SWITCH STATEMENTS:
 * similar to a if else statement a switch statement also goes through values and returns answers
 * The switch expression is evaluated once.
 * The value of the expression is compared with the values of each case.
 * If there is a match, the associated block of code is executed.
 * If there is no match, the default code block is executed.
 * break:
 * When JavaScript reaches a break keyword, it breaks out of the switch block
 * This will stop the execution inside the switch block.
 * It is not necessary to break the last case in a switch block
 * However if you do not break the next case will be executed even if the evaluation 
 * does not match the case.
 * default:
 * The default keyword specifies the code to run if there is no case match
 * example:
 * switch(expression) {
 * case x:
 *   // code block
 *   break;
 * case y:
 *   // code block
 *   break;
 * default:
 *   // code block
 * }
 */