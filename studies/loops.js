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
// The for loop is used for iterating over a sequence of values.It's comprised of 3 statements: A start statement, a stop statement, and an update statement.
let arr = ["a", "b", "c"]
for (let i = 0;/*Tells the code where to start*/ i < arr.length;/* stop statement, tells the code when to stop*/ i++ /* update statement, tells the code how to update each increment*/ {
    console.log(arr[i]); //Prints "a" then "b" then "c"
}
//Iterate through the same array backwards
for (let i = arr.length - 1; i >= 0; i--){
    console.log(array[i]) //Prints "c" then "b" then "a"
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