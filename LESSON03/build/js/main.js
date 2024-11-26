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
let mixArr = ['apple', 1, 'banana', 2, 3];
