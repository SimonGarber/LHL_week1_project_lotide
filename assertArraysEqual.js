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

  const assertArraysEqual = function(eqArrays){
      if (!eqArrays){
          console.log("Uh Oh! These arrays are NOT equal")
      }
      else {
          console.log("Congratulations! These arrays ARE equal")
      }
  }
  assertArraysEqual(eqArrays([1,2,3],[3,2,1]))

