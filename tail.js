const assertEqual = require('./assertEqual');
const tail = function(arr){
    return arr.slice(1);
    
}
tail([1,2,3,4,5]);
module.exports = tail;