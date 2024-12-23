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
  studentId: 'f001',
  title: "Final Project",
  grade: 0
}

// let's log the assignment to the console before and after updating it
console.log(assign1) 
const assignGraded = updateAssignment(assign1, { grade: 95 })
console.log(assignGraded) 


// 2. Required & Readonly

// In this function, all properties are required, including the optional one (verified)
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // some logi to send the assignment to a database 
  return assign
}

// now let's create a verified assignment that will be readonly 
const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }
// Readonly properties cannot be overwritten

// We need to add a value to the 'verified' property, otherwise we couldn't record assignVerified.
// Likewise, we couldn't record assignGraded. but we could do the following:
recordAssignment({ ...assignGraded, verified: true })


// 3. Record (a very popular utility type)

// in the following object, keys (or properties) will be strings and values will be strings
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF"
}

// But we can also create string literal types
type Students = "Sarah" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
  Sarah: "A",
  Kelly: "U"
}

// we can also do that with an interface
interface Grades {
  assign1: number,
  assign2: number
}

const gradeData: Record<Students, Grades> = {
  Sarah: { assign1: 16, assign2: 14 },
  Kelly: { assign1: 8, assign2: 10 }
}


// 4. Pick & Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">
// we have picked what we want to use from our Assignment interface

const score: AssignResult = {
  studentId: "p002",
  grade: 82
}

// Omit will do the opposite
