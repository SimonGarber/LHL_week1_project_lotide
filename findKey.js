

  
  

const findKey = function (objectToTraverse, callback) {
    
    for(let key in objectToTraverse) {
       if (callback(objectToTraverse[key])) {
           return key;
       } 
    }
    
};
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ ✅ ✅ Assertion Passed:  ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  module.exports = findKey;
  
// Assertion passes and returns the correct key if the callback function accepts a numerical value that is present in the object.
// console.log(assertEqual(findKey ({
//     "Blue Hill": { stars : 1 },
//     " Akaleri" : { stars : 3 },
//      "noma" :    { stars : 2 },
//      "elBulli" : { stars : 2 },
//      "Akelarre": { stars : 3 }
// }, x => x.stars === 1), "Blue Hill"))

// // Assertion fails and Returns undefined if there are no keys passed in the function call.
// console.log(assertEqual(findKey ({
//     "Blue Hill": { stars : 1 },
//     " Akaleri" : { stars : 3 },
//      "noma" :    { stars : 2 },
//      "elBulli" : { stars : 2 },
//      "Akelarre": { stars : 3 }
// }, x => x.stars === 1)))

// // Assertion fails and Returns undefined if the value passed in the callback function is not present in the function
// console.log(assertEqual(findKey ({
//     "Blue Hill": { stars : 1 },
//     " Akaleri" : { stars : 3 },
//      "noma" :    { stars : 2 },
//      "elBulli" : { stars : 2 },
//      "Akelarre": { stars : 3 }
// }, x => x.stars === 4), "Blue Hill"))

// // Assertion passes and returns undefined if the key passed in the function is incorrect and undefined is the expected result in the 
// // Assertion function.
// console.log(assertEqual(findKey ({
//     "Blue Hill": { stars : 1 },
//     " Akaleri" : { stars : 3 },
//      "noma" :    { stars : 2 },
//      "elBulli" : { stars : 2 },
//      "Akelarre": { stars : 3 }
// }, x => x.stars === 4), undefined))
