// variables used to store data. we can use let, var keyword.we can change value for variables. variable must contail letter, digits or $ and _. first char must should not be digit.
//if the variable has multiple words, we can use camelcase

let message;
message = 'good mrg';
console.log(message);  // declare var with name message

let user = 'John';
let age = 25;
let greeting = 'Hello';

console.log(user, age, greeting);

// declare two variables and copy data from one into the other.
let hello = 'Hello world!'; 

let hi;

// copy 'Hello world' from hello into other variable hi
hi = hello;

// two variables has same data
console.log(hello); 
console.log(hi); 


// we can use unchanging variable const. value for constans cannot be re assigned.

const COLOR_RED = "1";
const COLOR_GREEN = "2";
const COLOR_BLUE = "2";
const COLOR_ORANGE = "3";

let color = COLOR_ORANGE;
console.log(color); 