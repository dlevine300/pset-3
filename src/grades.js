const readlineSync = require("readline-sync");
const Grade = Number(readlineSync.question("\nEnter a grade: "));

const MIN = 0;
const MAX = 100;

if (Grade >= 90 && Grade <= 100 )  {
	console.log("\nYou recieved an A.\n");
}

else if (Grade >= 80 && Grade <= 89 )  {
	console.log("\nYou recieved an B.\n");
}

else if (Grade >= 70 && Grade <= 79 )  {
	console.log("\nYou recieved an C.\n");
}

else if (Grade >= 60 && Grade <= 69 )  {
	console.log("\nYou recieved an D.\n");
}

else if (Grade >= 0 && Grade <= 59 )  {
	console.log("\nYou recieved an F.\n");
}

else if (Number.isNaN(Grade)){
  console.log("\nInvalid.\n");
}

else if (Grade < MIN || Grade > MAX) {
    console.log("\nInvalid.")
}
