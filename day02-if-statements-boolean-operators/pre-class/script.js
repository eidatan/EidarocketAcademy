//What is the objective calculate the number of oranges required to make OJ for all guests
// Breakdown problem to sub problem
// What  input do i have no. of guest
//what output do i need # of oranges
// how can i get there 4 oranges to make 1 glass of OJ. 1 guest drink X glasses of OJ.

//generic helper function to calculate the number of oranges required
var calculateNumberOfOrange = function (numberOfGuest) {
  var numberOfOrangesToMadeOneGlass = 4;
  var numberOfOrangesForGuest = numberOfGuest * numberOfOrangesToMadeOneGlass;
  return numberOfOrangesForGuest;
};

/*generic helper function to calculate number of oranges given consumption
var consumptionPerGuest = function (averageGlassesPerGuest) {
  var averageNumberOfGlassPerGuest = ;
};*/

// main function to calculate number of oranges required based on number of guests + consumption per guest
var orangeJuiceMain = function (guest, consumptionPerGuest) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var numberOfOrangesNeededForParty =
    calculateNumberOfOrange(guest) * consumptionPerGuest;
  return numberOfOrangesNeededForParty;
};

var paintMain = function (input) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

//roll dice function
var rollDice = function (number) {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var randomDiceMain = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();

  // Personalise the output
  var myOutputValue = "Hello, You just rolled a " + randomDiceNumber + "!";

  // Return and print output.
  return myOutputValue;
};

// = assignment
// == check if equal
var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  var myOutputValue = "wrong fruit! ";
  if (input == "apple") {
    var myOutputValue = `congrats, you guess the right fruit! it is ${input}`;
  } else if (input == "orange") {
    var myOutputValue = "try again, that's a close guess!";
  } else {
    return (myOutputValue += " give it a try again.");
  }
  return myOutputValue;
};

/*first exercise
var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue = `you lose! your input of ${input} is different from computer generated number${randomDiceNumber} `;

  if (input == randomDiceNumber) {
    var myOutputValue = `you win! your input of ${input} is the same as computer generated number${randomDiceNumber}`;
    console.log(rollDice);
  }
  return myOutputValue;
};
*/

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue = `you lose! the computer generated number${randomDiceNumber} is not twice your input ${input} `;

  if (input == randomDiceNumber / 2) {
    var myOutputValue = `you win! the computer generated number${randomDiceNumber} is twice your input ${input}`;
  }

  return myOutputValue;
};

/*dice game 1
var diceGameMain = function (input) {
  var randomDiceNumber = rollDice();
  var myOutputValue = "wrong guess";

  if (
    input == randomDiceNumber ||
    input == randomDiceNumber + 1 ||
    input == randomDiceNumber - 1
  ) {
    var myOutputValue = `you win! your input of ${input} is the equal or 1 difference as computer generated number${randomDiceNumber}`;
  } else if (input !== randomDiceNumber) {
    return (myOutputValue += " don't give up! ");
  }

  return myOutputValue;
};*/

//dice game 2
var diceGameMain = function (input) {
  var randomDiceNumber = rollDice();

  var myOutputValue = "wrong guess";
  var difference = input - randomDiceNumber;
  console.log("difference is" + Math.abs(difference));
  if (Math.abs(difference) <= 2) {
    var myOutputValue = `you win! your input of ${input} is the within 2 of the computer generated number${randomDiceNumber}`;
  } else {
    return (myOutputValue += " don't give up! ");
  }

  return myOutputValue;
};
