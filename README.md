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
> **But how can we get TypeScript to know all of our .ts files are in the 'src' directory?**  
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

# Chapter 2



---
@14:00