const ReadlineSync = require("readline-sync");
const Number1= ReadlineSync.question('\nEnter three numbers. \n');
const Number2= ReadlineSync.question();
const Number3= ReadlineSync.question();

if (Number.isNaN(Number1)) {
    console.log("\nInvalid.");
}

else if (Number1 == Number2 || Number2 == Number3) {
    console.log("\nEqual.");
}

else if (Number1 - Number2 == Number2 - Number3 || Number3 > Number2 || Number2 > Number1) {
  console.log("\nStrictly increasing");
}

else if (Number1 < Number2 || Number2 < Number3) {
  console.log("\nIncreasing.");
}

else if (Number3 - Number2 == Number2 - Number1) {
  console.log("\nStrictly decreasing.");
  }

else if (Number1 > Number2 || Number2 > Number3) {
  console.log("\nDecreasing");
}

else {
 console.log("\nUnordered.");
}
