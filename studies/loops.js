/**
 * LOOPS:
 * Loops are a fundamental concept in programming that allow you to execute a block of code repeatedly.
 * There are several types of loops in JavaScript, including the while loop, for loop, and for-in loop.
 */

// WHILE LOOP
// The while loop repeats a block of code as long as a specified condition is true.
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}

// FOR LOOP
// The for loop is used for iterating over a sequence of values.
for (let i = 1; i <= 5; i++) {
    console.log[i];
}

// FOR-IN LOOP
// The for-in loop is used to iterate over the properties of an object.
const person = {
    name: "Ricky",
    age: 21,
    job: "developer"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}