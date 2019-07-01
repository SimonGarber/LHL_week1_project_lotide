
const assert = require('chai').assert
const tail = require('../tail')
describe("#tail", () => {
    it("returns 2 for [1,2,3]", () =>{
       assert.strictEqual(middle([1,2,3]),[2,3] );    
    });
    it("returns 1 for ['5']", () => {
       assert.strictEqual(middle(['5']), ['5']); 
     })
    });