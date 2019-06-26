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
          console.log("Uh Oh!");
      }
      else {
          console.log("Congratulations!");
      }
  }

  const middle = function(array) {
let newArr = [];
  if (array.length <= 2 && array.length > 0){
    //   console.log("The array has only 1 or 2 elements") 
  } else if (array.length % 2 === 0){
      newArr =[array[(array.length/2)-1],array[array.length/2]]
    //   console.log("The array has an even number of elements"); 
  } else if (array.length % 2 !== 0){
      newArr = [array[Math.floor(array.length/2)]]
    //   console.log("The array has an odd number of elements")
  }
  return newArr;  
}

  assertArraysEqual(middle([1,2,3]),[2])
  assertArraysEqual(middle([1,2]),[])
  assertArraysEqual(middle([1,2,3,4]),[2,3])