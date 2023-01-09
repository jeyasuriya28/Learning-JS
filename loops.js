// For loop indicates iteratable value
//it contan=ins expression seperated by ;

//it contains three iteratabla value they are initialization, stopping condioton, iterator statement 

for (number = 5; number < 10; number ++){
    console.log(number);
}

//while loop it is executed untill the specified condition evalutes to true, oop will continue to run until the condition evaluates to false.
//eg
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}



let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

let j = 4;

while (j < 6) {
    console.log(j);
    j++
}

// do while loop checks if a condition is true, and then repeats the loop as long as the condition is true.he loop ends when the condition evaluates to false. it runs untill soecific condition no lond=ger met.
// syntax

let countString = '';
let a = 0;
 
do {
  countString = countString + i;
  a++;
} while (a < 5);
 
console.log(countString);


x = 0;
y = 0;

do {
    x = x + y;
    console.log(x);
    y++;
} while (y < 5);

//for of loop A for...of loop iterates over an object’s values

// const item = ['apple' , 'banana', 'cherry']

// for (const item of item) {
//     console.log(item);
// }

// for in loop loop iterates over any object with string type keys and allows for access to the values by index-reference.

const shoppingCart = { banana: 2, apple: 5, cherry: 0 };

for (const fruit in shoppingCart) {
    console.log(shoppingCart[fruit]);
  }


  //reverse loop: for which we can make it no to the reverse order
  // initilization number is set to be stopping no
  //stopping condition to the stopping number in the middle
  //iterator should decrese

  for(let counter = 5; counter >= 0; counter--) {
    console.log(counter);
  }


  //Loop through arrays: for loop through arrays we can use length.propeety method
  // as every element in the array has index number

  const cities = ['Ny', 'W .dc', 'Ls']

  for(let i = 0; i < cities.length; i ++) {
    console.log('I would love to visit ' + cities[i])
  }


  // nested loop is loop inside another loop it is used to compare tw0 elements pf array


  const name1 = ['joy', 'jannet', 'jeya', 'suriya'];
  const name2 = ['Harish', 'Vaishnavi', 'Manoj', 'Arjun'];
  const name3 = [''];

  for (i = 0; i < name1.length; i++){
    for (j = 0; j < name2.length; j++){
        if(name1 === name2){
            console.log(name3.push(name1[i]));
        }
    }
  };

  //break Keyword allows programs to “break” out of the loop from within the loop’s block
  
  const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];


for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");

