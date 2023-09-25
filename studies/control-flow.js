/**
 * Control Flow:
 * 
 * Control flow statements in JavaScript allow you to make decisions in your code and control the execution flow based on conditions.
 * 
 * 1. if Statement:
 *    - The 'if' statement is used for conditional execution. It evaluates a given condition and executes a block of code if the condition is true.
 * 
 * Example:
 */
let age = 18;

if (age >= 18) {
  console.log("Welcome to adulthood");
}
 
/**
 * 2. else if Statement:
 *    - The 'else if' statement is used when you want to specify multiple conditions to be tested in sequence. It is used after an 'if' statement.
 * 
 * Example:
 */
let grade = 85;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("D");
}
 
/**
 * 3. else Statement:
 *    - The 'else' statement is used in conjunction with the 'if' statement to provide an alternative code block to execute when the condition is false.
 * 
 * Example:
 */
let isRaining = true;

if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("You can leave your umbrella at home.");
}
 
/**
 * 4. switch Statement:
 *    - The 'switch' statement is used for multiple branching based on the value of an expression. It provides a way to choose one of many code blocks to be executed.
 * 
 * Example:
 */
let dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Weekday.");
    break;
  case "Friday":
    console.log("Friday");
    break;
  default:
    console.log("Weekend.");
}
