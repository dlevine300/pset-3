const ReadlineSync = require("readline-sync");
const Number1= ReadlineSync.question('\nEnter three numbers. \n');
const Number2= ReadlineSync.question();
const Number3= ReadlineSync.question();

if ((Number3-Number2==2.2) || (Number2-Number1==2.2)) {
console.log('\nStrictly Increasing.');

} else if ((Number3-Number2>=0) || (Number2-Number1>=0)) {
 console.log('\nIncreasing.');

} else ((Number3-Number2==0) || (Number2-Number1==0))
  console.log('\nEqual.');

if ((Number3-Number2<=0) || (Number2-Number1<=0)) {
 console.log('\nDecreasing.');

}else if  ((Number3-Number2==(-2.2)||Number2-Number1==(-2.2))){
 console.log('\nStrictly Decreasing.');

}else (1)
 console.log('\nUnordered.');

if (Number.isNaN(Number1)) {
 console.log('\nInvalid.');
}
