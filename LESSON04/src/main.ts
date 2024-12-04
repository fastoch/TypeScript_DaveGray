// // --------------------------LESSON01---------------------------------------

let username = 'Dave'
console.log(username)

let a: number = 12
let b: number = 6
let c: number = 2

console.log(a / b) 


// --------------------------LESSON02----------------------------------------

let myName = 'John' // implicit type declaration (TS infers the data type)
let yourName: string = 'Alice' // explicit type declaration

let meaningOfLife: number;
let isLoading: boolean;

let album: any;

myName = 'Dave'
meaningOfLife = 23
isLoading = true

album = 1983
album = 'She\'s so unusual'

const sum = (a: number, b: number) => {
  return a + b
}

const concat = (a: string, b: string) => {
  return a + ' ' + b
}

let unionType: number | string;

// TS can recognize regular expressions, and it can infer the 'RegExp' type
let regex = /\w+/g

// It's completeley okay to take advantage of TS's type inference, but as we learn it's recommended to be explicit


// --------------------------LESSON03 Arrays & Objects----------------------------------------

let stringArr: string[] = ['apple', 'banana', 'cherry']
let numberArr: number[] = [1, 2, 3, 4, 5]
let mixedArr: (string | number | boolean)[] = ['apple', 1, 'banana', true, 3]

stringArr[0] = '32' // add the string '32' at index 0, instead of 'apple'
stringArr.push('orange') // adds 'orange' to the end of the array
console.log(stringArr)

mixedArr[0] = 16 // add the number 16 at index 0, instead of 'apple'
mixedArr.push(false) // adds false to the end of the array
mixedArr.unshift('kiwi') // adds 'kiwi' to the beginning of the array
console.log(mixedArr)

let test = [] // empty array than can contain any type of data
let bands: string[] = [] // empty array than can only contain strings


// TUPLES are ordered collections of elements with a fixed length and a predefined type for each index
let myTuple: [string, number, boolean] = ['Dave', 82, true]


// OBJECTS
let myObj: object
myObj = [] // we can assign an empty array to an object, because an array is an object in JavaScript
console.log(typeof myObj)
myObj = bands // an array of strings is also an object
myObj = {} // an empty object

const exampleObj = {
  prop1: 'Dave',
  prop2: true
}

exampleObj.prop2 = false // cannot set the value to 42 or 'Alice' because the type is locked to boolean
exampleObj.prop1 = 'fastoch'


// Custom Types - declaring our own data types (also called "Type Aliases")
type Guitarist = {
  name: string,
  active: boolean,
  albums: (string | number)[]
}

// then we can use our custom type, but all properties are required and must match the predefined types
let evh: Guitarist = {
  name: 'Eddie Van Halen',
  active: false, 
  albums: ['The Evil That Men Do', 1985, 'IV', 'A Night at the Opera']
}

// We can make some properties optional by using the '?' operator
type Racer = {
  name: string,
  wins: number,
  active?: boolean,   // type is boolean | undefined
  injuries?: number
}

// then we can use this custom type without having to use the optional properties
let Schumacher: Racer = {
  name: 'Michael Schumacher',
  wins: 300
}


// Let's use our custom type in a function
// Let's assume the 'name' property is optional
// We cannot use an optional property in a function, cause it could be undefined
// We need to check if the property exists before using it
const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello, ${guitarist.name}! You released ${guitarist.albums.length} albums in total.`
  }
  return "Hello!";
}

console.log(greetGuitarist(evh))


// INTERFACES 
// In TypeScript, both interfaces and type aliases are used to define the shape of objects and data types
// For now, let's say that Interfaces are preferred in object-oriented programming due to their ability to extend classes
interface Vehicle {
  manufacturer: string,
  model: string,
  year: number, 
  category?: string
}


// ENUMS
// Unlike most TS features, Enums are not a type-level addition to JS but something added to the language and runtime.

enum Grade {
  U,
  D,
  C,
  B,
  A
}


// -------------LESSON 04 Functions--------------------------

// In the previous chapter, we introduced Type Aliases 
type strOrNum = string | number 
type strOrNumArr = (string | number)[]

// You can assign a type alias to another type alias
type UserId = strOrNum  

// But you cannot assign a type alias to an interface
// interface PostId = strOrNum

// Literal Types
let instructorName: 'Dave' // 'Dave' is both a type and a value here
// instructorName = 'Fastoch' // we cannot assign another value to instructorName
instructorName = 'Dave' // the only accepted value is 'Dave'

let userName: 'Dave' | 'Fastoch' | 'John'
// The 3 above values will be accepted
userName = 'Dave'
userName = 'John'
userName = 'Fastoch'

// FUNCTIONS

// function with explicit parameter types and an explicit return type
const add = (a: number, b: number): number => {
  return a + b
}

// function which can take any type of parameter and returns nothing
const logMsg = (message: any): void => {
  console.log(message) 
}

logMsg('Hello!')
logMsg(add(1, 2))

// we don't have to always use arrow functions, we can use regular functions as well
let subtract = function (a: number, b: number): number {
  return a - b
}

// We can also define types for functions (we call them "signatures")
type MathFunction = (a: number, b: number) => number

// then use these signatures in a function 
let multiply: MathFunction = (a, b) => {
  return a * b
}

// This way we don't need to specify the types every time we declare functions that have the same signature
// we can reuse this signature each time it matches the required types

logMsg(multiply(4, 4))

// we could also use interfaces for function signatures
interface MathOperations { (a: number, b: number): number }


// FUNCTIONS - Optional parameters 
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c
  }
  return a + b
}

// FUNCTIONS - default values
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c
}

logMsg(addAll(1, 2, 3)) // 6
logMsg(addAll(1, 2)) // // 3
logMsg(sumAll(1, 2, 3)) // 6
logMsg(sumAll(1, 2)) // 5 (c defaults to 2)

// FUNCTIONS - Rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr)
}

// The rest operator (...) allows functions to accept an indefinite number of arguments

logMsg(total(1,2,3,4)) // 10 (sum of all arguments)