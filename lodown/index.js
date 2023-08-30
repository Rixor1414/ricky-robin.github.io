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
 * @param {Array or object} collection: The collection to iterate over and return.
 * @param {Function} action: The Function to be applied to each value in the collection
 */
function (collection, func){
    var array = []
    _.each(collection, function (value, key, collection){
      array.push(func(value, key, collection))
    })
    return array
  }
  module.exports.map = map; //must be included for every function