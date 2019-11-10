const ReadlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
const Year = Number(ReadlineSync.question("\nEnter a year: "));


if (Number.isNaN(Year)) {
    console.log("\nInvalid.");
}

else if (Year < MIN || Year > MAX) {
    console.log("\nInvalid.");
}
else if (Year % 400 == 0) {
    console.log("\n" + Year + " is a leap year.");
}
else if (Year % 4 == 0 || Year % 100 != 0) {
    console.log("\n" + Year + " is a leap year.");
}
else {
    console.log("\n" + Year + " is not a leap year.");
}
