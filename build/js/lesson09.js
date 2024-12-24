"use strict";
// ----------UTILITY TYPES ----------------
// We create a function to update some of the properties of a given Assignment object
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate); // overwrite the properties with provided values
};
// le'ts create an assignment object
const assign1 = {
    studentId: 'f001',
    title: "Final Project",
    grade: 0
};
// let's log the assignment to the console before and after updating it
console.log(assign1);
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
// 2. Required & Readonly
// In this function, all properties are required, including the optional one (verified)
const recordAssignment = (assign) => {
    // some logi to send the assignment to a database 
    return assign;
};
// now let's create a verified assignment that will be readonly 
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// Readonly properties cannot be overwritten
// We need to add a value to the 'verified' property, otherwise we couldn't record assignVerified.
// Likewise, we couldn't record assignGraded. but we could do the following:
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// 3. Record (a very popular utility type)
// in the following object, keys (or properties) will be strings and values will be strings
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Sarah: "A",
    Kelly: "U"
};
const gradeData = {
    Sarah: { assign1: 16, assign2: 14 },
    Kelly: { assign1: 8, assign2: 10 }
};
// we have picked what we want to use from our Assignment interface
const score = {
    studentId: "p002",
    grade: 82
};
// Omit will do the opposite
