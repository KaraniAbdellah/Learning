// What is React Js
/*
    A free and open-source JavaScript library
    :::::::::::::::::::
    developed by Meta (formerly Facebook).
    :::::::::::::::::::
    React Based on the concept of Component
    :::::::::::::::::::
    Some Concepts:
        Vite: A fast tool to start React projects.
        JSX: A way to write HTML inside JavaScript.
        Components: Small parts of a webpage you can reuse.
        Props: Data you give to components.
        State: Data that changes inside a component.
        Hooks: Special functions, like useState to manage state.
        Virtual DOM: React's way to update only what changes on the page.
    :::::::::::::::::::
    From Component (Button) --> <button>Click Here</button>
        The Switch From Component To tags do by React Not Browser
    :::::::::::::::::::
    Write React code directly without Framworks like Next.js or Remix.
    Use only React and maybe libraries like Vite or Webpack to build your app.
    Handle everything manually, like routing or server tasks.
    :::::::::::::::::::
    Vite: Fast tool for React.
    Next.js: Full framework with more features (Routing, SSR, APIs).
    :::::::::::::::::::
    HOT RELOAD: is a React library used to edit your code and
        automatically reflect that change in your running app
        --> which means you don't need to refresh your browser t see the result
*/




// Installation
/*
    npx create-react-app learn
*/




// React Structure
/*
    public Folder is for assets:
        images, audio files, ...
    
    src Folder is your project
        App.js: is root component that contain all other component

    .gitignore for thing that I do not want to push in github
    package.json && package-lock.json for depencies for the projects
        (like libs that you use)
*/




// Create First Component
/*
    You Create Component By [Function || Class]

    --> Function components are simpler and more lightweight,
        defined as JavaScript functions that return JSX.
    --> Class components provide more control over component
        behavior.
    
    NOTE: for best practice create for each component a file

    import CompoName from "pathToCompon";
        --> this for use this component in other filies
    
    import "FilePath";
        --> this for import filies in react (css, js, ....) filies
    
    import logo from "public/logo.png";
        --> import images
        --> use like: <img src={logo} alt="Logo" />
    
    Nested Component: is component inside another component
*/

// in App.js
function Test( ) {
    return (
      <h1>Hello Test Component</h1>
    );
}
// in Test.js
function Test( ) {
    return (
      <h1>Hello Test Component</h1>
    );
}
export default Test;
// Use this for work with Test Component
import Test from "./Components/Test";




// What JSX
/*
    Is combine HTML code inside Js Code
    This Code:
        return (
        <>
            <h1>Hello Test Component</h1>
        </>
        );
        --> this code for JSX not for HTML

    With JSX format there is a lot of resctriction
        --> use emmet extentions
 
    To Call Component:
        <Test/>
        <Test></Test>

    Inside root eles you should be return just one element

    To Write Javascript Inside JSX Use {}

    Use "className" instead "class"
*/
// Test.js
function Test() {
    let x = 10;
    const person = {
      "name": "abdellah",
      "age": 20
    }
    return (
    <>
        <h3>{person.age}</h3>
        <h1>{person.name} Hello Test Component</h1>
        <p>
        {
            console.log("Hello World" + x + SayHello)
        }
        {
            // this an error because push JS object inside HTML --> Not Supported
            console.log(person.name)
        }
        </p>
    </>
    );
}
function SayHello() {
return "Hello World";
}




// Styling in JSX
/*
    Use Attribute Must write in this format:
        Attribute={Value}
*/

// Test.js
function Test() {
    const eleStyle = {
        color: "blue",
        fontSize: "40px",
    }
    return (
    <>
        <h1 style={eleStyle}>React is Awesome</h1>
        <button onClick={sayHello}>Click</button>
    </>
    );
}
function sayHello() {
alert("Hello World");
}





// Classes in JSX
/*
    ClassName="red": simple notation
    ClassName={"red, green"}: you can add JS code inside Class


    import CSS file use:
        import "PathToCssFile"
*/
// Test.js
import "./Test.css"
function Test() {
  const person = {
    name: "taha"
  }
    return (
      <div className={"box active container"}>
        <h1>Hello World</h1>
        <h1 className={person.name == "taha" ? "greenText": "redText"}>
          Check Name
        </h1>
      </div>
    );
}




// Challenge 1:
/*
    in your App.js
*/
import Header from "./Challenges/challenge1/Header";
import Section from "./Challenges/challenge1/Section";
import Cards from "./Challenges/challenge1/Cards";
import "./Challenges/challenge1/style.css";




