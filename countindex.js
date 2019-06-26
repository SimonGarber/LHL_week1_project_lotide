const assertArraysEqual = function(arr1,arr2){
    const result = eqArrays(arr1,arr2)
      if (!result){
          console.log("Uh Oh! These arrays are NOT equal")
      }
      else {
          console.log("Congratulations! These arrays ARE equal")
      }
  }
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
  

  
function countIndex (phrase) {
    const results = {}; 
    const letters = phrase.split('');
    for (var index = 0; index < letters.length; index ++) {
        var character = letters[index];
        if (!results[character]) {
            results[character] = [index];
        } else {
            results[character].push(index);
        }
    }
    return results;   
}
console.log(assertArraysEqual(countIndex("lighthouse in the house").i,[1,11]));  