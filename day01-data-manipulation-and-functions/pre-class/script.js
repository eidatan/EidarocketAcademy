var main = function (input) {
  //define radius
  var radius = 4;

  //define area of a circle
  var area = 3.142 * radius ** 2;

  //Convert area to be area
  var myOutputValue = area;

  // return area
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.

  // combine string and user input to generate output
  var myOutputValue = "Hello " + input + ", thanks for your input!";
  return myOutputValue;
};

// define input as a function named metricMain
var metricMain = function (input) {
  //define input as km
  var distanceInKm = input;

  //convert km into mile
  var convertKmToMile = distanceInKm * 0.62;
  console.log("hello");

  //display converted mile as output
  var myOutputValue =
    "You have travelled " +
    convertKmToMile +
    " miles, which is equivalent to " +
    input +
    " km.";
  return myOutputValue;
};

// Setup converKmToMile function
var convertKmToMile = function (distanceInKm) {
  //convert km into mile and return as result
  var distanceInMile = distanceInKm * 0.62;

  return distanceInMile;
};

// Call convertKmToMile from main function
var functionsExampleMain = function (input) {
  var myOutputValue = convertKmToMile(input);
  return myOutputValue;
};

//function to calculate train 2 Speed to Tokyo
var trainSpeedMain = function (input) {
  //calculate distance to Tokyo
  var train1TimeToTokyo = 2;
  var train1SpeedTokyo = 200;
  var calculateDistanceToTokyo = train1SpeedTokyo * train1TimeToTokyo;

  //calculate time to Tokyo given the delay in input
  var train2TimeToTokyo = train1TimeToTokyo * 60 - input;

  // calculate and display speed to Tokyo
  var calculateTrain2Speed =
    (calculateDistanceToTokyo / train2TimeToTokyo) * 60;

  var myOutputValue =
    "Train 2 needs to travel at " +
    calculateTrain2Speed +
    "kph to arrive at the same time as Train 1 because Train 2 is delayed by " +
    input +
    " mins";
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
