"use strict";
//--------------- Index signatures & keyof assertions -------------------
// now let's create an object from the above interface
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(`Pizza property without index signature: ${todaysTransactions.Pizza}`); // -10
console.log(`Pizza property without index signature: ${todaysTransactions['Pizza']}`); // -10
// note that keys cannot be booleans
// now let's define an object from this new interface
const todaysOperations = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
// accessing the same 'Pizza' property dynamically thanks to the index signature
let prop = 'Pizza';
console.log(`Pizza property dynamically accessed: ${todaysOperations[prop]}`); // -10
// with our index signature, we can also loop through the properties
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(`Dynamically accessing all properties: ${todaysNet(todaysOperations)}`); // 35