// Props || Part 1
/*
    Props is use props with parameters
    Props are objects:
        {
            email: "abdellahkarani@gmail.com"
            link: "google.com"
            name: "Abdellah"
        }
    
    Using Props:
        <Test content="" name="Abdellah" email="abdellahkarani@gmail.com" link="google.com"/>
    
    You can use Default Parameters
*/

// :::::::::: First Example 1
// Test.js
function Test(props) {
    console.log(props); console.log(props.name);
    console.log(props.email); console.log(props.link);
    return (
      <>
        <h1>{props.name}</h1>
        <h3>{props.email}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Qui, tempora.
        </p>
        <a href={props.link}>click here</a>
      </>
    );
}
// App.js
function App() {
  return (
    <div className="app container">
        <Test content="" name="Abdellah" email="abdellahkarani@gmail.com" link="google.com"/>
    </div>
  );
}

// :::::::::: First Example 2
// Test.js
function Test({content="no content", name}) {
    return (
      <>
      <h1>{name}</h1>
        <p>{content}</p>
      </>
    );
}
// App.js
function App() {
  const firstArticle = `
        This is article
        for the people that 
        want to go to France
    `;
    return (
        <div className="app container">
            <Test content={firstArticle}/>
        </div>
    );
}




// Translate Props as JSX
/*
    Children Props are passed inside the component
*/
// App.js
function App() {
    return (
        <div className="app container">
            <Test>
                {/* this ele come to Test function as "Props Children" */}
                <h1 className="greenText">Hello JSX I Am Good</h1>
            </Test>
        </div>
    );
}
function Test(props) {
    const children = props.children;
    return (
      <>
        {children}
      </>
    );
}




// Conditional Redering
/*
	allows you to control what gets redendred in your application
	based on certain conditions (show, hide or change components)
*/
import PropTypes from "prop-types";
function Test(props) {
	const WelcomeMessage = <h2 className="welcome-message">Welcome {props.userName}</h2>;
	const LoginPrompt = <h2 className="login-prompt">You Are not loggedIn {props.userName}</h2>;
	// We can use ternary operator
	return (props.isLoggedIn ? WelcomeMessage: LoginPrompt);
}
Test.propTypes = {
	isLoggedIn: PropTypes.bool,
	userName: PropTypes.string
}
Test.defaultProps = {
	isLoggedIn: false,
	userName: "guest"
}
// App.jsx
function App() {
    return (
        <div>
            <Test isLoggedIn={false} userName="Abdellah"></Test>
        </div>
    );
}




// Render lists
/*
    map(), filter(), sort()
*/
// Test.jsx
function Test(props) {
	let fruits = props.items;
	fruits.sort((a, b) => a.name.localeCompare(b.name));
	fruits = fruits.filter((fruit) => fruit.calories > 30); 
	const listItems = fruits.map((fruit) => 
		<li key={fruit.key}>{fruit.name} -- {fruit.calories}</li>
	);
	return (
		listItems
	);
}
// App.jsx
function App() {
    let fruits = [
        { name: "apple", calories: 23, key: 1 },
        { name: "orange", calories: 40, key: 2 },
        { name: "banana",  calories: 53, key: 3 },
        { name: "coconut",  calories: 90, key: 4 }
    ];
    return (
        <div>
            <Test items={fruits} category="Fruits"></Test>
        </div>
    );
}





// CLick Events
/*
	An Intercation when a user clicks on a specific element.
	We can repond to clicks by passing a callBack to 
	onClick event handler.

	
	onClick={handleClick2("john")} calls the function immediately in rendering the components.
	onClick={() => handleClick2("john")} waits until the button is clicked.
*/
function Test(props) {
	const handleClick = () => console.log("OUCH!!");
	const handleClick2 = (name) => console.log("Stop Clicking Me " + name + "!!!");

	// Event Paramater
	const handleClickEvent = (e) => {
		console.log(e);
		e.target.textContent = "OUACH 🤞!";
	};
	const handleHidden = (e) => e.target.style.display = "none";

	return (
		<div>
			<button onClick={handleClick}>click me😀</button>
			{/* in This Button Before Click you will Show  "Stop Clicking Me john!!!" */}
			<button onClick={handleClick2("john")}>click again😀</button> 
			{/* This Solution here */}
			<button onClick={() => handleClick2("john")}>click again😀</button> 

			<button onDoubleClick={handleClickEvent}>Click Event 👌</button>

			<button onDoubleClick={handleHidden}>Hide Me</button>
		</div>
	);
}





