// React Compiler vs Ts Compiler
/*
    React Compiler:
        Takes TypeScript code (.ts, .tsx)
        Converts it into JavaScript code (.js)
        Checks types and errors
        Output is pure JavaScript your browser or Node.js can run

    Ts Compiler:
        Takes JavaScript + JSX + TypeScript code
        Converts JSX and TypeScript into plain JavaScript
        Transforms modern JS syntax to older JS for browser support
        Bundles all your files into a few .js files for the browser

    TS Compiler with React Compiler:
        You write React code in .tsx files (React + TypeScript).
        Vite uses plugins to do two main jobs:
            Compile React’s JSX + TypeScript into JavaScript.
                This is done by esbuild, Babel or WebPack inside Vite.
            Bundle and serve your code fast for the browser.
        So Vite is like a fast builder that calls the right tools to turn your React+TS code into JavaScript the browser understands.
*/

// How it Works
/*
    - Vite runs on Node.js
    - When we run Vite, it looks your node_modules to find Babel, Other Plunigs and Dependicies 
*/

