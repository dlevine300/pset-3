const ReadlineSync = require("readline-sync");
const Grade= ReadlineSync.question('\nEnter a letter grade: ');

if (Grade=="F" || Grade== "f") {
  console.log('\nYour GPA is 0.00.\n');
}
else if (Grade=="D-" || Grade== "d-") {
  console.log('\nYour GPA is 0.67.\n');
}
else if (Grade=="D" || Grade=="d") {
  console.log('\nYour GPA is 1.00.\n');
}
else if (Grade=="D+" || Grade=="d+") {
  console.log('\nYour GPA is 1.33.\n')
}
else if (Grade=="C-" || Grade=="c-") {
  console.log('\nYour GPA is 1.67.\n')
}
else if (Grade == "C" || Grade == "c")  {
 console.log("\nYour GPA is 2.00.\n");
}
else if (Grade == "C+" || Grade == "c+")  {
 console.log("\nYour GPA is 2.33.\n");
}
else if (Grade == "B-" || Grade == "b-")  {
 console.log("\nYour GPA is 2.67.\n");
}
else if (Grade == "B" || Grade == "b") {
	console.log("\nYour GPA is 3.00")
}
else if (Grade == "B+" || Grade == "b+")  {
 console.log("\nYour GPA is 3.33.\n");
}
else if (Grade == "A-" || Grade == "a-")  {
 console.log("\nYour GPA is 3.67.\n");
}

else if (Grade == "A" || Grade == "a")  {
  console.log("\nYour GPA is 4.00.\n");
}

else if (Grade == "A+" || Grade == "a+") {
  console.log("\nYour GPA is 4.00\n");
}
else {
 console.log("\nInvalid.\n");
}
