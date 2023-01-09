//higher order function: function can be passed into other function as parameter. 
//higher order function is a function that accepts function as parameter and returns function or both
//call back function : a functionthat passed as argiement in another function

//function as data: 
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};



const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes
isTwoPlusTwo();
console.log(isTwoPlusTwo.name);
  
  // functiona as param;

  const addTwo = num  => {
    return num + 2;                                      // num parameter
  }
  
  const checkConsistentOutput = (func, val) => {          // function and value parameter
    let checkA = val + 2;
    let checkB = func(val);
    return checkA === checkB ? func(val) : 'inconsistent results';  
  }
  
  console.log(checkConsistentOutput(addTwo, 10));            //arguement value addTwo, 10









  