/*DATA TYPES:
 * 
 * In JavaScript, data types define the nature of values and how they can be manipulated in code. 
 * There are two main categories of data types: primitive/simple and complex data types.
 * 
 * 1. Number:
 *    Numeric values, including integers.
 * 
 * 2. String:
 *    - A sequence of characters inside single ('') or double ("") quotes.
 * 
 * 3. Boolean:
 *    - A true or false value, used for conditionals.

 * 
 * 4. Array:
 *    - A collection of values of any datatype
 * 
 * 5. Object:
 *    - A collection of related key-value pairs.
 
 * 
 * 6. Function:
 *    - A reusable block of code that can be invoked to preform the task.
 * 
 * 7. undefined:
 *    - A variable that has been declared but not assigned a value.
 * 
 * 8. null:
 *    - A lack of any object or value.
 * 
 * 9. NaN (Not-a-Number):
 *    - A value that is not a valid number.
 * 
 * 10. Infinity and -Infinity:
 *     - Positive and negative infinity values, often the result of mathematical operations.
 * 
 * Difference between primative and complex
 * 
 * - Primitive data types such as Number, String, Boolean, undefined, null, NaN, and Infinity are immutable.
 *   Their values cannot be changed after they are created.
 *   When assigning a primitive to another variable, a copy of the value is made.
 * 
 * - Complex data types are mutable.
 *   Their values can be changed after they are created.
 *   When assigning a complex type to another variable, a reference to the original value is created.
 *   Modifying the copy also modifies the original.
 *  - copy by value vs copy by reference:
 *    - Primatvie datatypes are copy-by-value, meaning that they can be assigned to a different variable without affecting that variable.
 *    - Non-primative datatypes are copy-by-reference, meaning that any variables assigned to the will change when the base value does
 * 
 */
// Number
let age = 25;

// String
let name = "John";

// Boolean
let isTrue = true;

// Array
let colors = ["red", "green", "blue"];

// Object
let person = { name: "Alice", age: 30 };

// Function
function greet(name) {
  return "Hello, " + name + "!";
}

// undefined
let x;

// null
let emptyValue = null;

// NaN (Not-a-Number)
let result = "apple" / 2; // NaN

// Infinity and -Infinity
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;

//Copy by value
let x = 12
let y = x
x = 11
console.log(y) //prints 12
console.log(x) //prints 11

//Copy by reference
let obj = {
  a:1,
  b:2,
  c:3
}
let obj2 = obj
obj.a = 4
console.log(obj2) // prints {a:4,b:2,c:1}
