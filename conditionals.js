// It evaluated whether the vakue is trupe or false

//If statement: if the code has truthy value the code executes, if the code has falsy value code does not executes. staement should inside parenthesis

const isMailsent = true;

if (isMailsent) {
    console.log('Mail sent to recipient')
}    // it has true value, code executes


//Else statemt: the else can be added to if statement anf forms if-else statement. Code for else block executes only if statement falis

const isTaskCompleted = false;

if (isTaskCompleted) {
  console.log('Task completed');
} else {
  console.log('Task incomplete');
}                                             // code does not execute if it has false value


//Else if statement: if and else if block can check the condition after we can add extra  else to execute there is no condiion evalutes according to value of if and else if


var pH = 2;

if (pH < 7) {
  console.log("Acidic");
} else if (pH > 7) {
  console.log("Basic");
} else {
  console.log("Neutral");
}