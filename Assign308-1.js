



// Total distance
let distance = 1500; 

// Fuel budget and  price
let budget = 175; // in dollars
let fuelPrice = 3; // per gallon

let speed55 = 55; 
let mpg55 = 30; 


let gallons55 = distance / mpg55;
let cost55 = gallons55 * fuelPrice;
let time55 = distance / speed55;
let budgetEnough55 = cost55 <= budget;