// Start Create Test Component
import "./Test.css"

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

export default Test;



