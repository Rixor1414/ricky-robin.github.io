// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./ricky-robin.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    return array.filter(function(customer) {
        return customer.gender === 'male';
      }).length;
};

var femaleCount = function(array) {
    return array.reduce(function(count, customer) {
        if (customer.gender === 'female') {
          count += 1;
        }
        return count;
      }, 0);
}

var oldestCustomer = function(array){
    let oldestAge = array[0].age
    let oldestName = '';
  
    for (let i = 1; i < array.length; i++) {
      if (array[i].age > oldestAge) {
        oldestAge = array[i].age;
        oldestName += array[i].name;
      }
    }
  
    return oldestName;
  }
var youngestCustomer = function(array){


 let youngestAge = array[0].age;
  let youngestName = '';

  for (let i = 1; i < array.length; i++) {
    if (array[i].age < youngestAge) {
      youngestAge = array[i].age;
      youngestName = array[i].name;
    }
  }
  return youngestName;
}


var averageBalance = function(array){
  var num = 0
  var newarr = []
  let average = 0
  _.each(array, function(customer){
    let balancearr = customer.balance.split('$')[1].split(',')
    newarr.push(balancearr[0] + balancearr[1])
  })
  for (let i = 0; i < newarr.length; i++){
    average += parseFloat(newarr[i])
  }
return average / newarr.length
}

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
