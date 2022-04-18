// var introScopeMain = function (input) {
//   // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
//   var myOutputValue = 'hello world';
//   return myOutputValue;
// };

// try the global scope
// // global scope
// var globalVariable = 3;

// // also global scope
// const introScopeMain = function (input) {
//   // function scope
//   console.log(`globalVariable has a value of ${globalVariable}`);
//   // we can manipulate the value of a global varaible
//   // without having to re-declare using the var keyword:
//   globalVariable += 1;
//   console.log(`globalVariable now has a value of ${globalVariable}`);
//   let myOutputValue;
//   if (globalVariable % 2 == 0) {
//     // block scope
//     // we can access both myOutputValue and globalVariable within block scope
//     myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
//   } else {
//     myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
//   }
//   return myOutputValue;
// };

//roll dice function
var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

// initial bankRoll state
var bankRoll = 0;

const introScopeMain = function (input) {
  let randomDiceNumber = rollDice();

  let myOutputValue =
    "you lose. your guess doesn't match the dice no " +
    randomDiceNumber +
    " current bank roll: " +
    bankRoll;

  // change bankRoll state if the dice matches the randomDice
  if (randomDiceNumber == input) {
    console.log("===before add bankroll, it is ===", bankRoll);
    bankRoll = bankRoll + 1;
    console.log("===after add bankroll, it is ===", bankRoll);
    myOutputValue =
      "you win. your guess " +
      input +
      " matches the dice no " +
      randomDiceNumber +
      " so it adds 1 to your bank roll- current bankroll is " +
      bankRoll;
    return myOutputValue;
  }

  console.log(
    "dice number doesn't match input. so we do not add to state. it remains as " +
      bankRoll +
      " the dice number is " +
      randomDiceNumber
  );
  return myOutputValue;
};

//App setup exercise
// What is the objective -to display previous roll dice number
// Breakdown problem to sub problem
// What  input do i have - roll dice
//what output do i need - previous roll dice
// how can i get there - store the roll dice

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();

  var myOutputValue = "you lose";

  if (randomDiceNumber == input) {
    myOutputValue = "you win";
  }

  return myOutputValue;
};

var lastRollDice = 0;

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.

  if (lastRollDice == 0) {
    return "this is your first roll";
  }
  var lastRollDice = randomDiceNumber;
  return lastRollDice;
};

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// we set the initial state of mode
var mode = "green";

// depending on the input, we will toggle mode states between green/blue
var redModeMain = function (input) {
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  } else if (input == "redmode") {
    mode = "red";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  } else if (mode == "red") {
    myOutputValue = "red sea";
  }

  return myOutputValue;
};

// Write some pseudo code.
// What is the input going to be? random dice number
// What should the output be? logic compare of dice number vs input
// How will the computer's option be randomly generated? random dice number
// How many different cases are there? 
// The computer chose scissors ✂️.
// You chose paper 🗒.

You lose! Bummer.

Now you can type "scissors" "paper" or "stone" to play another round!