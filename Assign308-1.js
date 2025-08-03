



// // Total distance
// let distance = 1500; 

// // Fuel budget and  price
// let budget = 175; // in dollars
// let fuelPrice = 3; // per gallon

// let speed55 = 55; 
// let mpg55 = 30; 


// let gallons55 = distance / mpg55;
// let cost55 = gallons55 * fuelPrice;
// let time55 = distance / speed55;
// let budgetEnough55 = cost55 <= budget;


// tutor note

// Declaring Variables
// Arithmetic (Math) Operators
// Logical Operators - && || !
// Compairson Operators

// What do we know?
// Total distance = 1500
// Fuel Eff
//  // at 55 mph - 30mpg
//  // at 60 mph - 28mpg
//  // at 75 mph - 23mpg
//  // budget = 175
// Avg Fuel Cost = 3 per gallon

// What can we infer?

//  What do I need to find?
// // gallons needed for trip?
// // // fuel effeciency
// // // totalDistance
//  //  // return: number, gallonsPerTrip

// Is our budget enough?
//  //  // fuelCostPerGallon
//  //  // gallons needed (from first question)
//  //  // totalBudget
//  //  //  //  return: boolean, yes its enough or no its not enough

// How long will is take in hours?
//  // speed
//  // total distance
//  //  // return: number, hours each trip will take.

// Variables

// Constant Variables
const totalDistance = 1500;
const budget = 175;
const costPerGallon = 3;

// Other Variables
let speed = 55;
let mpg = 30;

// Find Total Fuel for Trip
const gallonsPerTrip = totalDistance / mpg;

console.log(
  `At ${speed}mph, you will need ${gallonsPerTrip} gallons of fuel, to travel ${totalDistance}`
);

// Is my budget enough?
const costPerTrip = gallonsPerTrip * costPerGallon; //Calculates total cost
console.log(
  `With a fuel effeciency of ${mpg}mpg, it would take ${gallonsPerTrip} gallons, which costs, $${costPerTrip}.`
);

const isBudgetEnough = budget >= costPerTrip; // compare to budget to let us know if we can afford
console.log(
  `With a budget of $${budget}, it is ${isBudgetEnough} that we can afford this trip. At that speed.`
);

// How long would this trip take?
const timeOfTrip = totalDistance / speed;
console.log(
  `At ${speed}mph it would take ${timeOfTrip}hrs to complete ${totalDistance} miles`
);