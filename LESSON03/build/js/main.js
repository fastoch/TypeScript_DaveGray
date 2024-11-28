"use strict";
// // --------------------------LESSON01---------------------------------------
let username = 'Dave';
console.log(username);
let a = 12;
let b = 6;
let c = 2;
console.log(a / b);
// --------------------------LESSON02----------------------------------------
let myName = 'John'; // implicit type declaration (TS infers the data type)
let yourName = 'Alice'; // explicit type declaration
let meaningOfLife;
let isLoading;
let album;
myName = 'Dave';
meaningOfLife = 23;
isLoading = true;
album = 1983;
album = 'She\'s so unusual';
const sum = (a, b) => {
    return a + b;
};
const concat = (a, b) => {
    return a + ' ' + b;
};
let unionType;
// TS can recognize regular expressions, and it can infer the 'RegExp' type
let regex = /\w+/g;
// It's completeley okay to take advantage of TS's type inference, but as we learn it's recommended to be explicit
// --------------------------LESSON03 Arrays & Objects----------------------------------------
let stringArr = ['apple', 'banana', 'cherry'];
let numberArr = [1, 2, 3, 4, 5];
let mixedArr = ['apple', 1, 'banana', true, 3];
stringArr[0] = '32'; // add the string '32' at index 0, instead of 'apple'
stringArr.push('orange'); // adds 'orange' to the end of the array
console.log(stringArr);
mixedArr[0] = 16; // add the number 16 at index 0, instead of 'apple'
mixedArr.push(false); // adds false to the end of the array
mixedArr.unshift('kiwi'); // adds 'kiwi' to the beginning of the array
console.log(mixedArr);
let test = []; // empty array than can contain any type of data
let bands = []; // empty array than can only contain strings
// TUPLES are ordered collections of elements with a fixed length and a predefined type for each index
let myTuple = ['Dave', 82, true];
// OBJECTS
let myObj;
myObj = []; // we can assign an empty array to an object, because an array is an object in JavaScript
console.log(typeof myObj);
myObj = bands; // an array of strings is also an object
myObj = {}; // an empty object
const exampleObj = {
    prop1: 'Dave',
    prop2: true
};
exampleObj.prop2 = false; // cannot set the value to 42 or 'Alice' because the type is locked to boolean
exampleObj.prop1 = 'fastoch';
// then we can use our custom type, but we cannot omit any property
let evh = {
    name: 'Eddie Van Halen',
    active: false,
    albums: ['The Evil That Men Do', 1985, 'IV', 'A Night at the Opera']
};
