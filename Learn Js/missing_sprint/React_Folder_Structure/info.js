// Beginner
/*
    Inside src we create components and inside components create all components
    /my-react-app
    ├── src
    │   ├── components
    │   │   ├── Header.js
    │   │   ├── Footer.js
    │   │   ├── Button.js
    │   │   ├── Home.js
    │   │   ├── About.js
    │   ├── App.js  // Main component
    │   ├── hooks // contain funs like [useFetch, useLocalStorage, ...]
    │   ├── index.js  // Entry point
    └── package.json  // Dependencies
*/



// Intermediate
/*
    Inside src we create more then one folder
    /my-react-app
    ├── src
    │   ├── components    // Reusable UI components
    │   │   ├── Header.js
    │   │   ├── Footer.js
    │   │   ├── Button.js
    │   ├── pages         // Full pages of the app
    │   │   ├── Home.js
    │   │   ├── About.js
    │   ├── hooks         // Custom hooks like useFetch, useLocalStorage
    │   │   ├── useFetch.js
    │   │   ├── useLocalStorage.js
    │   ├── data          // Static data like JSON files
    │   │   ├── products.json
    │   │   ├── users.json
    │   ├── assets        // Images, icons, fonts, etc.
    │   │   ├── logo.png
    │   │   ├── styles.css
    │   ├── App.js        // Main component
    │   ├── index.js      // Entry point
    └── package.json      // Dependencies
*/



// Advanced
/*
/my-react-app
├── src
│   ├── components      // Reusable UI components
│   │   ├── UI
│   │   │   ├── Button.js
│   │   │   ├── Modal.js
│   │   ├── layout
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── Sidebar.js
│   ├── pages           // Full pages
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Dashboard.js
│   ├── hooks           // Custom hooks
│   │   ├── useFetch.js
│   │   ├── useAuth.js
│   ├── contexts        // Context API for global state
│   │   ├── AuthContext.js
│   │   ├── ThemeContext.js
│   ├── store           // Redux, Zustand, or other state management
│   │   ├── index.js
│   │   ├── authSlice.js
│   ├── services        // API calls
│   │   ├── api.js
│   │   ├── authService.js
│   ├── utils           // Helper functions
│   │   ├── formatDate.js
│   │   ├── calculate.js
│   ├── data            // Static data
│   │   ├── products.json
│   ├── assets          // Images, icons, styles
│   │   ├── images
│   │   │   ├── logo.png
│   │   ├── styles.css
│   ├── routes          // Routing management
│   │   ├── index.js
│   │   ├── privateRoutes.js
│   ├── App.js          // Main component
│   ├── index.js        // Entry point
└── package.json        // Dependencies
*/

