const ReadlineSync = require("readline-sync");
const Month = String(ReadlineSync.question("\nEnter a month: "));


if (Month == "jan" || Month == "Jan" || Month == "JAN")  {
 console.log("\n31 days.\n");
}


else if (Month == "feb" || Month == "Feb" || Month == "FEB")  {
 console.log("\n28 or 29 days.\n");
}


else if (Month == "mar" || Month == "Mar" || Month == "MAR")  {
  console.log("\n31 days.\n");
}


else if (Mont == "apr" || Month == "Apr" || Month == "APR")  {
 console.log("\n30 days.\n");
}


else if (Month == "may" || Month == "May" || Month == "MAY")  {
 console.log("\n31 days.\n");
}


else if (Month == "jun" || Month == "Jun" || Month == "JUN") {
	console.log("\n30 days")
}


else if (Month == "jul" || Month == "Jul" || Month == "JUL")  {
 console.log("\n31 days.\n");
}


else if (Month == "aug" || Month == "Aug" || Month == "AUG")  {
 console.log("\n31 days.\n");
}


else if (Month == "sept" || Month == "Sept" || Month == "SEPT")  {
 console.log("\n30 days.\n");
}


else if (Month == "oct" || Month == "Oct" || Month == "OCT")  {
 console.log("\n31 days.\n");
}


else if (Month == "nov" || Month == "Nov" || Month == "NOV")  {
 console.log("\n30 days.\n");
}


else if (Month == "dec" || Month == "Dec" || Month == "DEC")  {
 console.log("\n31 days.\n");
}


else {
 console.log("\nInvalid.\n");
}
