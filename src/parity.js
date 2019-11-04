const ReadlineSync = require("readline-sync");
const Integer= ReadlineSync.question('Enter an integer; ');
const MIN= Number.MIN_SAFE_INTEGER;
const MAX= Number.MAX_SAFE_INTEGER;

if (Integer%2==0) {
console.log('\nEven.');

} else if (Number.isNaN(Integer)) {
console.log('\nInvalid.');

} else {
  console.log('\nOdd.');
}