// React Hooks
/*
    Special function that allows functional components
    to use React features without writting class components (React v16.8)
    (useState, useEffect, useContext, useReducer, useCallback, and more ...)

    useState():
        A react Hook that allows the creation of a stateful variable
        And a setter function to update its value in Virtual DOM [name, setName]
*/
import React, {useState} from "react";
function Test(props) {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(20);
    const [isEmployed, setIsEmplyed] = useState(false);

    const updateName = () => {
        setName("SpongeBob");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    const toggleEmployedStatus = () => {
        setIsEmplyed(!isEmployed);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>isEmployed: {isEmployed ? "yes": "no"}</p>

            <button onClick={updateName}>Set Name</button>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={toggleEmployedStatus}>Employed</button>
        </div>
    );
}




// onChange event handler
/*
    OnChange = event handler used primarly with form element
        ex. <input>, <select>, <radio>, .....
        Trigger a function every time the value of input changes
*/

// Test.jsx
function Test(props) {
    const [name, setName]  = useState("task");
    const HandleNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    return (
        <div>
            <label>Name: </label>
            <input value={name} onChange={(e) => HandleNameChange(e)} type="text" />
            <h3>Your Name: {name}</h3>
        </div>
    );
}





// Updater Function in React
/*
    A function passed as an argument to setState() usually
        ex. setYear(Year + 1) ==> setYear(Updater Function) ==> setYear(y => y + 1) 
        Allow for safe updates based on the previous state
        Used with multiple state updates and asynchrouns functions
        GOOD Practice to use updater functions
    
    - In This Example Will Increment Just One Time
        const HandleIncre = () => {
            setCount(count + 1);
            setCount(count + 1);
        }
*/
import React, {useState} from "react";
function Test(props) {
    const [count, setCount] = useState(0);
    const HandleDec = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    const HandleReset = () => {
        setCount(c => c = 0);
    }
    const HandleIncre = () => {
        // Takes a Current State to calculate the next State
        // React puts your updater function in queue (waitin in line)
        // During the next render , React will call them in same order
        setCount(function (count) {
            return count + 1;
        });
        setCount((count) => count + 1);
    }
    return (
        <div>
            <h1>count = {count}</h1>
            <button onClick={HandleDec}>Decrement</button>
            <button onClick={HandleReset}>Reset</button>
            <button onClick={HandleIncre}>Increment</button>
        </div>
    );
}





// Update Objects in state
/*
    use ...PrevCar and Updater Function and ()
        in arrow function if I use {} ==> javascript except multilple lines
            ex: (prevCar) => {...prevCar, make: e.target.value}
*/
import React, {useState} from "react";
function Test(props) {
    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});

    const HandleMakeChange = (e) => {
        setCar(prevCar => ({...prevCar, make: e.target.value}));
    }
    const HandleModelChange = (e) => {
        setCar(prevCar => ({...prevCar, model: e.target.value}));
    }
    const HandleYearChange = (e) => {
        setCar(prevCar => ({...prevCar, year: e.target.value}));
    }

    return (
        <div>
            <p>Your favorite Car is: {car.make} {car.model} @{car.year}</p>
            <input onChange={(e) => HandleMakeChange(e)} defaultValue={car.make} type="text"/>
            <input onChange={(e) => HandleModelChange(e)} type="text" defaultValue={car.model}/>
            <input onChange={(e) => HandleYearChange(e)} type="text" defaultValue={car.year}/>
        </div>
    );
}





// Update Arrays in State 
function Test(props) {
    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);
    async function handleAddEle() {
        const newFood = document.getElementById("foodInput");
        await setFoods((foods) => [...foods, newFood.value]);
        newFood.value = "";
    }
    const handleRemoveEle = (index) => {
        setFoods(foods.filter((_, i) => i !== index));
    }
    return (
        <div>
            <h1>List Of Foods: </h1>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveEle(index)}>{food}</li>)}
            </ul>
            <div className="submit">
                <input type="text" id="foodInput" placeholder="Enter your favorite food"/>
                <button onClick={handleAddEle}>Add Food</button>
            </div>
        </div>
    );
}




