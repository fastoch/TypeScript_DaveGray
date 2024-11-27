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
