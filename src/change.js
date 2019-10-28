const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

const Q =0.25;
const D =0.10;
const N =0.05;
const P =0.01;

const Tqcr = (MAX%Q);
const Tdcr = (Tqcr%D);
const Tncr = (Tdcr%N);
const Tpcr = (Tncr%P);

if (Number.isNaN(amount)) {
console.log('invalid'); // print your error message here
} else if (amount < MIN || amount > MAX) {
console.log('invalid');    // print your error message here
} else {
    // write your code for making change here
}

console.log("d" + Q + D + N + P + "nnn")
