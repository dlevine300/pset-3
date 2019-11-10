const ReadlineSync = require("readline-sync");
const Temp = Number(ReadlineSync.question("\nEnter a temperature: "));
const SCALE = String(ReadlineSync.question("\nEnter a scale: "));

if (Temp >= 32 || Temp < 212 || SCALE == "F")  {
	console.log("\nLiquid.\n");
}

else if (Temp >= 212 || SCALE == "F" )  {
	console.log("\nGas.\n");
}

else if (Temp <= 32 || SCALE == "F" )  {
	console.log("\nSolid.\n");
}

if (Temp >= 273 || Temp < 373 || SCALE == "K")  {
	console.log("\nLiquid.\n");
}

else if (Temp >= 373 || SCALE == "K" )  {
	console.log("\nGas.\n");
}

else if (Temp <= 273 || SCALE == "K" )  {
	console.log("\nSolid.\n");
}

if (Temp >= 0 || Temp < 100 && SCALE == "C")  {
	console.log("\nLiquid.\n");
}

else if (Temp >= 100 || SCALE == "C" )  {
	console.log("\nGas.\n");
}

else if (Temp <= 0 || SCALE == "C" )  {
	console.log("\nSolid.\n");
}

else if (Number.isNaN(Temp)){
  console.log("\nInvalid.\n");
}
