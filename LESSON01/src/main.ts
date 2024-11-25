let username = 'Dave'
console.log(username)

let a = 12
let b = '6'
let c = 2

// JS doesn't mind data coercion, but TS does
console.log(a / b) // this is valid JS and outputs 2, but TS won't let you do this