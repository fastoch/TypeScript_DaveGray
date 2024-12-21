"use strict";
// ----------------------------Chapter 8: GENERICS-----------------------------------------------
/*
The whole idea behind TypeScript is to define strict types for a type-safe developer experience.
To achieve that, we're usually as detailed as possible.
However, TS does allow for GENERICS, because sometimes we simply don't know what types will be
passed into a function/interface/type alias/class...
Generics allow us to provide a placeholder, a type "variable" if you will.
*/
// What if want to abstract the type out of this function? 
const stringEcho = (arg) => {
    return arg;
};
// To make it generic so it accepts any type, we could write it like that
const echo = (arg) => {
    return arg;
};
// Example 2
const isObject = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
    // we need to exclude arrays and null because they are considered to be of type object 
};
console.log(isObject(32)); //false
console.log(isObject("32")); //false
console.log(isObject(true)); //false
console.log(isObject([1, 2, 3])); //false
console.log(isObject(null)); //false
console.log(isObject({ age: 16, sex: "female" })); //true
// Example 3
const isTrue = (arg) => {
    // if the argument is an empty array
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    // if the argument is an empty object
    if (isObject(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
// The !! operator converts a value to its boolean equivalent.
// Now, let's test this function
console.log(isTrue(32)); // { arg: 32, is: true }
console.log(isTrue(0)); // { arg: 0, is: false }
console.log(isTrue("32")); // { arg: "32", is: true }
console.log(isTrue("")); // { arg: "", is: false }
console.log(isTrue(true)); // { arg: true, is: true }
console.log(isTrue([])); // { arg: [], is: false }
console.log(isTrue([1, 2, 3])); // { arg: [1,2,3], is: true}
console.log(isTrue({})); // { arg: {}, is: false }
console.log(isTrue(null)); // { arg: null, is: false }
console.log(isTrue({ age: 16, sex: "female" })); // { arg: { age: 16, sex: "female" }, is: true }
console.log(isTrue(undefined)); // { arg: undefined, is: false }
console.log(isTrue(null)); // { arg: null, is: false }
console.log(isTrue(NaN)); // { arg: NaN, is: false }
