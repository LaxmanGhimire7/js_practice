//1. operation

//a.
var a = 10;
var b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//b.
let x = 5;
x /= 3;

console.log(x);

//c.
let count = 3;
count--;
console.log(`The answer for count is ${count}`);

//d.
console.log(5 == "5");
console.log(5 === "5");

//e. Check if 10 is greater than 5, less than 20, and equal to 10.

console.log(10 > 5);
console.log(10 < 20);
console.log(10 === 10);

//f.Try logical AND and OR  true && false  true || false   !(true)

console.log(12 < 30 && 12 === 12);
console.log(`Logical OR shows :${1 === 5 || 1 === 1}`);
console.log(`NOT: ${!false}`);

//g.  Predict the result of:
console.log(3 > 6);

//H. Bitwise (light intro): this is do in todays class

//2. Variable Hoisting in JavaScript

//a. Predict output of:

console.log(c);
var c = 12; // undefined

//b.
// console.log(d);
// let d= 4;     // reference error cant declare before initialization

//c.
test();
function test() {
  console.log("Hell0 world!");
}

//d.
// hello()
//  var hello = function() { console.log("Hi") }

//3. Conditional Operators (if, else, else-if, ternary, switch)

// a. Take input using prompt for age.
//  If age > 18  log “Adultˮ.
//  Else → log “Minorˮ

let data = prompt("Write your age..");
if (data > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//b. Write a program:
//  If marks >= 90 -> “A gradeˮ
//  Else if marks >= 75 -> “B gradeˮ
//  Else if marks >= 50 -> “C gradeˮ
//  Else → “Failˮ

let marks = prompt("Write your marks");
if (marks >= 90) {
  console.log(`You got ${marks} so your grade is A.`);
} else if (marks >= 75) {
  console.log(`You got ${marks} so your grade is B.`);
} else if (marks >= 50) {
  console.log(`You got ${marks} so your grade is C.`);
} else {
  console.log("Fail.");
}

//c. Create a variable city = “Bhopalˮ.
//  If city is “Bhopalˮ → log “MPˮ
//  Else if city is “Delhiˮ → log “Capitalˮ
//  Else → log “Unknown Cityˮ

let city = "Bhopal";

if (city === "Bhopal") {
  console.log("MP");
} else if (city === "Delhi") {
  console.log("Capital");
} else {
  console.log("Unknown City");
}

//d. Use ternary operator:
//  Let score = 40.
//  If score > 35 -> “Passˮ else “Failˮ using a ternary.

let score = 40;

let result = score > 30 ? "Pass" : "Fail";

console.log(result);

//e.  Convert this if-else into a ternary:
//  if (temperature > 30) { “Hotˮ } else { “Pleasantˮ }

let temperature = 32;

let output = temperature > 30 ? "Hot" : "Pleasent";
console.log(output);

//F.  Write a switch case:
//  Take day number (1 to 7).
//  Print the day name.
//  Default case: “Invalid Dayˮ.

let day = "Monday";
