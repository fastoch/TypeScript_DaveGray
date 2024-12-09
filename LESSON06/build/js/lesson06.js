"use strict";
// --------------- CLASSES --------------------
// inside of the class, properties and methods are called "members"
// a class needs a constructor (or more) in order to be instantiated (to create objects from it)
class Coder {
    constructor(name, music, age, lang = "TypeScript" // default value for lang
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    // to access private members, we use getters and setters
    getAge() { return `Hello, I'm ${this.age}.`; }
    setAge(newAge) { this.age = newAge; }
}
// Visibility modifiers:
// - public = visible from anywhere
// - readonly = cannot be changed once assigned
// - private = can only be accessed in the class
// - protected = between public and private
//    > subclasses can access protected members of their superclass
// Now let's instantiate our class
const Dave = new Coder('Dave', 'Doom OST', 42); // lang will default to "TypeScript"
console.log(Dave.getAge());
// now let's create a subclass of Coder
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age); // first, we need to call the constructor of Coder + all wanted members
        this.computer = computer;
        this.computer = computer;
    }
}
