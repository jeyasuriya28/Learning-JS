 /*
 asynchrounous method dont wait for the other code to trum instead of that it will move on the next code
promise method are the objects that represent evantual outcome of an asynchronous operation.

pending: the initial state that operation not completed yet.
fulfilled: the operation has completed successfully and promise are now resolved value. a request that resolve with JSON object as its value.
rejected: the operation has failed and the promise has a resaon for the failure. the reason is usually error.

contructiong a promise object: 
to create a new promise object we should use new keyword
promise contructed method
The promise contructor method use function as a parameter called execution function  which runs hen the constructor is called.
executor function stars a asynchronous operation
*/

const foods = {
    dosa: 1000,
    poori: 500,
    chickenlegpiece: 400

};

const myExecutor = (resolve, reject) => {
    if(foods.dosa = 100) {
        resolve('dosa is available')
    } else {
        reject('dosa is not available')
    }
};

const orderfoods = () => {
    return new Promise(myExecutor)  //it is used contructed using new keyword which is promise contrucotr method
                                    // promise contructor method will run resolve and reject function to executor function
};                                  //executorFunction is paased to the constructor has two function as parameter resolve and reject.

const orderPromise = orderfoods() 
console.log(orderPromise)       

//node set time out function
/* set time is a Node API that provided by the browser
set timeout is used when call back function is schedule after some time
set time out has two parameters call back function and time
it is runs as asynchronous function that dont wait for other code to run
*/

const Hello = () => {
    console.log("Hi! iam jeya")
};
setTimeout(Hello, 2000);

console.log("I Want to became an entreprenour")

const name = () => {
    console.log("Iam 22 years old")
}
setTimeout(name, 2000)
console.log("Hii, Iam jeya suriya");
 
/* consuming promises: we can use .then() method
/* .then() is a higher order function it takes two callback function as arguement 
.then() always return a promises.


success and failure callback function
sucessful promise means promise that resolved.
we can invoke .then() ia a promise passing in success handler callback function
we should pass both success callback and failure callback function in .then method
*/

let prom = new Promise((resolve, reject) => {
    let age = 22;
    if (age < 20) {
        resolve('yes!');
    } else {
        reject('no')
    }
});
const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);

//promise.all() accepts an array of promises as it arguement and return single promises.
//if every promise inthe arguement array resolves the single promises return promise.all()
//if any promise from the arguement array rejects, the single promises return from promise.all rejects with any reason
// this refer to us failing fast

let first_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved First after 1 second");
    }, 1000);
})

let second_promise = new Promise((resolve))

//Using catch() with promises
/*  catch function handle with rejections
it takes one arguement onRejection

*/
let prom1 = new Promise((resolve, reject) => {
    let age = 22;
    if (age = 20) {
        resolve('yes!');
    } else {
        reject('no')
    }
});


prom1
   .then((resolvedValue) => {
    console.log(resolvedValue)
   })
   .catch((rejectionReason) => {
     console.log(rejectionReason)
   });

   //chaining multiple promises
  /* the process of chaining promises is known as composition.
  it used to return multiple async task usign .them method
  */
 
         let p = new Promise((resolve, reject) => {
             setTimeout(() => {
                 resolve(2);
             }, 3000); 
         });
 
         p.then((result) => {
             console.log(result);
             return result * 2;
         }).then((result) => {
             console.log(result); 
             return result * 2;
         }).then((result) => {
             console.log(result); 
             return result * 2;
         }).then((result) => {
             console.log(result); 
             return result * 2;
         });
     
  
//promise.all() 
const p1 = Promise.resolve(3);
const p2 = new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve(new Error('rejection'));
    }, 1000);
});

const p3 = new Promise(function (resolve, _reject) {
    setTimeout(() => {
        resolve('yes');
    }, 1000);
});

Promise.all([p1, p2, p3]).then(values => {
    console.log(values);
})

/* promise are javascript objects that returns async operation
promise are in three states pending , reject, resolved.
promise is settled either resolved or reject
we can contruct promise using new keyword and passing executor function to the promise constructor method
setTimeout function is used when we need delay in execution of callback function
.then() handles with success handler callback and it is used if promise is resolves
.catch() handles with failure handler callback function and it is used if promise rejected
*/

