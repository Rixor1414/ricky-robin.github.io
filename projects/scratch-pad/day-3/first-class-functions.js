// #!/usr/bin/env node

'use strict';

const { toUpperCase } = require("../day-1/stringy");

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return a function that evaluates to true if the value is greater than the base, and false otherwise.
    return function (val){
            if (val > base){
                return true
            }else {
                return false
            }
        }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return a function that evaluates to true if the value is less than the base, and false otherwise.
    return function (val){
        if (val < base){
            return true
        }else {
            return false
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
//create a function that returns a function that resolves to true if the string starts with the specified character
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function (str){
        var upperStarts = startsWith.toUpperCase()
        var upper = str.toUpperCase()
        console.log(upper)
        if (upper.charAt(0) === upperStarts){
            return true
        }else {
            return false
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
     //return a function that standardizes the cases and returns true if the last letter of as given string is the same as a given letter and false otherwise.
    return function (str){
        var upperEnds = endsWith.toUpperCase()
        var upper = str.toUpperCase()
        console.log(upper)
        if (upper.charAt(upper.length - 1) === upperEnds){
            return true
        }else {
            return false
        }
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //create an array to hold the new strings
    var array = []
    //loop through the strings argument and run the modify function on each element
    for (var i = 0; i <  strings.length; i++){
        array.push(modify(strings[i]))
    }
    //return the array
    return array
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //create an array to hold the true values after the test
    var array = []
    //loop through the strings array and passss every value thst returns true when tested into the array
    for (var i = 0; i < strings.length; i++){
        if (test(strings[i]) === true){
            array.push(strings[i])
        }
    }
    //check if the new array is equal in length to the strings array and return true if so, and false if not.
    if (array.length === strings.length){
        return true
    }else {
        return false
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
