// var secretWordBaseMain = function (input) {
//   // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
//   var myOutputValue = 'hello world';
//   return myOutputValue;
// };

// var secretWordTwiceRowMain = function (input) {
//   // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
//   var myOutputValue = 'hello world';
//   return myOutputValue;
// };

// var secretWordXRowMain = function (input) {
//   // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
//   var myOutputValue = 'hello world';
//   return myOutputValue;
// };

//What is the objective match - we want to guess within 3 from random dice roll to win the game
// Breakdown problem to sub problem
// What  input do i have -user's input  & random dice roll
//what output do i need -indicate win or lose
// how can i get there - check if conditions are met (if dice roll is within 3 of user's input: +3 and -3)

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

//roll range function

var rollRange = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var randomDiceNumber = rollDice();
var range = rollRange();

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.

  console.log(range);
  //convert input to integer
  input = Number(input);

  //console log to know what data type
  // console.log(typeof input);
  if (randomDiceNumber >= input - range && randomDiceNumber <= input + range) {
    // if (randomDiceNumber <= input + 2) {
    //re-assign range with a new value rollRange
    range = rollRange();
    return `you roll ${randomDiceNumber} ,you guess ${input}. You win!`;
  }
  return `you roll ${randomDiceNumber} ,you guess ${input}. You lose.....`;

  //if (input==randomDiceNumber|| input==randomDiceNumber+1||input==randomDiceNumber+2||input==randomDiceNumber+3){
};

// var diceWithin2DiceMain = function (input) {
//   // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
//   var myOutputValue = 'hello world';
//   return myOutputValue;
// };

// var dice4DMain = function (input) {
//   // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
//   var myOutputValue = 'hello world';
//   return myOutputValue;
// };

// var secretWordTwice2Main = function (input) {
//   // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
//   var myOutputValue = 'hello world';
//   return myOutputValue;
// };
