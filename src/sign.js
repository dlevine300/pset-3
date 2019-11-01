const ReadlineSync = require("readline-sync");
const Integer =ReadlineSync.question('\nEnter a Number: ');
const Pos_number =(Integer>0);
const Neg_number =(Integer<0);

const MIN= Number.MIN_SAFE_INTEGER;
const MAX= Number.MAX_SAFE_INTEGER;

if (0>(Integer)) {
console.log('\nnegative.');
} else if (0 < Integer || Integer > 0) {
console.log('\npositive.');
} else {
}

if (Number.isNaN(Integer)) {
console.log('\ninvalid.');
} else if (Integer < MIN || Integer > MAX) {
console.log('\ninvalid.');
} else {
}


if (0==(Integer)) {
  console.log('zero.');
} else if (Integer == 0 || Integer == 0) {
  console.log('\ninvalid')
} else {
}
