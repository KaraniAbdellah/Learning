// erasableSyntaxOnly in compiler
/*
    - New versions of Node.js (v20+) can run .ts files directly (without compiling to .js first).
    - Node.Js Does not understand some typescript features [enum, namespace, public in constractor, import = require()]
    - so typescript add new flag --erasableSyntaxOnly
        --> Only allow code that can be removed (erased) and will not confuse Node.js
        --> Stop me if I write code that Node.js won't understand [in other hand]
*/


/* Resume:
    Because Node.js v20+ can run .ts files directly, but it does not support
        all TypeScript features, TypeScript added the flag.
    This flag makes sure we only write TypeScript code that can be erased and will not break Node.js        
*/


/* Node +v20 vs Old Version
    For old version [that are under 20]:
        for run .ts file we need transpiler [convert ts file to js file] --> {tsc index.ts}
    Starting from Node.js version 20:
        Run .ts file without transpiler just by {node index.ts}
*/

// https://www.typescriptlang.org/tsconfig/#erasableSyntaxOnly

