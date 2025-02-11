// Start Create Test Component
import "./Test.css"


import React, {useState, useEffect} from "react";
function Test(props) {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
 
	const handleResize = () => {
		setWidth(window.innerHeight);
		setHeight(window.innerWidth);
	}
	// Widthout useEffect()
	// window.addEventListener("resize", () => {
	// 	handleResize();
	// });
	// With UseEffect()
	useEffect(() => {
		window.addEventListener("resize", () => {
			handleResize();
			console.log("EVENT LISTENER ADDED");
		});
		return() => {
			window.removeEventListener("resize", handleResize);
			console.log("EVENT LISTENEAR REMOVED");
		}
	}, [width, height]);
	

	return (
		<div>
			<h1>Window Width: {width}px</h1>
			<h1>Window height: {height}px</h1>
		</div>
	);
}

export default Test;



