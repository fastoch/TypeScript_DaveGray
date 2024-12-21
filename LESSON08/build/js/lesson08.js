"use strict";
// ----------------------------Chapter 8: GENERICS-----------------------------------------------
/*
The whole idea behind TypeScript is to define strict types for a type-safe developer experience.
To achieve that, we're usually as detailed as possible.
However, TS does allow for GENERICS, because sometimes we simply don't know what types will be
passed into a function/interface/type alias/class...
Generics allow us to provide a placeholder, a type "variable" if you will.
*/
// What if want to abstract the type out of this function? 
const stringEcho = (arg) => {
    return arg;
};
// To make it generic so it accepts any type, we could write it like that
const echo = (arg) => {
    return arg;
};
// Example 2
const isObject = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
    // we need to exclude arrays and null because they are considered to be of type object 
};
console.log(isObject(32)); //false
console.log(isObject("32")); //false
console.log(isObject(true)); //false
console.log(isObject([1, 2, 3])); //false
console.log(isObject(null)); //false
console.log(isObject({ age: 16, sex: "female" })); //true
// Example 3
const isTrue = (arg) => {
    // if the argument is an empty array
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    // if the argument is an empty object
    if (isObject(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
// The !! operator converts a value to its boolean equivalent.
// Now, let's test this function
console.log(isTrue(32)); // { arg: 32, is: true }
console.log(isTrue(0)); // { arg: 0, is: false }
console.log(isTrue("32")); // { arg: "32", is: true }
console.log(isTrue("")); // { arg: "", is: false }
console.log(isTrue(true)); // { arg: true, is: true }
console.log(isTrue([])); // { arg: [], is: false }
console.log(isTrue([1, 2, 3])); // { arg: [1,2,3], is: true}
console.log(isTrue({})); // { arg: {}, is: false }
console.log(isTrue(null)); // { arg: null, is: false }
console.log(isTrue({ age: 16, sex: "female" })); // { arg: { age: 16, sex: "female" }, is: true }
console.log(isTrue(undefined)); // { arg: undefined, is: false }
console.log(isTrue(null)); // { arg: null, is: false }
console.log(isTrue(NaN)); // { arg: NaN, is: false }
// Now let's rewrite our previous function
const checkBoolValue = (arg) => {
    // if the argument is an empty array
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    // if the argument is an empty object
    if (isObject(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process the user with logic here
    return user;
};
// this function will accept any object as long as it has an 'id' property
console.log(processUser({ id: 1, name: 'fastoch' }));
// console.log(processUser({ name: 'fastoch'}))
// Example 5: building K as a key of the type T
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
// Picture T as a user object that has an id, and K as a key (property) of that object
// We provide an array of user objects (src = https://jsonplaceholder.typicode.com/users)
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
];
// And now we can test our function to retrieve the email address of every user
console.log(getUsersProperty(usersArray, "email"));
