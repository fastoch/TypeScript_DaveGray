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
// then we can use our custom type, but all properties are required and must match the predefined types
let evh = {
    name: 'Eddie Van Halen',
    active: false,
    albums: ['The Evil That Men Do', 1985, 'IV', 'A Night at the Opera']
};
// then we can use this custom type without having to use the optional properties
let Schumacher = {
    name: 'Michael Schumacher',
    wins: 300
};
// Let's use our custom type in a function
// Let's assume the 'name' property is optional
// We cannot use an optional property in a function, cause it could be undefined
// We need to check if the property exists before using it
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello, ${guitarist.name}! You released ${guitarist.albums.length} albums in total.`;
    }
    return "Hello!";
};
console.log(greetGuitarist(evh));
// ENUMS
// Unlike most TS features, Enums are not a type-level addition to JS but something added to the language and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
// But you cannot assign a type alias to an interface
// interface PostId = strOrNum
// Literal Types
let instructorName; // 'Dave' is both a type and a value here
// instructorName = 'Fastoch' // we cannot assign another value to instructorName
instructorName = 'Dave'; // the only accepted value is 'Dave'
let userName;
// The 3 above values will be accepted
userName = 'Dave';
userName = 'John';
userName = 'Fastoch';
// FUNCTIONS
// function with explicit parameter types and an explicit return type
const add = (a, b) => {
    return a + b;
};
// function which can take any type of parameter and returns nothing
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(1, 2));
// we don't have to always use arrow functions, we can use regular functions as well
let subtract = function (a, b) {
    return a - b;
};
// then use these signatures in a function 
let multiply = (a, b) => {
    return a * b;
};
// This way we don't need to specify the types every time we declare functions that have the same signature
// we can reuse this signature each time it matches the required types
logMsg(multiply(4, 4));
// FUNCTIONS - Optional parameters 
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// FUNCTIONS - default values
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(1, 2, 3)); // 6
logMsg(addAll(1, 2)); // // 3
logMsg(sumAll(1, 2, 3)); // 6
logMsg(sumAll(1, 2)); // 5 (c defaults to 2)
// FUNCTIONS - Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
// The rest operator (...) allows functions to accept an indefinite number of arguments
logMsg(total(1, 2, 3, 4)); // 10 (sum of all arguments)
// The NEVER type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// The createError() function above has a return type of "never" when you mouse over it
// The "never" type is essentially for functions that explicitly throw errors
// You can also encounter the "never" type with functions that never return a value (infinite loops, etc.)
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
    }
};
// The infinite() function above has a return type of "never" when you mouse over it
// in such cases, make sure you throw an error or return a value to exit this endless loop
// For example:
const endless = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// With Type Assertion, we can convert to a more specific or less specific type
let x = 'hello';
let y = x; // assigning a less specific type to y
let z = x; // assigning a more specific type to z
// We can also use the angle brackets (<>) syntax to do the same thing
let d = 'world';
let e = 'world'; // assigning a less specific type to e    
// but this angle brackets notation cannot be used in .tsx files (TypeScript with JSX, like React for example)
// Practical example of when to use type assertions
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b; // The empty string is used to convert the numbers to strings (data type coercion)
};
// when we go to use the above function, an assertion can come in handy
let myVal = addOrConcat(2, 2, 'concat');
