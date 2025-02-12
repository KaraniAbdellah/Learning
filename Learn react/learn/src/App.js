import Test from "./Components_For_Learn/Test.js";
import "./Components_For_Learn/Test.css";
import { useRef, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Import Essentiel Components
import Home from "./Components_For_Learn/CompoForRouter/Home.jsx";
import Contact from "./Components_For_Learn/CompoForRouter/Contact.jsx";
import About from "./Components_For_Learn/CompoForRouter/About.jsx";
import AboutLayout from "./Components_For_Learn/CompoForRouter/AboutLayout.jsx";


function App() {
    return (
    <div>
        <nav>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<AboutLayout />}>
                <Route index element={<About />}></Route>
                <Route path=":id" element={<About />}></Route>
            </Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
    </div>
    );
}

export default App;