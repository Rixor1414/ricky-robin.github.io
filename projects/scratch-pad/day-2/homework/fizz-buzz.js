// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//loop from 1 to 100
for (var i = 1; i <= 100; i++){
    //check if i is a multiple of 5 but not 3 and print buzz if true
    if (i % 5 === 0 && i % 3 != 0){
        console.log("Buzz")
        //check if i is a multiple of 3 but not 5 and print fizz if true
    }else if (i % 3 === 0 && i % 5 != 0){
        console.log("Fizz")
        //Check if i is a multiple of both 3 and 5 and print fizzbuzz if true
    }else if (i % 3 === 0 && i % 5 === 0 ){
        console.log("FizzBuzz")
        //print the number as normal if none of the above are true.
    }else {
        console.log(i)
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}