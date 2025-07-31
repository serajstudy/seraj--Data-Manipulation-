

//  part 1

const PI = 3.1415;
const radius = 5;
const spaceperPlant = 0.8;

const area = PI * radius * radius;
const maxPlants = area / spaceperPlant;


// 20 → 40

// let plants = 20;   

// // First week
// plants = plants * 2;
// console.log("Week 1 plants");

// if (plants > maxPlants * 0.8) {
//   console.log("Prune Plant control grow");
// } else if (plants >= maxPlants * 0.5) {
//   console.log("Monitor plants grow");
// } else {
//   console.log("Plant more");
// }




// Second Week  // 40 * 2 = 80

let plants = 40;

plants = plants * 2;
console.log("Week 2 plants");

if (plants > maxPlants * 0.8) {
  console.log("Prune Plant control grow");
} else if (plants >= maxPlants * 0.5) {
  console.log("Monitor plants grow");
} else {
  console.log("Plant more");
}


// // third week  // 80 * 2 = 160

// let plants = 80;

// plants = plants * 2;
// console.log("Week 3 plants");

// if (plants > maxPlants * 0.8) {
//   console.log("Prune Plant control grow");
// } else if (plants >= maxPlants * 0.5) {
//   console.log("Monitor plants grow");
// } else {
//   console.log("Plant more");
// }


