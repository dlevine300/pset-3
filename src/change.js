const readlineSync =require("readline-Sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

const Qv =0.25;
const Dv =0.10;
const Nv =0.05;
const Pv =0.01;

const Tqcr = (amount%Qv);
const Tdcr = (Tqcr%Dv);
const Tncr = (Tdcr%Nv);
const Tpcr = (Tncr%Pv);

const Q =Math.floor(amount/Qv);
const D =Math.floor(Tqcr/Dv);
const N =Math.floor(Tdcr/Nv);
const P =Math.ceil(Tncr/Pv);


if (Number.isNaN(amount)) {
console.log('invalid'); // print your error message here
} else if (amount < MIN || amount > MAX) {
console.log('invalid');    // print your error message here
} else {
console.log(Q + ' quarters, ' + D + ' dimes, ' + N + ' nickels, and ' + P + ' pennies.') // write your code for making change here
}
