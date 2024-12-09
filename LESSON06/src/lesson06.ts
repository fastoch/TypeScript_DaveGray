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
    this.name = name
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


// Applying (implementing) an interface to a class

// simple interface with 2 properties and one method
interface Musician {
  name: string,
  instrument: string,
  play(action: string): string
}

class Artist implements Musician {
  name: string
  instrument: string
  
  constructor(name: string, instrument: string) {
    this.name = name
    this.instrument = instrument
  }

  play(action: string) {
    return `I ${action} ${this.instrument}`
  }
}
