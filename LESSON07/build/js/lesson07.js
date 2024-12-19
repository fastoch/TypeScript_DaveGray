"use strict";
//--------------- Index signatures & keyof assertions -------------------
// now let's create an object from the above interface
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
// 2 ways of accessing the same property
console.log(`Pizza property without index signature: ${todaysTransactions.Pizza}`); // -10
console.log(`Pizza property without index signature: ${todaysTransactions['Pizza']}`); // -10
// note that keys cannot be booleans, and the word 'key' can be replaced with 'index' > index signature
// now let's define a similar object from this new interface
const todaysOperations = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
// accessing the same 'Pizza' property dynamically thanks to the index signature
let prop = 'Pizza';
console.log(`Pizza property dynamically accessed: ${todaysOperations[prop]}`); // -10
// with our index signature, we can also loop through the properties (dynamic access)
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
// display the sum of all transactions
console.log(`Dynamically accessing all properties: ${todaysNet(todaysOperations)}`); // 35
// let's create an object with this read-only index signature
const object1 = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
// object1.Pizza = 10  // error: Cannot assign a new value to 'Pizza' because it is a read-only property
// BE AWARE that index signatures are not entirely safe
// because TS cannot know the names of the properties in advance, it will let us try and access a property that does not exist:
console.log(object1.Dave); // returns 'undefined' but doesn't give us an error
const object2 = {
    Pizza: 16,
    Books: 8,
    Job: 25,
    Xmas: 100 // not required
};
// Let's create an object from this new interface
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
console.log(student.test); // returns 'undefined' because test doesn't exist, but TS lets us try and access it
// let's loop through the object's properties
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
const mySandwich = {
    bread: "white",
    meat: "chicken",
    cheese: "mozzarella"
};
for (const key in mySandwich) {
    console.log(`${key}: ${mySandwich[key]}`);
}
// keyof creates a union-type of bread | meat | cheese
// To display only the values (white, chicken, mozzarella), we can do this
Object.keys(mySandwich).map(key => {
    console.log(mySandwich[key]);
});
// Object.keys(mySandwich) returns an array of the keys (the properties) in the mySandwich object
// The map() function allows us to log the corresponding values
// we use typeof mySandwich because we pretend we don't know the type of the object (Sandwich)
