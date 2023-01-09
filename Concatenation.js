// +  operator used on two strings, it appends right string to left string.
//  we need to put space at end of the first string so that we can have space inbetween two strings

console.log('joy' + 'jannet');

console.log('Hello' + ' ' + 'World');

console.log('Hello' + ', ' + 'World');


//Interpolation is an process evaluating string iterals that contin one or more expression or variable. it can be done
//using template literals (text ${expression} text)

// string literals is an zero or more charecter that is enclosed with single or double quotion mark

let name = "joy";


console.log(`My name is ${name}`);

// difference between concatenation and interpolation

let age = 22;

console.log( 'My' + ' ' + 'age' + ' ' + 'is' + ' ' +  age); // concatenation

console.log( `My age is ${age}`); // interpolation