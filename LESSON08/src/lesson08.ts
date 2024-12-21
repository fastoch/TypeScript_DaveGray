// ----------------------------Chapter 8: GENERICS-----------------------------------------------

/*
The whole idea behind TypeScript is to define strict types for a type-safe developer experience.
To achieve that, we're usually as detailed as possible.
However, TS does allow for GENERICS, because sometimes we simply don't know what types will be 
passed into a function/interface/type alias/class...
Generics allow us to provide a placeholder, a type "variable" if you will.
*/

// What if want to abstract the type out of this function? 
const stringEcho = (arg: string): string => {
  return arg
}

// To make it generic so it accepts any type, we could write it like that
const echo = <T>(arg: T): T => {
  return arg
}


// Example 2
const isObject = <T>(arg: T): boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
  // we need to exclude arrays and null because they are considered to be of type object 
}
console.log(isObject(32))       //false
console.log(isObject("32"))     //false
console.log(isObject(true))     //false
console.log(isObject([1,2,3]))  //false
console.log(isObject(null))     //false
console.log(isObject({age: 16, sex: "female"})) //true


// Example 3
const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
  // if the argument is an empty array
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false }
  }
  // if the argument is an empty object
  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false }
  }
  return { arg, is: !!arg}
}
// The !! operator converts a value to its boolean equivalent.

// Now, let's test this function
console.log(isTrue(32))         // { arg: 32, is: true }
console.log(isTrue(0))          // { arg: 0, is: false }
console.log(isTrue("32"))       // { arg: "32", is: true }
console.log(isTrue(""))         // { arg: "", is: false }
console.log(isTrue(true))       // { arg: true, is: true }
console.log(isTrue([]))         // { arg: [], is: false }
console.log(isTrue([1,2,3]))    // { arg: [1,2,3], is: true}
console.log(isTrue({}))         // { arg: {}, is: false }
console.log(isTrue(null))       // { arg: null, is: false }
console.log(isTrue({age: 16, sex: "female"})) // { arg: { age: 16, sex: "female" }, is: true }
console.log(isTrue(undefined))  // { arg: undefined, is: false }
console.log(isTrue(null))       // { arg: null, is: false }
console.log(isTrue(NaN))        // { arg: NaN, is: false }

// We could have created an interface to simplify our last example
interface BoolCheck<T> {
  value: T,
  is: boolean
}

// Now let's rewrite our previous function
const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  // if the argument is an empty array
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false }
  }
  // if the argument is an empty object
  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false }
  }
  return { value: arg, is: !!arg}
}


// Example 4: narrowing a generic type
interface HasID {
  id: number
}

const processUser = <T extends HasID>(user: T): T => {
  // process the user with logic here
  return user
} 
// this function will accept any object as long as it has an 'id' property

console.log(processUser({ id: 1, name: 'fastoch'}))
// console.log(processUser({ name: 'fastoch'}))


// Example 5: building K as a key of the first type
const getUsersproperty = <T extends HasID, K extends keyof T>() => {

}