/* 
async keyword is used to write function that can handle asynchronous actions
we can add async logic inside function using async keyword
async function always return promises
we can promise .then and .catch with async function
1. if there is nothing returned from function it will return a promise with resolved value of undefined
2. if there is non-promise value returned from function it will return promise resolved to the value
3. if promise returned from function it will return a promise
*/
async function withAsync(num){
    if (num === 10){
        return 'zero';
      } else {
        return 'not zero';
      }
  }
  
  withAsync(100)
        .then((resolveValue) => {
    console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
  });

  //await keyword can be use inside the async function.
  //await is an operator.
  //untill a given promise is resolved await keyword pause
  
// async await promise
function helloworld() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('My name is joy');
        }, 2000)
    });
}

async function msg() {
    const msg = await helloworld();
    console.log('Message:', msg)
}

msg();
//promise.all when using async await multple asynchronous is running
//if we need value for each promise we can hanlde with promise.all

let promise1 = Promise.resolve(3);
let promise2 = 12;
let promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'foo')
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values);
});

//async function can be created using async keyword, async keyword refer befor function or ()

function helloworld() {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve('Hello jannet!');
        }, 2000);
    });
}

const msg2 = async function() { //Async Function Expression
    const msg = await helloworld();
    console.log('Message:', msg);
  }
   
  const msg1 = async () => { //Async Arrow Function
    const msg = await helloworld();
    console.log('Message:', msg);
  }
  msg();
  msg();