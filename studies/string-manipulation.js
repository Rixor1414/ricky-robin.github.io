/**
 * 
 * String manipulation with operators: Values can be added to a string either at the end or at a specific index. These are usually only used for simple operations.
 * 
 * Manipulation with methods: Methods can manipulate strings in much more complex ways than operators, allowing you to remove from the end, split the string into an array, replace words or characters, etc.
 *
 * Immutability: Strings are immutable, so any manipulation is done in a modified copy.
 *
 */

//Operators
let str = "Rick"
str += "y" ///str = "ricky"

//Methods
let str2 = "Robin"
let fullName = str1.concat(" ", str2) //fullName = "Ricky Robin"

let typo = 'No Regerts'
let fixed = typo.replace("Regerts", "regrets") //fixed = "No Regrets"

let caps = fullName.toUpperCase() // caps = "RICKY ROBIN"

let lastName = fullName.slice(6) // lastName = "Robin"