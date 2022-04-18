//What is the objective convert fahrenheit to celsius
// Breakdown problem to sub problem
// What  input do i have fahrenheit
//what output do i need celsius
// how can i get there Celsius = (Fahrenheit-32) x 5/9

var fahrenheitToCelsiusMain = function (Fahrenheit) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var convertFahrenheitToCelsiusFormula = ((Fahrenheit - 32) * 5) / 9;
  return convertFahrenheitToCelsiusFormula;
};

//What is the objective calculate roadtrip cost
// Breakdown problem to sub problem
// What  input do i have roadtip distance in Km
//what output do i need roadtrip cost
// how can i get there 9 miles/litre of fuel & $2.20/litre.

//generic helper function to convert km to mile function
var convertKmToMile = function (distanceInKm) {
  var kmToMile = distanceInKm * 0.6214;
  return kmToMile;
};

// generic helper function to calculate fuel cost given any distance in miles
var calculateFerrariFuelCost = function (distanceInMiles) {
  var costDollarPerLitre = 2.2;
  var milesPerLitre = 9;
  fuelCost = (distanceInMiles / milesPerLitre) * costDollarPerLitre;
  return fuelCost;
};

// main function
var roadTripCostBaseMain = function (input) {
  var calculateRoadTripInMile = convertKmToMile(input);
  var calculateRoadTripCost = calculateFerrariFuelCost(calculateRoadTripInMile);
  var outputMsg = `Your total fuel cost for your ${input}km road trip is ${calculateRoadTripCost} dollars`;
  return outputMsg;
};

//old code- done in class
/*var roadTripCostBaseMain = function (roadtripLength) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var convertKmToMiles = tripLength * 0.6214;
  var calculateConsumption = convertKmToMiles / 9;
  var tripFuelCost = calculateConsumption * 2.2;
  var outputMsg = `Your total fuel cost of the road trip is ${tripFuelCost} dollars.`;
  return outputMsg;
};*/

//What is the objective calculate the savings in fuel cost by train vs. ferrari
// Breakdown problem to sub problem
// What  input do i have trip distance in km
//what output do i need fuel cost saving by train vs. ferrari
// how can i get there 9 miles/litre, ferrari $2.20/ litre vs. train $2/litre

// generic helper function to calculate fuel cost given any distance in miles
var calculateTrainFuelCost = function (distanceInMiles) {
  var costDollarPerLitre = 2.0;
  var milesPerLitre = 9;
  fuelCost = (distanceInMiles / milesPerLitre) * costDollarPerLitre;
  return fuelCost;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var calculateRoadTripInMile = convertKmToMile(input);
  var ferrariRoadTripCost = calculateFerrariFuelCost(calculateRoadTripInMile);
  var trainRoadTripCost = calculateTrainFuelCost(calculateRoadTripInMile);
  var roadTripCostSaving = ferrariRoadTripCost - trainRoadTripCost;
  var outputMsg = `You would have saved $${roadTripCostSaving} by travelling ${input}km by train instead of your Ferrari`;
  return outputMsg;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
