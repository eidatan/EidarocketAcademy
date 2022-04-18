//What is the objective match -guess with computer's 2 dices result
// Breakdown problem to sub problem
// What  input do i have -guess number
//what output do i need -indicate win or lose
// how can i get there - check if conditions are met (One of the dice roll matches their guess, or If the total dice roll is 11.)

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

//main function for base in-class exercise
var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var userInput = input;

  var computerDice1 = rollDice();
  var computerDice2 = rollDice();
  var totalOfTwoDices = computerDice1 + computerDice2;

  console.log("your dice 1 is", computerDice1, "your dice 2 is", computerDice2);
  console.log("total dice value is", totalOfTwoDices);

  if (input == computerDice1 || input == computerDice2) {
    return "you've guessed one of the dice roll correctly";
  }
  if (computerDice1 + computerDice2 == 11) {
    return "the total dice adds up to 11";
  }
  return "pls try again";

  /*var myOutputValue = "hello world";
  return myOutputValue;*/
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
