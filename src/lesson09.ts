// ----------UTILITY TYPES ----------------

// TS offers many utility types that are heplful for common type transformations.

// 1. Partial

interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean
}

// We create a function to update some of the properties of a given Assignment object
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return {...assign, ...propsToUpdate } // overwrite the properties with provided values
}

// le'ts create an assignment object
const assign1: Assignment = {
  studentId: '001',
  title: "Final Project",
  grade: 0
}

console.log(assign1) 
console.log(updateAssignment(assign1, { grade: 95 })) 