src = https://courses.davegray.codes/view/courses/web-dev-roadmap-for-beginners/1702900-industry-tools/5527326-typescript

# Introduction

TypeScript is a superset of JavaScript that can be used to write frontend code or backend code.  
TypeScript compiles to JavaScript, which makes it available for **React** projects, **Node.js** projects, and more!

---

**Side note**:   
- **React** is a widely-used JS library designed for building user interfaces (frontend), particularly for single-page applications (SPAs).  
- **Node.js** is an open-source JS runtime environment that allows developers to execute JavaScript code on the server side (backend).

---

This free 8 hour TypeScript course has 17 chapters and focuses on frontend development with TypeScript.   
It will guide you through learning the TS fundamentals and building two complete projects.  
- Chapters 1-11 are for learning TypeScript fundamentals 
- Chapters 12-17 cover TypeScript with React. 

Save the React chapters until AFTER you have learned React from the course below:
https://courses.davegray.codes/view/courses/web-dev-roadmap-for-beginners/1702941-frontend-web-dev/5379426-react-js

# Chapter 1

Official TypeScript website: https://www.typescriptlang.org/  
TypeScript (TS) is JavaScript (JS) with syntax for **types**.  
It helps you write better JS.  

TS was created by Microsoft.  
TS and C# were both created by the same person named **Anders Hejlberg**.  

In 2024, more than 60% of developers use JS, and almost 40% of them use TS.  
https://survey.stackoverflow.co/2024/technology/  

## Required Tools

TypeScript is integrated into Visual Studio Code very nicely.  

First, you need to install the following packages:
  - **npm**
  - **nodejs**

> [!note]
> npm = Node Package Manager  

That doesn't mean we're going to necessarily write any Node.js (backend), although we could.  
In this tutorial, we will actually focus on frontend and we'll use the React framework.

## Install TypeScript and run the TS compiler

- open a terminal windows in VS code by pressing Ctrl + J
- assuming you already installed the nodejs and npm packages, use the following cmd to install TypeScript:
  - `npm install -g typescript`
  - the `-g` flag is for installing a npm module globally

Verify the installation by checking the TypeScript version:  
`npx tsc --version`

Then, let's create some files in VS code file tree (cf. LESSON01).  

To compile TypeScript files into JavaScript from the terminal: `tsc main.ts`  
This will create a .js file, in our case a main.js file.  

Every time we make a change in our main.ts file, we need to recompile via the `tsc` command.  
To not having to do that with every change, we can run this cmd: `tsc main.ts -w`  
This will run the typescript compiler in **watch** mode, watching for any file changes.  

## TS Project structure

- Typically, in a TypeScript project, you should have a **src** folder directly inside the project folder.  
- And usually, you would also find a **build** folder inside your project folder.

The 'build' folder is where we would have our compiled code, meaning a JS folder and .js files.  
This 'build folder would also include our .html files and .css files.  

And our "raw" code would be stored in the 'src' folder, including our .ts files.  

Here's the typical structure of a basic TS project:  
![TS project structure](image-1.png)  

## tsconfig.json

> [!IMPORTANT]
> **How can we get TypeScript to know all of our .ts files are in the 'src' directory?**  
> **And how does it know where to put the compiled files?**  
> To "inform" TypeScript about our project structure, we use a **tsconfig.json** file.  
> To create this config file, run this cmd from the terminal: `tsc --init`  

The `tsc --init` command is a widely used method to initialize TypeScript projects and create a **tsconfig.json** file.  

In the **tsconfig.json** file, uncomment the `rootDir` line to specify the root folder within your source files:
- `"rootDir": "./src",`  

Then, uncomment the `outDir` line to specify the output folder for all emitted files:
- `"outDir": "./build/js",`

These settings will let the TypeScript compiler (tsc) know:
- where to look for .ts files (input)
- where to store compiled (.js) files (output)

Now we can simply run `tsc -w` to automate the compilation of our .ts files (start compilation in watch mode).  
This will create the 'js' folder inside our 'build' folder if not already existing.  

And if create a new .ts file, this will automatically create the corresponding .js file.  
But if I delete a .ts file, this will not delete the matching .js file.  

---

Another important setting within our **tsconfig.json** file is `"target"`.  
This setting allows us to set the JS language version for emitted JavaScript files.  
The default setting in 2024 is still: `"target": "es2016",`, which stands for **Ecmascript 2016**.  

---

If we create a .ts file outside of our 'src' folder, this will also compile and create a .js file.  
To prevent this behavior and ignore any .ts file created outside of the 'src' directory, we need to add the  
following "include" setting at the very bottom of our **tsconfig.json** file:  
```json
    ...
    "skipLibCheck": true    
  },
  "include": [
    "src"
  ]
}
```  

## Data coercion

JS would let you divide a number by a string because it automatically does type conversion when needed.  
But TS won't let you do that because it's a strongly typed language. Therefore, you'll receive warning messages at compile time.  
Being aware of type errors at compile time prevents us from facing errors at runtime. This is the reason why we need to use TS to write better code.  

To prevent from compiling our TS code to JS code when having type errors, we can uncomment the following line in **tsconfig.json**:  
- `"noEmitOnError": true,`  

# Chapter 2 - Basic types

## Introduction

Strongly typed languages demand the specification of data types. What a shock!  
TypeScript is a strongly typed language where we specify the types of data that we're using.  
That helps to **self-document** and **enforce** our code.  

JavaScript, on the other hand, is a loosely typed language.  

TS is a **statically typed** language. This means types are checked at compile time.  
JS is a **dynamically typed** language. This means types are checked at run time.  

But bear in mind that a strongly typed language can be either statically OR dynamically typed.  

TS benefits include:
- self-documenting code
- catching errors during development (instead of while running the app)
- great for teamwork

## Writing TS code

Our starter code today is the one we finished LESSON01 with. So we'll just rename LESSON01 to LESSON02.  
Before you start to write TS code, don't forget to start the TS compiler in watch mode via the `tsc -w` command.  

Type declarations can be done implicitly, taking advantage of TS ability to infer the data type.  
`let myName = 'Dave'`  

Or it can be done explicitly, by expressly specifying the type.  
`let myName: string = 'Dave'`  

It's completeley okay to take advantage of TS's type inference, but as we learn it's recommended to be explicit.


