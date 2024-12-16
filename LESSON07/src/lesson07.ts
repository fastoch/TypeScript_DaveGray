//--------------- Index signatures & keyof assertions -------------------

// Index signatures are useful when you create an object but don't know the exact names of the object keys.
// But you do know the shape of the object and can declare the types of the keys and values.

// The other reason for using index signatures is because TS requires them if you attempt to access an object's property dynamically.
// That second reason is how beginners usually discover the need for index signatures.

// interface without index signature
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


// declaring our index signature
interface TransactionIndexSignature {
  [key: string]: number
}
// note that keys cannot be booleans

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