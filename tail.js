const assertEqual = require('./assertEqual');
const tail = function(arr){
    if (arr.length < 2) {
        return arr;
    } else {
    return arr.slice(1);
    }   
}
tail([1,2,3,4,5]);
module.exports = tail;