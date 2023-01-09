//organizing and storing data
//Array can strore any tyoe of data 
// Each elements in a array has numbered posotion it can be identified as index

const food = ['biriyani', 'parotta', 'panner'];
console.log(food);

//Access elemnts: each element in a array has numbered position.
//it can be referred to as index no
//index no starts from 0 to 1
//Accessing element can be done by using index no to console
const day = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
console.log(day[3]);



//replacing element in the array can be done using index no 
const sports = ['football', 'cricket', 'tennis', 'soccer'];
sports[2] = 'kabadi';
console.log(sports);

//Updating elements
const name = ['joy', 'jannet', 'jeya', 'suriya'];
name[2] = 'Ram';
console.log(name);

//Arrays decalred using let and const keyword
// value assigned to the const keyword cannot be reassigned
// value assigned to the let keyword can be reassigned
// we can change the contents ao array using const keyword but we cannot reassign new array or different value


const condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'sauce'];
condiments[2] = 'Mayonise';
console.log(condiments);

let utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork']
utensils[1] = 'spoon';
console.log(utensils);


//Array and function, we can add new element to a array by using property method

const flowers = ['lilly', 'dafodil', 'sun flower'];

  function addflowers(arr) {
    arr.push('rose')
  }

  addflowers(flowers);
  console.log(flowers);



const dress = ['jeans', 'maxi', 'shrug'];

    function adddress(arr) {
        arr.push('gown')
    }

    adddress(dress);
    console.log(dress);


const juice = ['orange juice', 'apple juice', 'banana juice', 'strawberry juice'];

          function removejuice(arr) {
            arr.pop();
          }

          removejuice(juice);
          console.log(juice);


//nestedArray is defines as array inside an array

const nestedArr = [[1], [2, 3], [4, 5]];
console.log(nestedArr [2]);









