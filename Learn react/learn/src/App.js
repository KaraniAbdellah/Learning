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

    - index.js
        <React.StrictMode>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </React.StrictMode>
        "Enable Clien-Side Routing in a React app"
*/
import { useRef, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";


function App() {
    return (
        <div>
            <h1>Hello React Router</h1>
        </div>
    );
}

export default App;