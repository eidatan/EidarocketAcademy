// What is the objective? Comparison game of number based on rolled diced between two players
// Break down problem into sub-problems
// Player 1 and computer go thru the following
// stage 1 ) drawTwoCardsFromMakeDeck - take two cards and sum up to display
// stage 2) compareNumber - ask player 1 if want to hit or stand, if computer > 21, burst?
// What information do I have? makeDeck cards
// What information do I need? player 1 choice to stand or hit
// How can I get there? makeDeck

var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["hearts", "diamonds", "clubs", "spades"];

  // Loop over the suits array
  for (var i; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
      } else if (cardName == 12) {
        cardName = "queen";
      } else if (cardName == 13) {
        cardName = "king";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      // Add the new card to the deck
      cardDeck.push(card);
      console.log(`${cardDeck}`);

      return cardDeck;
    }
  }

  // Return the completed card deck
  return cardDeck;
};

var drawTwoCards = function () {
  for (var numberOfCards = 0; numberOfCards < 2; numberOfCards += 1)
    var drawCardsAndDisplay = makeDeck();
};
//init to start game from stage 1
var gameStage = "stage1";

var main = function (input) {
  if ((gameStage = "stage1")) {
    var results = drawTwoCards();
  }

  return results;
};
