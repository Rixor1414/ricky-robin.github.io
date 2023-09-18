/**
 * FUNCTIONS:
 * Functions are a concept in JavaScript that allow you to create and reuse blocks of code by calling them.
 * There are two phases to using functions: First, you declare a function. Then you invoke a function by calling it.
 * Functions have parameters (placeholders for input values) and can return a single value.
 * Functions can see and modify variables in parent or global scopes, but the inverse is not true.
 * Functions form closures around the data they house, allowing data to exist as long as the closure is referenced.
 */

// Defining a function
function addNumbers(a, b) {
    return a + b;
}

// Assigning a function to a variable
const multiply = function(x, y) {
    return x * y;
};

// Executing (INVOKING) a FUNCTION
const sum = addNumbers(5, 3); // returns 8
const product = multiply(4, 6); // returns 24

// Parameters are placeholders in the definition, arguments are the values passed when invoking.
function log(name) { //name is the parameter
    console.log(name);
}

log("Alice"); // Logs the argument "Alice"

// Inputs and Outputs
// You specify inputs using parameters and outputs using the 'return' keyword.
function concat(one, two) {
    let string = ""
    string += one
    string += two
    return string
}

const result = concat(2, 3); // '2' and '3' are inputs, '23' is the output

// Scope and Closures
let globalVar = 10;

function global() {
    globalVar = 20; // Functions can modify global variables
}

function Closure() {
    var globalVar = 5;
    return globalVar
}


console.log(global); // Outputs '20' after calling modifyGlobal
console.log(closure); // Outputs '5' from the closure