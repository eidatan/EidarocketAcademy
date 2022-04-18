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

//Objective store guesses into array
// What is the input going to be? user's input & random dice roll
//what output do i need -indicate win or lose & store all user inputs
// how can i get there - check if user input same as dice roll & store guesses into array

var guesses = [];
var outputMsg = "";

var followArraysMain = function (input) {
  var randomNumber = rollDice();

  guesses.push(input);

  if (input == randomNumber) {
    outputMsg = `correct guess! you guessed ${input} vs. comp's guess ${randomNumber},and previous guess was ${guesses}`;
  } else {
    outputMsg = `wrong guess... you guessed ${input} vs. comp's guess ${randomNumber}, and previous guess was ${guesses}`;
  }

  return outputMsg;
};

// // Store guesses in a global array that persists across Submits.
// var guesses = [];

// var followArraysMain = function (input) {
//   // Add the user's guess to the guesses array.
//   guesses.push(input);

//   // Generate a random dice number.
//   var randomDiceNumber = rollDice();

//   // Initialise output to communicate loss.
//   // Output the record of all guesses regardless of loss or win.
//   var myOutputValue = "You lose. Your guesses: " + guesses;

//   // If the guess matches the dice roll, change output to communicate win.
//   if (randomDiceNumber == input) {
//     myOutputValue = "You win. Your guesses: " + guesses;
//   }
//   // Return output value.
//   return myOutputValue;
// };

//
// // Initialise an empty names array
// var names = [];

// var followArraysLoopsMain = function (input) {
//   // Set a boolean value found to a default value of false
//   var found = false;

//   // Loop over the names array, and set found to true if the input name already
//   // exists in the names array
//   var index = 0;

//   for (var index = 0; index < names.length; index += 1) {
//     var currentName = names[index];
//     if (currentName == input) {
//       found = true;
//     }
//   }

//   // If no duplicate name was found, add the input name to the names array
//   if (!found) {
//     names.push(input);
//   }

//   // Return the full array of names
//   var myOutputValue = "All names: " + names;
//   return myOutputValue;
// };

//Objective store store unique names into array
// What is the input going to be? user's input of names
//what output do i need - names in address book if unique, otherwise tell user not unique
// how can i get there - check if names inside array

var names = [];

var followArraysLoopsMain = function (input) {
  var duplicateName = false;

  for (index = 0; index < names.length; index += 1) {
    if (input == names[index]) {
      duplicateName = true;
      var outputMsg = `paiseh, cannot store. duplicated name leh.` + "<br>";
    }
  }
  if (duplicateName != true) {
    names.push(input);
    var outputMsg = `The name: ${input} is stored into address book.` + "<br>";
  }
  outputMsg += `These are all the entries ${names}`;
  return outputMsg;
};
