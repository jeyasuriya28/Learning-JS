 /*
 Function are statement that can be reusable and it is used to perform specific task or calculating value.
function can be passed one or more value that can be return a value at the end of the execution.
 to use function we should use function when we need to call it.
 */

//it can be declared using function keyword, name of function, list of parameters seperated by comma and enclosed by () and function body enclosed by {}.

function sum (number1, number2) {     // sum - name of function and number1 and number2 parameters
    console.log(number1 + number2);
}

sum(1,2);
/*
 calling function function declared follwed by function name and when function is called code inside parenthesis runs. Arguments value passed into function
 when its called
 */

function sum (no1, no2) {           // defining function
    console.log(no1 + no2);
}

sum(10,5);                         // argument value, calling function



/*Arrow function does ot require function keyword to seperate parameter from body. Arrwo function are concise (in short form)
Arrow function with single parameter does not require close bracket() around parameter list.
*/

//arrow function with single arguement
let checkWeight= (weight) => weight;
console.log(checkWeight(58));  

//arrow function with double arguement
 
let number = (no1,no2) => no1 + no2;
console.log(number(12,22));

//another short form if function has one argument

let result = n => n * 5;
console.log( result (2));

//if there is no arguement

let myname = () => console.log("joy");
myname();

//eg

greet = () => {
    console.log("Its a good day")
}

greet();


//eg function

function greetUser() {               // greetuser- function name
         
         let name = "joy";
         let msg = "Hello" + name + "I'm learning javascript!";                            // inside parenthses statement
        console.log(msg)
}

greetUser()                                                                                 // calling function


//eg using parameters and arguements

function greetuser(name) {                              // name- parameter
              let msg = "Hello" + name;  
              console.log(msg);                                 

}

greetuser("joy")                                       // arguement


//eg using two parameters and two arguements

function price(firstno, secondno) {
    let result = firstno * secondno
    console.log(result);
}

price(2, 200);

/* eg arrow function syntax

const functionA = (param1, param2, param3) => {

}

*/

const msg = (hello) => {                       // does not require function keyword and use => to seperate
                                                 // parameter from body
    console.log( `joy : ${hello}`);      
};

msg('hii');
        

//arrow function with double arguement
 
let number = (no1,no2) => no1 + no2;
console.log(number(12,22));

//another short form if function has one argument

let result = n => n * 5;
console.log( result (2));

//if there is no arguement

let myname = () => console.log("joy");
myname();

//eg

greet = () => {
    console.log("Its a good day")
}

greet();

//eg function

function greetUser() {               // greetuser- function name
         
         let name = "joy";
         let msg = "Hello" + name + "I'm learning javascript!";                            // inside parenthses statement
        console.log(msg)
}

greetUser()                                                                                 // calling function


//eg using parameters and arguements

function greetuser(name) {                              // name- parameter
              let msg = "Hello" + name;  
              console.log(msg);                                 

}

greetuser("joy")                                       // arguement


//eg using two parameters and two arguements

function price(firstno, secondno) {
    let result = firstno * secondno
    console.log(result);
}

price(2, 200);

/* eg arrow function syntax

const functionA = (param1, param2, param3) => {

}

*/

const msg = (hello) => {                       // does not require function keyword and use => to seperate
                                                 // parameter from body
    console.log( `joy : ${hello}`);      
};

msg('hii');

function greeting(name) {
console.log('hii' + name + 'you are amazing');
}
greeting('joy');

// default parameter is used whenever ther is no value to assigned to arguemnt or arguement value is undefined

function drinks (morning = 'coolsberg', afternoon = 'orange juice' , night = 'carrot juice') {
    console.log(`Morning I Drink ${morning}`)
    console.log(`afternoon I drink  ${afternoon}`)
    console.log(`night i drink ${night}`)
}

drinks();

//helper function function inside a function 

function monitorCount (rows, columns) {
    return rows * columns
}

function CostOfmonitor (rows, colunms) {
    return monitorCount(rows * colunms) + 20
}

const totalCost = CostOfmonitor (5,4) + 20
console.log(totalCost);


