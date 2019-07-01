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
  

  
function letterPositions (phrase) {
    const results = {}; 
    const letters = phrase.split('');
    for (const index = 0; index < letters.length; index ++) {
        const character = letters[index];
        if (!results[character]) {
            results[character] = [index];
        } else {
            results[character].push(index);
        }
    }
    return results;   
}
module.exports = letterPositions;
// console.log(assertArraysEqual(letterPositions("lighthouse in the house").i,[1,11]));  