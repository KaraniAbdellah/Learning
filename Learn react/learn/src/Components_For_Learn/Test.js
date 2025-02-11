
// Start Create Test Component
import "./Test.css"


// useRef()
/*
	useRef(): "use Refrence" Does not cause re-renders when it values changes.
		When you want a component to "remember" some information,
		but you don't want that that information to trigger new renders.

		1. Accessing/Interacting/ with DOM elements
		2. Handling Focus, Animations and Transitions
		3. Managing TImers, and Itervals
	
	
	// Without Ref:
		const [number, setNumber] = useState(0);
		const handleClick = () => {
			console.log(number);
			setNumber(n => n + 1);
		}
		<button onClick={() => handleClick()}>Click Me!</button>
	
	NOTE: I can link ref with value and also with element
		<input ref={InputRef} type="text"/>
*/

import "./style.css";

import { useRef, useEffect } from "react";

function Test() {
	const inputRef = useRef(null);

	useEffect(() => {
	console.log("COMPONENT RENDERED");
	});

	const handleClick = () => {
	if (inputRef.current) {
		inputRef.current.style.backgroundColor = "yellow";
	}
	};

	return (
	<div>
		<input ref={inputRef} type="text" />
		<button onClick={handleClick}>Click Me!</button>
	</div>
	);
}


export default Test;



