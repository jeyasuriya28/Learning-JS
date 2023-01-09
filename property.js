/* all data type has access to some property type. 
Every string has .length property which counts the no of charecter in the word.
*/

//eg

console.log('joy'.length);


//types of property 

//.charAt() it returns single chrecter of the string according to index

//syntax: String.charAt(index);

const greeting = 'Hello joy';

const lastLetter = greeting.charAt(8);

console.log(lastLetter);


const name = 'joy jannet';

const lastletter = name.charAt(name.length - 1);

console.log(lastletter);


//.concat() it combines string together

//syntax: string.concat(string1, string2, string3);

console.log( "Hey joy".concat( 'Do you like travelling'));


//concat using variables

let x = 'To';
let y = 'Adventure';

console.log("I like".concat(' ' + x + ' '+ y));



//includes() it returns true or false value. it returns true if the given value is included in string or if its not it return false

//syntax: string.includes(value, index=1);
/* it check for case sensitive value
 if the index() is greater than string it will provoide false
 if the index in less than or equal to 0, entire string will be searched
 */

 const msg = "jeya";

 console.log(msg.includes('suriya'));


 const person = 'Harish Gnanesekaran';

 console.log(person.includes('Harish'));


 const myname = "joyjannet";

 console.log(myname.includes('t', index = 8));              


 const myage = 'Twentytwo';
 console.log(myage.includes('twentytwo'));                   //case sensitive


 const today = 'friday';
 console.log(today.includes('y', index = 6));                 // index not in the string


 //seaeches for a given value, and returns the first index it its found

 //syntax: string.indexof(value, startsearch);


 const twinkletwinkle = `Twinkle twinkle little star`;

 const capturelittle = twinkletwinkle.indexOf('little');
 console.log(capturelittle);


 //finding occurence

 const rhyme = 'batter, batter, few batter, batter';

 const firstbatter = rhyme.indexOf('batter');
 console.log(firstbatter);


 //it returns -1 if its not found



const people = ['joy' , 'jeya'];

const didYouFindjannet = people.indexOf('jannet');

console.log(didYouFindjannet);


//length() property returns no of charecters in a string
//syntax: string.length

console.log('Newyork'.length);

const places = 'America';
console.log(places.length);



//repeat() it repeates the string to number of specified times
//syntax: string.lenght

const quotes = 'A friend innedd is a friend indeed';
console.log(quotes.repeat(3));


//replace() it search for string value and returns new string where matches are replaced
//syntax: string.replace(searchValue, replacementValue);

const weather = 'Its will be rain today';
const replacesunnywithrain = weather.replace('rain', 'sunny');
console.log(replacesunnywithrain);


//replace all instance

const script = 'Let go outiside today';                               // use global modifier

const todayNotTomorrow = script.replace(/today/g, 'Tomorrow');
console.log(todayNotTomorrow);



//search() regular expression argument and returns either the character position of the start of the first matching substring or -1 if there is no match.
//syntx: string.search(regularExpression);

const ProgrammingLanguage = 'JavaScript';
console.log(ProgrammingLanguage.search(/JavaScript/i));        //search the string and returns position of the value

const Program = 'javascript';                                  // return -1 if no match found
console.log(Program.search(/python/));



//slice() it returns value of the string according to the index passed as a arguement
//syntax: string.slice(start)
//syntax: string.slice(start, end)
const milkshakes = ['rosemilk', 'strawberry', 'chocalate', 'rasamalai', 'badammilk'];
console.log(milkshakes.slice(2));



//split() returns new array by given value of seperator and linit based on index no
//String.split(separator, limit);
const fruits = 'apple, banana, mango, strawberry';
console.log('Limited to 2 elements:', fruits.split(', '));




//startWith() The .startsWith() Python string method checks whether a string begins with the specified characters. It will only return a boolean value, either true or false.
//syntax: string.startsWith(substring, position);        substring is charecter ans position starts with o

console.log('Do you prefer coffee or tea?'.startsWith('you'));

console.log('Do you prefer coffee or tea?'.startsWith('you', 3));


//substring Return a part of a string from a given starting index or between start and end index. 
//syntax: string.startWith(startIndex, endIndex)

console.log('Do you love JavaScript or Python?'.substring(3, 22));


//LowerCase() .toLowerCase() method converts a string to lowercase letters in JavaScript.
//syntax: string.Lowercase()

console.log('HELLO WORLD'.toLowerCase());


//trim() Remove existing whitespace from both ends of a string.
//syntax: string.trim();

console.log('  Hello World   '.trim());

//Valueof() stringObject.valueOf();

const nam = new String('Bill');
console.log(nam);
console.log(nam.valueOf());









