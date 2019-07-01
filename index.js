const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countletters = require('./countletters');
const countindex = require('./countindex');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const without = require('./without');
const takeUntil = require('./takeUntil');
module.exports = {
  head:  head,
  tail:  tail,
  middle: middle,
  flatten: flatten,
  findKeyByValue: findKeyByValue,
  findKey : findKey,
  eqObjects: eqObjects,
  eqArrays : eqArrays,
  countOnly : countOnly,
  countletters : countletters,
  countindex : countindex,
  assertObjectsEqual : assertObjectsEqual,
  assertEqual : assertEqual,
  assertArraysEqual : assertArraysEqual,
  without : without,
  takeUntil : takeUntil,

};
