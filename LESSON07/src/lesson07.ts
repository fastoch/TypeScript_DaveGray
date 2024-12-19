//--------------- Index signatures & keyof assertions -------------------

// Index signatures are useful when you create an object but don't know the exact names of the object keys.
// But you do know the shape of the object and can declare the types of the keys and values.

// The other reason for using index signatures is because TS requires them if you attempt to access an object's property dynamically.
// That second reason is how beginners usually discover the need for index signatures.

// interface without an index signature
interface TransactionObj {
  Pizza: number,
  Books: number,
  Job: number
}

// now let's create an object from the above interface
const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50
}

// 2 ways of accessing the same property
console.log(`Pizza property without index signature: ${todaysTransactions.Pizza}`) // -10
console.log(`Pizza property without index signature: ${todaysTransactions['Pizza']}`) // -10

// -----------------------------------------------------------------------------------------------------

// declaring our first INDEX SIGNATURE
interface TransactionIndexSignature {
  [key: string]: number
}
// note that keys cannot be booleans, and the word 'key' can be replaced with 'index' > index signature

// now let's define a similar object from this new interface
const todaysOperations: TransactionIndexSignature = {
  Pizza: -10,
  Books: -5,
  Job: 50,
}

// accessing the same 'Pizza' property dynamically thanks to the index signature
let prop: string = 'Pizza'
console.log(`Pizza property dynamically accessed: ${todaysOperations[prop]}`) // -10

// with our index signature, we can also loop through the properties (dynamic access)
const todaysNet = (transactions: TransactionIndexSignature): number => {
  let total = 0
  for (const transaction in transactions) {
    total += transactions[transaction]
  }
  return total
}

// display the sum of all transactions
console.log(`Dynamically accessing all properties: ${todaysNet(todaysOperations)}`) // 35


// to prevent assignment of a new value to any property of the objects we create, we can use 'readonly'
interface myObject {
  readonly [key: string]: number
}

// let's create an object with this read-only index signature
const object1: myObject = {
  Pizza: -10,
  Books: -5,
  Job: 50,
}

// object1.Pizza = 10  // error: Cannot assign a new value to 'Pizza' because it is a read-only property


// BE AWARE that index signatures are not entirely safe
// because TS cannot know the names of the properties in advance, it will let us try and access a property that does not exist:
console.log(object1.Dave) // returns 'undefined' but doesn't give us an error


// Here's an index signature with a few required properties 
// This signature will allow other properties to be added to an object created with this interface
interface myIndexSignature {
  readonly [key: string]: number  // this is the index signature
  Pizza: number,   // required property
  Books: number,   // required property
  Job: number,     // required property
}

const object2: myIndexSignature = {
  Pizza: 16,
  Books: 8,
  Job: 25,
  Xmas: 100   // not required
}


// Let's see another example
interface Student {
  [key: string]: string | number | number[] | undefined   // we provide undefined because classes is optional 
  name: string,
  GPA: number,  // Grade Point Average
  classes?: number[]  // optional property
}

// Let's create an object from this new interface
const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200]
}

console.log(student.test) // returns 'undefined' because test doesn't exist, but TS lets us try and access it

// let's loop through the object's properties
for (const key in student) {
  console.log(`${key}: ${student[key]}`)
}

// ------------------------------------------------------------------------------------------------

// But how could we iterate through an object that does not have an index signature?
// Thanks to KEYOF ASSERTIONS
interface Sandwich {
  bread: string,
  meat: string,
  cheese: string
}

const mySandwich: Sandwich = {
  bread: "white",
  meat: "chicken",
  cheese: "mozzarella"
}

for (const key in mySandwich) {
  console.log(`${key}: ${mySandwich[key as keyof Sandwich]}`)
}

// keyof creates a union-type of bread | meat | cheese


// To display only the values (white, chicken, mozzarella), we can do this
Object.keys(mySandwich).map(key => {
  console.log(mySandwich[key as keyof typeof mySandwich])   
})

// Object.keys(mySandwich) returns an array of the keys (the properties) in the mySandwich object
// The map() function allows us to log the corresponding values
// we use typeof mySandwich because we pretend we don't know the type of the object (Sandwich)