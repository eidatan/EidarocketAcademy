// var followAlongMain = function (input) {
//   var myOutputValue = "";
//   var counter = 0;

//   // Continue the loop while counter is less than the input value
//   while (counter < input) {
//     // If counter is less than 5, add "yes" to output
//     if (counter < 5) {
//       myOutputValue = myOutputValue + "yes";
//       // Otherwise, add "no" to output
//     } else {
//       myOutputValue = myOutputValue + "no";
//     }
//     console.log(counter);
//     counter = counter + 1;
//   }
//   return myOutputValue;
// };

// var followAlongMain = function (input) {
//   var myOutputValue = "";
//   var counter = 0;

//   while (counter < input) {
//     // If counter is even, add "yes" to output
//     // The modulus (%) operator returns the remainder after division
//     // If a number divided by 2 equals 0, we consider it even.
//     if (counter % 2 == 0) {
//       myOutputValue = myOutputValue + "yes";
//       // Otherwise, add "no" to output
//     } else {
//       myOutputValue = myOutputValue + "no";
//     }
//     counter = counter + 1;
//   }

//   return myOutputValue;
// };

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

// var followAlongMain = function (input) {
//   var myOutputValue = "";
//   var counter = 0;
//   console.log(`(before) the counter is ${counter}`);
//   while (counter < input) {
//     // Roll dice inside the loop, generating a random dice roll each iteration
//     var diceRoll = rollDice();
//     // Add each dice roll to output
//     myOutputValue = myOutputValue + " " + diceRoll + " ";
//     console.log(`the diceRoll is ${diceRoll}`);
//     console.log(`my output value is ${myOutputValue}`);
//     // Increment counter at end of each iteration
//     counter = counter + 1;
//     console.log(`(after) the counter is ${counter}`);
//   }
//   console.log(`finally my output value is ${myOutputValue}`);
//   return myOutputValue;
// };

// var simpleLoopMain = function (input) {
//   var myOutputValue = "";

//   // Initialise the outer counter, rowCounter
//   var rowCounter = 0;

//   while (rowCounter < input) {
//     // Inside the outer loop, initialise the inner counter, columnCounter
//     var columnCounter = 0;

//     // Every time the outer loop runs, the inner loop runs repeatedly until
//     // the inner loop condition is met.
//     while (columnCounter < input) {
//       // Each time the inner loop runs, it adds "x" to output
//       myOutputValue = myOutputValue + "x";
//       columnCounter = columnCounter + 1;
//     }

//     // At the end of each outer loop, add a <br> tag to begin a new row
//     myOutputValue = myOutputValue + "<br>";
//     rowCounter = rowCounter + 1;
//   }

//   // After the outer loop has run to completion, return the output compiled
//   // by the above loops.
//   return myOutputValue;
// };

var simpleLoopMain = function (input) {
  var myOutputValue = "";
  var counter = 0;

  while (counter <= 6) {
    myOutputValue = myOutputValue + "hello";

    counter = counter + 1;
    console.log(counter);
  }
  return myOutputValue;
};

var loopWithinLoopMain = function (input) {
  //initialise outerLoopCounter and myOutputValue
  var outerLoopCounter = 0;
  var myOutputValue = "";

  // outerLoop looping based on user's input
  while (outerLoopCounter < input) {
    //initial innerLoopCounter per outer Loop
    var innerLoopCounter = 0;

    //nested innerLoopCounter that runs twice per outer loop
    while (innerLoopCounter < input * 2) {
      myOutputValue = myOutputValue + "hello";
      innerLoopCounter = innerLoopCounter + 1;
      console.log(
        `===innerLooopCounter when meet 'if'condition ${myOutputValue}===`
      );
    }
    console.log(`---This is outer Loop counter: ${myOutputValue} --`);
    //print each line <br> per outerloop
    myOutputValue += "<br>";

    outerLoopCounter = outerLoopCounter + 1;
  }
  return myOutputValue;
};

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
