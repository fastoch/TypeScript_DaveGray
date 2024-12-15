//--------------- Index signatures & keyof assertions -------------------

// Index signatures are useful when you create an object but don't know the exact names of the object keys.
// But you do know the shape of the object and can declare the type of the keys and values.

// The other reason for using index signatures is because TS requires them if you attempt to access an object's property dynamically.

interface transactionObj {
  
}