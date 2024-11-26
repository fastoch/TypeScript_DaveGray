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

<<<<<<< HEAD
let unionType: number | string;
=======
let unionType: number | string;
>>>>>>> a51b5e1453e56ce1698477eebc93c6f06fc6300d
