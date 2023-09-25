/*

*Assignment operators: operators that reassign a variable to a new value

*Arithmetic operators: Operators that preform math such as addition

*Comparison operators: Operators that compare two values and return a boolean of the result

*Logical operators: Operators that connects two or more expressions

*Unary Operators: Operators that preform an operation on a single value and changes it without a reassignment

*Ternary Operators: Operators that execute an expression if a condition is true.
*/

//assignment
let x = 5    
let y = 10
x += y
y -= x
x *= y
y /= x
//Arithmetic
let a = 10
let b = 5
let additionResult = a + b //15
let subtractionResult = a - b //5
let divisionResult = a / b // 2
let multipyResult = a * b // 50
let remainderResult = a % b // 0

//Comparison
let num1 = 10
let num2 = 20
let num1Str = "10"
num1 === num2 //false
num1 !== num2 //true
num1 > num2 // false
num1 >= num2 // false
num1 < num2 // true
num1 <= num2 // true

num1 === num1Str // false
num1 == num1Str // true

num1 !== num1Str //true
num1 != num1Str // false



//Logical
let isTrue = true
let isFalse = false
isTrue && isFalse //false
isTrue || isFalse //true
!isTrue ///false
//Unary
let num = 5;
num++

//Ternary
let vari = 18;
let test = (vari >= 18) ? true : false