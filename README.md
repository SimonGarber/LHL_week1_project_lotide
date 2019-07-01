# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @metaphive/lotide`

**Require it:**

`const _ = require('@metaphive/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`:  Retrieves the first element of an array.
* `tail(arr)`: Retrieves all other elements except the head.
* `middle(array)`: Takes in an array and returns the middle-most elements.
* `flatten(array)`: Takes in an array of arrays and returns a single array.
* `findKeyByValue(obj,objVal)`: Takes in an object and a value. It should scan the object and return the first key which contains the given value.
* `findKey(ObjectToTraverse,Callback)`: Takes in an object and a callback. It will traverse the object and return the first key for which the callback returns a truthy value. If no key is found, then it will return undefined.
* `eqArray(array1,array2)`: Takes in two arrays and returns a true or false value.
* `countOnly(allItems,ItemsToCount)`: Takes in an array of strings and returns an object with the appropriate counts.
* `countletters(phrase)`: Takes in an array of strings and returns an object with the unique letter count.
* `letterPositions(phrase)`: returns all the indicies in the string where each character is found.
* `assertObjectEqual(array)`: Takes in two objects and console.log(s) an appropriate message based on the result.
* `assertEqual(array)`: Takes in two values and prints a message to the console indicating if there was a match or not.
* `assertArraysEqual(actual,expected)`: Takes in two arrays and logs the appropriate message.
* `without(source,itemsToRemove)`: Takes in an array and itemsToRemove returning a subset of a given array, removing unwanted elements.
* `takeUntil(newArr,callback)`: Takes in an Array and a Callback, returns a slice of the array taken from the beginning until the callback function returns a truthy value.
* `map(array,callback)`: Takes in an array and a callback and returns a new array based on the results of the callback function.
* `eqObjects(Object1,Object2)`: Takes in two objects and returns true or false, based on a perfect match.
