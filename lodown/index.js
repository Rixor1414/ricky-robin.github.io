'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

module.exports.each = each;
/**
 * map: return an array after invoking a function on each element.
 * @param {Array or object}: The collection to iterate over and return.
 * @param {Function}: The Function to be applied to each value in the collection
 * @return {Array}: An array containing the collection after it's iterated over and altered.
 */
function map(collection, func){
    var array = []
    _.each(collection, function (value, key, collection){
      array.push(func(value, key, collection))
    })
    return array
  }
  module.exports.map = map; //must be included for every function
/**
 * identity: Returns the input value as is.
 * 
 * @param {value}: The value to be returned.
 * @returns {value}: The same input value.
 */
function identity(value) {
    return value
}
module.exports.identity = identity

/**
 * typeOf: Returns the type of the input value.
 * 
 * @param {value}: The value to determine the type of.
 * @returns {string}: The type of the input value.
 */
function typeOf(value){
    if (Array.isArray(value)){
      return "array"
    }else if (value === null){
      return "null"
    }else if (typeof value === "undefined"){
      return "undefined"
    }else{
      return typeof value
    }
}
module.exports.typeOf = typeOf
/**
 * first: Returns the first n elements of an array.
 * 
 * @param {Array}: The array to get elements from.
 * @param {number}: The number of elements to return.
 * @returns {Array} An array containing the first n elements of the input array.
 */
function first(array, n){
    if (!Array.isArray(array) || n < 0){
        return []
    } 
    if (typeof n !== "number"){
        return array[0]
    } 
    return array.slice(0, n)
  }

  module.exports.first = first
/**
 * last: Returns the last n elements of an array.
 * 
 * @param {Array}: The array to  elements from.
 * @param {number}:The number of elements to return. 
 * @returns {Array}: An array containing the last n elements of the input array.
 */
function last(array, n){
    if (!Array.isArray(array) || n < 0){
        return []
    } 
    if (typeof n !== "number"){
        return array[array.length - 1]
    } 
    return array.slice(-n)
  }
  module.exports.last = last

  /**
 * indexOf: Returns the index of the first instance of a value in an array.
 * 
 * @param {Array}: The array to search.
 * @param {value}: The value to find in the array.
 * @returns {number}: The index of the first instance of the value in the array, or -1 if not found.
 */
function indexOf(array, value){
    for (var i = 0; i < array.length; i++){
      if (array[i] === value) {
        return i
      }
    }
    return -1
  }
  module.exports.indexOf = indexOf

/**
 * contains: Checks if a value is present in an array.
 * 
 * @param {Array}: The array to check.
 * @param {any}: The value to check for.
 * @returns {boolean}: True if the value is found in the array, false otherwise.
 */
 function contains(array, value){
    if (_.indexOf(array, value) !== -1){
      return true
    }
    return false
  }
module.exports.indexOf = indexOf

/**
 * unique: Returns an array with only the unique elements from the input array.
 * 
 * @param {Array}: The array to remove duplicates from.
 * @returns {Array}: An array containing only unique elements from the input array.
 */
 function unique(array){
    var uniqueArray = []
    _.each(array, function (element){
      if (_.indexOf(uniqueArray, element) === -1){
        uniqueArray.push(element)
      }
    })
    return uniqueArray
  }
  module.exports.unique = unique
  /**
 * filter: Filters an array based on the result of a function run on each element.
 * 
 * @param {Array}: The array to filter.
 * @param {Function}: The filtering function that returns true for elements to include.
 * @returns {Array}: An array containing only the elements that passed the filtering test.
 */
 function filter(array, test){
    var newarray = []
    _.each(array, function (element, index, collection){
      if (test(element, index, collection)){
        newarray.push(element)
      }
    })
    return newarray
  }
  module.exports.filter = filter

/**
 * partition: Splits an array into two arrays based on a partitioning function.
 * 
 * @param {Array}: The array to partition.
 * @param {Function}: The function used to determine which array an element belongs to, true or false
 * @returns {Array}:  An array containing two sub arrays, one with the passed values and one with the failed ones
 */
function partition(array, test) {
    var trueArray = []
    var falseArray = []
    _.each(array, function (element, index, collection) {
      if (test(element, index, collection)) {
        trueArray.push(element)
      } else {
        falseArray.push(element)
      }
    })
    return [trueArray, falseArray]
  }
module.exports.partition = partition
  /**
 * pluck: Finds a  property in a collection of objects.
 * 
 * @param {Array}: The array of objects to find the elements in.
 * @param {string}: The name of the property to find.
 * @returns {Array}: An array containing the values of the specified property from each object.
 */
function pluck(array, prop){
    return _.map(array, function (obj){
      return obj[prop]
    })
  }
module.exports.pluck = pluck
  /**
 * every: Tests whether all elements in a collection pass a test.
 * 
 * @param {Array or Object}: The collection to test.
 * @param {Function}: The function that each element in the collection is tested with.
 * @returns {boolean}: True if all elements pass the test, false otherwise.
 */
function every(collection, test) {
    var passed = true
    _.each(collection, function (element, index, collection){
      if (typeof test !== "function"){
        if (!element){
            passed = false
        }
      } else if (!test(element, index, collection)){
        passed = false
      }
    })
    return passed
  }
module.exports.every = every

///here
///
  /**
 * some: Tests whether at least one element in a collection passes a given test.
 * 
 * @param {Array or Object} collection: The collection to test.
 * @param {Function} test: The function that each element in the collection is tested against.
 * @returns {boolean}: True if at least one element passes the test, otherwise false.
 */
  _.some = function (collection, test){
    var passed = false
    _.each(collection, function (element, index, collection){
      if (typeof test !== "function"){
        if (element){
            passed = true
        }
      }else if (test(element, index, collection)){
        passed = true
      }
    })
    return passed
  }

  /**
 * reduce: Reduces an array to a single value using a reducing function.
 * 
 * @param {Array} array: The array to reduce.
 * @param {Function} func: The function that combines elements into a single value.
 * @param {any} seed: An optional initial value for the reduction.
 * @returns {any}: The final reduced value.
 */
  _.reduce = function (array, func, seed) {
    var output
    var Index
  
    if (seed !== undefined) {
      output = seed
      Index = 0
    } else {
      output = array[0]
      Index = 1
    }
  
    for (var i = Index; i < array.length; i++){
      output = func(output, array[i], i)
    }
  
    return output
  }

/**
 * extend: Extends an object with the properties of one or more other objects.
 * 
 * @param {Object} objects: The target object to extend.
 * @param {...Object} arguments: The objects whose properties will be added to the target object.
 * @returns {Object}: The extended target object.
 */
  _.extend = function (objects) {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        objects[key] = arguments[i][key]
      }
    }
    return objects
  }