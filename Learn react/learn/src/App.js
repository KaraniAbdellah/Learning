import Test from "./Components_For_Learn/Test.js";
import "./Components_For_Learn/Test.css";

// Start React Router
/*
	- React Router is a library for handling routing and navigation in React JS Applications.
		without the need for a full-page refresh.

	- NON-React App:
		When I Click To button to go to about.html
		browser send a request to the server and server
		give the browser about.html and then browser render the file by creating a TREES.

	- React-App (SPA):
        ** Initial Request: The browser initially requests the React app
        ** Routing in React: When you click a button or navigate to a different "page" 
            (like the About page), React handles the routing on the client side 
            using libraries like React Router. 
        ** No Full Request to Server: React does not send a request for a new HTML page.
        ** Rendering via React: The React app re-renders specific components 
            (like the About section)

	- Installation:
		npm i -D react-router-dom
		If you are upgrading from v5, you will need to use the @latest flag:
			--> npm i -D react-router-dom@latest

    - Router Types
        "Router Used in index.js"
        import { BrowserRouter, HashRouter, MemoryRouter, Static } from 'react-router-dom';
        "By Used Router Type We Enable Clien-Side Routing in a React app"

        ** usetable_HistoryRouter: Helps navigate between pages in React using a function.
        ** BrowserRouter: Uses the browser's history to change pages with clean URLs.
        ** HashRouter: Uses a # in the URL to change pages, mainly for old browsers.
        ** MemoryRouter: Keeps track of page changes in memory without changing the URL.


    - index.js
        <React.StrictMode>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </React.StrictMode>
    
*/
import { useRef, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Import Essentiel Components
import Home from "./Components_For_Learn/CompoForRouter/Home.jsx";
import Contact from "./Components_For_Learn/CompoForRouter/Contact.jsx";
import About from "./Components_For_Learn/CompoForRouter/About.jsx";

function App() {
    return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/about" element={<About />}/>
        </Routes>    
    </div>
    );
}

export default App;