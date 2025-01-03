/// <reference types="vite/client" />

// this tells TypeScript tha any import of a .css file should be treated as a module
declare module '*.css' {
  const content: {[className: string]: string}
  export default content
}