"use strict";
// ----------UTILITY TYPES ----------------
// We create a function to update some of the properties of a given Assignment object
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate); // overwrite the properties with provided values
};
// le'ts create an assignment object
const assign1 = {
    studentId: '001',
    title: "Final Project",
    grade: 0
};
console.log(assign1);
console.log(updateAssignment(assign1, { grade: 95 }));
