// LESSON01

let username = 'Dave'
console.log(username)

let a: number = 12
let b: number = 6
let c: number = 2

console.log(a / b) 

// ----------------------------------------------------------------

// LESSON02

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