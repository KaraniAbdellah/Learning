
// Start Create Test Component
import "./Test.css"



import "./style.css";
import axios from "axios";


import { useRef, useEffect, useState } from "react";

function Test() {
	let apiKey = 'https://api.geoapify.com/v1/ipinfo?apiKey=f89627d3b9004e27ac2b2a7d1baedaab';
	axios.get(apiKey).then(response => {
		console.log(response.data);
	}).catch((err) => {
		console.log("Error!!!");
	});
	return (
	<div>
		<h1>Hello The API</h1>
		<button>Fetch</button>
	</div>
	);
}


export default Test;



