/**
 * VARIABLES:
 
 * 0 Varieables: are named tags for values in javascript. Variables are created using declaring keywords such as var or let.
 
 * 1 Declaration and assignment: To create a variable in JS you have to declare it using either Var, Let, or Const. Let is block scoped, var is global scoped, and const cannot be redeclared or altered
 
 * 2 Var Let and Const: Var Let and Const are keywords used to declare variables in javascript. Let is block scoped, var is global scoped, and const cannot be redeclared or altered
 
 * 3 Hoisting: Variables declared with var are moved to the top of their scope before code execution
 
 */

//1 Declaration and assignment
//declaration
var color;
console.log(color) //prints undefined
//Assignment
color = "red";
comsole.log(color) //prints "red"
//let
let vari1 = "Hello"
console.log(vari1) // prints "Hello"
if (true){
    let vari1 = "Goodbye"
    console.log(vari) //prints "Goodbye"
}
console.log(vari) /// prints reference error: vari is not defined
//const
const str = "hello"
str = "goodbye"// prints type error, cannot assign to constant variable.
//3 hoisting
console.log(declaration) //prints true
var declaration = true