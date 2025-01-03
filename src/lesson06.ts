// --------------- CLASSES --------------------

// inside of the class, properties and methods are called "members"

// a class needs a constructor (or more) in order to be instantiated (to create objects from it)

class Coder {
  
  constructor(
    public readonly name: string, 
    public music: string, 
    private age: number, 
    protected lang: string = "TypeScript" // default value for lang
  ) {
    this.name = name      // 'this' refers to the current instance of a class (this object)
    this.music = music
    this.age = age
    this.lang = lang
  }

  // to access private members, we use getters and setters
  public getAge() { return `Hello, I'm ${this.age}.` }
  public setAge(newAge: number): void { this.age = newAge }
}

// Visibility modifiers:
// - public = visible from anywhere
// - readonly = cannot be changed once assigned
// - private = can only be accessed in the class
// - protected = between public and private
//    > subclasses can access protected members of their superclass


// Now let's instantiate our class
const Dave = new Coder('Dave', 'Doom OST', 42) // lang will default to "TypeScript"
console.log(Dave.getAge())

// now let's create a subclass of Coder
class WebDev extends Coder {

  constructor(
    public computer: string,  
    name: string, 
    music: string, 
    age: number
  ) {
    super(name, music, age)  // first, we need to call the constructor of Coder 
    this.computer = computer
  }

  public getLang() { 
    return `I write ${this.lang}`  // returns the default value of lang as set in the superclass constructor
  }
}

const Sara = new WebDev("Arch Linux", "Sara", "Eminem", 43)
console.log(Sara.getLang()) // I write TypeScript
console.log(Sara.getAge()) // Hello, I'm 43.


// -----------------Applying (implementing) an interface to a class--------------------------

// simple interface with 2 properties and one method
interface Musician {
  name: string,
  instrument: string,
  play(action: string): string
}

// now we can use this interface in a class
class Artist implements Musician {
  // with the same properties as the interface (including their type)
  name: string
  instrument: string
  
  constructor(name: string, instrument: string) {
    this.name = name
    this.instrument = instrument
  }

  // and with the same method
  play(action: string) {
    return `${this.name} ${action} ${this.instrument}`
  }
}

const Mike = new Artist("Mike Tyson", "cocky fighters")
console.log(Mike.play("knocks out"))


// ----------------- Static members --------------------------

// a 'static' member is not tied to any instance of the class, but rather to the class itself

class Peeps {
  // static property
  static count: number = 0   

  // static method
  static getCount(): string {
    return `We instantiated the Peeps class ${Peeps.count} times.`   // I refer to the class itself, not using 'this'
  }

  public id: number

  constructor(public name: string) {
    this.name = name
    this.id = ++Peeps.count   // pre-incrementing sets our first id to 1 instead of 0
  }
} 

// Let's instantiate Peeps for a few people
const John = new Peeps("John")
const Wayne = new Peeps("Wayne")
const Personne = new Peeps("Personne")

console.log(Peeps.getCount())  // We instantiated the Peeps class 3 times.
console.log(John.id)  // 1
console.log(Wayne.id) // 2
console.log(Personne.id) // 3


// ------------------getters & setters----------------------

class Band {
  private dataState: string[]

  constructor() {
    this.dataState = []
  }

  public get data(): string[] {
    return this.dataState
  }

  // get is a special keyword we can use to retrieve private data

  public set data(value: string[]) {
    // if value is an array and contains only strings
    if (Array.isArray(value) && value.every(elt => typeof elt === 'string')) { 
      this.dataState = value
    } else throw new Error('passed argument is not an array of strings')
  }

  // set is a special keyword we can use to modify private data
  // we use an if() statement to make sure we only accept the expected data type
}

// Let's instantiate our class
const myBand = new Band()
myBand.data = ['a', 'b', 'c' ,'d', 'e', 'f'] // uses the setter function
console.log(myBand.data)
myBand.data = [...myBand.data, 'g', 'h', 'i'] // using the spread operator to append new elements
console.log(myBand.data)