// Update Array Of Objects
function Test(props) {
    const [cars, setCars] = useState([{year: 2024, name: "Musting", model: "Ford"}]);
    const handleAddCar = () => {
        const yearName = document.getElementById("yearInput");
        const carName = document.getElementById("carInput");
        const modelName = document.getElementById("modelInput");

        const newCar = {
            year: yearName.value,
            name: carName.value,
            model: modelName.value
        }
        setCars((cars) => [...cars, newCar]);
    }
    const handleRemove = (index) => {
        setCars(cars.filter((_, i) => i !== index));
    }
    return (
        <div>
            <h2>List Car Objects: </h2>
            <ul>
                {cars.map((car, index) => <li onClick={() => handleRemove(index)} key={index}>@{car.year} {car.name} {car.model}</li>)}
            </ul>
            <input type="text" id="yearInput" placeholder="Enter Year..."/>
            <input type="text" id="carInput" placeholder="Enter Car Name..."/>
            <input type="text" id="modelInput" placeholder="Enter Model..."/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}




// UseEffect()
/*
	UseEffect() = React Hook that tells React  Do Some Code When (pick one):
		This Component Re-render
		This Component mounts
		The state of a value
	USES:
		#1 Event Listeners
		#2 Dom Manipulation
		#3 Subscriptions (real-time updates)
		#4 Fetching Data from API
		#5 Clean Up When a Components unmount
	
	useEffect(() => {}) // Runs after every re-render
	useEffect(() => {}, []) // Runs only on mount
	useEffect(() => {}, [value]) // Runs on mount + when value changes

    NOTE: "We Can Add Another UseEffect()"
*/
import React, {useState, useEffect} from "react";
function Test(props) {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    const addCount = () => {
        setCount(count => count + 1);
    }
    const subtract = () => {
        setCount((count) => count - 1);
    }
    const changeColor = () => {
        setColor((color) => color === "green" ? "red": "green");
    }
    // Each Time Re-render I Would Do This
    /*
        Without Dependecies Each Render The Values Change
        with Count in Depencies --> if count or color change --> update the title
    */
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
        document.body.style.backgroundColor = color;
        // Clean Up Function
        return () => {
            // Some Clean Up Code
        }
    }, [count, color]);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => addCount()}>Add</button>
            <button onClick={() => subtract()}>Subtract</button><br />
            <button onClick={() => changeColor()}>Change Color</button>
        </div>
    );
}
// Another Example
import React, {useState, useEffect} from "react";
function Test(props) {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
 
    const handleResize = () => {
        setWidth(window.innerHeight);
        setHeight(window.innerWidth);
    }
    // Widthout useEffect()
    window.addEventListener("resize", () => {
    	handleResize();
    });
    // With UseEffect()
    useEffect(() => {
        window.addEventListener("resize", () => {
            handleResize();
            console.log("EVENT LISTENER ADDED");
        });
    }, [width, height]);
    

    return (
        <div>
            <h1>Window Width: {width}px</h1>
            <h1>Window height: {height}px</h1>
        </div>
    );
}







// useContxt()
/*
	React Hook that alow you share values between multiple levels
		of components without passing props through each level.
	
		
	// PROVIDER COMPONENTS
		import {createContext} from "react";
		export const MyContext = createContext()
		<MyContext.Provider value = {value}>
			<Child/>
		<MyContext.Provider>

	// CONSUMER COMPONENTS
		import React, {useContext} from "react";
		import { MyContext } from "./ComponentA";
		const value = useContext(MyContext);
*/
// Test.jsx
import CompA from "./CompA";
import "./style.css";

import React, {useState, useEffect, useContext} from "react";
function Test(props) {
    const [user, setUser] = useState();
    return (
        <div>
            <CompA></CompA>
        </div>
    );
}
// Comp1.jsx
import React, {useState, createContext} from 'react';
import CompB from './CompB';
export const UserContext = createContext();
function CompA() {
    const [user, setUser] = useState("Abdellah");
    return (
        <div>
            <h3>
                Hello CompA
                <UserContext.Provider value={user}>
                    <CompB user={user}></CompB>
                </UserContext.Provider>
            </h3>
        </div>
    );
}

// CompB.jsx
import React, { useContext } from 'react';
import CompC from './CompC';
import { UserContext } from './CompA';
function CompB() {
    const user = useContext(UserContext);
  return (
    <div>
        <h3>
            Hello CompB
            <h4>By {user}</h4>
            <CompC></CompC>
        </h3>
    </div>
  )
}

// CompC.jsx
import React, {useContext} from 'react';
import { UserContext } from './CompA'; // Location of UserContext
function CompC() {
    const user = useContext(UserContext);
    return (
    <div>
        <h3>
            Hello CompC
            <h4>By {user}</h4>    
        </h3>
        
    </div>
)
}






// 

