
const eqArrays = function(arr1,arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };

const assertArraysEqual = function(arr1,arr2){
const result = eqArrays(arr1,arr2)
    if (!result){
        console.log("Uh Oh! There was an issue and the array has been altered");
    }
    else {
        console.log("Congratulations! The Arrays are the Same!!");
    }
}


const flatten = function(arr1) {
  let flattened = [];
  for(let i = 0; i < arr1.length; i++){
    if (Array.isArray(arr1[i])){
      flattened = flattened.concat(flatten(arr1[i]));
    } else {
        flattened.push(arr1[i]);
    }
  }
  return flattened
};

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]));
