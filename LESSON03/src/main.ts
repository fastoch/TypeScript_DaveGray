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


// Custom Types - declaring our own data types
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
  active?: boolean,
  injuries?: number
}

// then we can use this custom type without having to use the optional properties
let Schumacher: Racer = {
  name: 'Michael Schumacher',
  wins: 300
}