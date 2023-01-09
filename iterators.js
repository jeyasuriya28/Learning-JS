//forEach method: repeats same code for each element of array

// const name = ['joy', 'jannet', 'jeya', 'suriya']

// name.forEach(name => console.log(`I am ${name}`));


//map method: it takes a arguement of callback function and returns new array

// const Number = [1, 2, 3, 4, ,5, 6]

// const newNumber = Number.map(Number => {
//     console.log( Number * 2)
// })

// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];



// const secretMessage = animals.map(animal => animal[0]);
// console.log(secretMessage.join(''));


//filter method: it returns a new array after filtering the certain elements from original array.it also executes tru or false statement

// const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// const smallNumber = randomNumbers.filter(num => {
//     return num > 300
// })


// const niceWords = ['hello', 'hii', 'good', 'better'];

// const newWords = niceWords.filter(words => {
//     console.log(words > 7)
// })

//findIndex 

// const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// const foundAnimal = animals.findIndex(animal => {
//  console.log(animal === 'elephant')
// })

// const startsWithS = animals.findIndex(animal => {
//   console.log(animal[0] === 's' ? true : false)
// });


// .reduce() : returns single value after iterating through elements of array.
// The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element

const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
 
console.log(summedNums)

//Array.prototype.at() it finds an element based on the index number

const array1 = [90, 78, 56, 45, 12];

let index = 4;

console.log(`Number in posotion of ${array1.at(index)}`);

const colors = ['Red', 'pink', 'yellow', 'orange', 'green'];
const colorPosition = colors.at(1);
console.log(colorPosition);

//copywithin method copies the element of the array to another location to the same array
// syntax: copyWithin(target, start, end)

const fruits = ['apple', 'mango', 'berry', 'orange'];

console.log(fruits.at(0, 3, 4));



//entries method: it returns a new array that return key value based on the index of each elemnt on array

const element = [1, 2, 3, 4, 5];
const iterator = element.entries()
console.log(iterator.next().value)

//every method: returns a beelean value. it implements whether all elements in the array all equavalent ot the provided function

const elements = (currentvalue) => currentvalue < 30
const array = [1, 2, 4, 23, 12];
console.log(array.every(elements));

//fill method: fill method fill all elements in a array with specific statis value.
//syntax: arr.fill(value[, start[, end]])  

const array2 =  ['birds', 'sweets', 'shakes', 'cookies'];
console.log(array2.fill('biscuits', 1));   

//filter method: filter the given array on provided function and returns a array

const words = ['i', 'love', 'to', 'travel']

const findWords = words.filter(words => words.length < 5);
console.log(findWords);

//find method: it returns the first element of array that satisfoes the given function

const no1 = ['1', '2', '23', '65', '12'];
const findno1 = no1.find(no1 => no1 > 5);
console.log(findno1);

//findLast: method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

// const array3 = [5, 12, 50, 130, 44];

// const found = array3.findLast(array3 => array3 > 50);

// console.log(found);                                                              //error

//findLastIndex iterates the array in reverse order and return the first element of the array with specified function

// const array4 = [23, 34, 12, 12, 23]
// const foundd = array4.findLastIndex(array4 => array4 > 20);
// console.log(foundd);

//Array.from method: returns new array from iteratable object


console.log(Array.from('jeya'));


//flat method returns new array with all concated elements

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat(2));

//Array.join  method retursn new string by concatening all elements in a array

const arr2 = ['foo', 'boo', 'doo'];
console.log(arr2.join());

//Array.key method returns new array iterator object that returns index no of array

const arr3 = [1, 2, 3, 4];
const iteratorr = arr3.keys();
for (const key of iteratorr) {
    console.log(key);
  }
  
