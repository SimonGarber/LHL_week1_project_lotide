const assertEqual = function(actual, expected) {

    if (actual === expected) {
        console.log(`✅ ✅ ✅ Assertion Passed:  ${actual} === ${expected}`);
    } else if (actual !== expected) {
        console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
    }
};

const tail = function(arr){
    return arr.slice(1);
    
}
assertEqual(tail([1,2,3]),[2,3]);

