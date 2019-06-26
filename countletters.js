const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ ✅ ✅ Assertion Passed:  ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  function countLetters (phrase) {
    const charsObj = {}; 
    const letters = phrase.split('');
    for (let index = 0; index < letters.length; index ++) {
        // const count = 1;
        const character = letters[index];
        if (character !== ' ') {
            if (charsObj[character]) {
                charsObj[character] = charsObj[character] + 1;
            } else {
               charsObj[character] = 1;             
            }   
        }
        
    }
    return charsObj.h;
    
}
console.log(assertEqual(countLetters("lighthouse in the house"),4));

