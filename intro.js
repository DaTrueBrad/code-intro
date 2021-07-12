const readline = require('readline')

// console.log is a prebuilt function that prints a value to the console
console.log('Welcome Back,');

const firstName = "Brady ";
let age = 24;
var person = firstName + "aged " + age;
console.log(person);

const isCool = true;
let powerLevel = "over9000";
console.log(powerLevel)

// numbers
let x = 4;
let favNum = 42;
let favSqr = 42 * 42;
console.log(favSqr);

let favRobot = "Voltron";
let favDion = "Celine";

console.log(`${favRobot} would totally kick ${favDion}'s butt`);

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })  

reader.question("Enter a number to see if it's Adam's favorite", function(num){
    if (+num === 12){
        console.log("That's Adam's favorite!")
    } else {
        console.log("Womp womp thanks for playing")
    }
    reader.close();
});
