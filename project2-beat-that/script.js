// What is the objective? Comparison game of number based on rolled diced between two players
// Break down problem into sub-problems
// Each player goes thru the following
// stage 1 ) rollTwoDicesDisplayResult - roll two dices and display results
// stage 2) pickDiceOrderAsNumber - choose the order: dice 1 or dice 2 first to determine the number for the player
// stage 3) compareNumber - compare 2) between players. Bigger number wins
// What information do I have? 2 dice roll outcome
// What information do I need? player's choice of arrangement
// How can I get there? maths random and array to store player's arrangement.

// helper function to generate random number to act as dice roll
var generateRandomNumber = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var randomNumber = randomInteger + 1;

  return randomNumber;
};

var twoDicesArray = [];
// helper function to roll 2 dices and display
var rollTwoDicesDisplayResult = function () {
  twoDicesArray = [];
  var result = `Player number ${playerNumber} have rolled` + `<br>`;
  for (var numberOfDice = 1; numberOfDice <= 2; numberOfDice += 1) {
    twoDicesArray.push(generateRandomNumber());
  }
  console.log(`==see twoDicesArray is ${twoDicesArray}===`);
  result +=
    `dice (1) is ${twoDicesArray[0]}` +
    `<br>` +
    `dice (2) is ${twoDicesArray[1]}` +
    `<br>` +
    `please select 1 or 2 to determine the order. `;
  return result;
};

var choiceArray = [];
//helper function to store player's picked dice order as number
var pickDiceOrderAsNumber = function (choice) {
  if (choice == 1) {
    // //init choiceArray
    // var choiceArray = [];
    var number = Number(String(twoDicesArray[0]) + String(twoDicesArray[1]));
    choiceArray.push(number);

    //check if choiceArray has one or two entries, display the latest entry if two entries
    if (choiceArray.length != 1) {
      var shortChoiceArray = choiceArray[choiceArray.length - 1];
      return shortChoiceArray;
    } else {
      return choiceArray;
    }
  }
  if (choice == 2) {
    // //init choiceArray
    // var choiceArray = [];
    var number = Number(String(twoDicesArray[1]) + String(twoDicesArray[0]));
    choiceArray.push(number);

    //check if choiceArray has one or two entries, display the latest entry if two entries
    if (choiceArray.length != 1) {
      var shortChoiceArray = choiceArray[choiceArray.length - 1];
      return shortChoiceArray;
    } else {
      return choiceArray;
    }
  }
  if (choice != 1 && choice != 2) {
    var validationMsg =
      "Invalid entry- Only select 1 or 2. Press submit to roll dice again.";
    // go back to stage 1 to roll dice again
    gameStage = "stage1";

    console.log(`==see choiceArray: ${choiceArray}====`);

    return validationMsg;
  }
};

// helper function to check for player number
var checkPlayerNumber = function () {
  //check if it is player 1
  if (choiceArray.length == 0) {
    playerNumber = 1;
    console.log("!!! player1 now!!!");
  }
  //check if it is player 2
  if (choiceArray.length == 1) {
    playerNumber = 2;
    gameStage = "stage1";
    console.log(
      `!!! check player number: ${playerNumber} choiceArray length:${choiceArray.length} gameStage:${gameStage}!!!`
    );
  }

  //check if it is player 2
  if (choiceArray.length == 2) {
    playerNumber = 2;
    gameStage = "stage3";
    console.log(
      `!!! check player number: ${playerNumber} choiceArray length:${choiceArray.length} gameStage:${gameStage}!!!`
    );
  }

  return playerNumber;
};

// helper function to compare players' number
var comparePlayersNumber = function () {
  if (choiceArray[0] > choiceArray[1]) {
    return 1;
  }
  if (choiceArray[1] > choiceArray[0]) {
    return 2;
  }
  if (choiceArray[0] == choiceArray[1]) {
    return 1 & 2;
  }
};

// helper function to make input field appears/ disappear
var activateInputField = function () {
  if (gameStage == "stage1") {
    document.getElementById("input-field").style.display = "block";
  } else {
    document.getElementById("input-field").style.display = "none";
  }
};
//init to start game from stage 1
var gameStage = "stage1";

//init to start game from player 1
var playerNumber = 1;

//init to start game without input-field
document.getElementById("input-field").style.display = "none";

// main function
var main = function (input) {
  var displayInputField = activateInputField();
  //check if this is the start of game; stage 1
  if (gameStage == "stage1") {
    var playerNumber = checkPlayerNumber();
    var stageResult = rollTwoDicesDisplayResult();

    gameStage = "stage2";
    return stageResult;
  }
  // go to stage 2
  if (gameStage == "stage2") {
    var stageResult = pickDiceOrderAsNumber(input);

    //at stage 2, call function to check if choiceArray is filled & switch to player2
    var playerNumber = checkPlayerNumber();
    return `Okay, got it. The choice is ${stageResult}.`;
  }
  // go to stage 3
  if (gameStage == "stage3") {
    var stageResult = comparePlayersNumber();

    //reset game after getting stage 3 comparison results
    gameStage = "stage1";
    playerNumber = 1;
    choiceArray = [];
    console.log();

    return `Player ${stageResult} win! Press submit to restart.`;
  }
};
