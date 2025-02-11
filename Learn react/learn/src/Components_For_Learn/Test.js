
// Start Create Test Component
import "./Test.css"


// Fetching API with fetch()

import "./style.css";

import { useRef, useEffect, useState } from "react";

function Test() {
	/*
		fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=f89627d3b9004e27ac2b2a7d1baedaab`)
		.then((res) => {
			let data = res.json();
			return data;
		}).then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log("There Is An Error Here + ", err)
		});
	*/
	const [value, setValue] = useState(false);
	const [Data, setData] = useState(null);
	const Click = () => {
		setValue(true);
	}
	useEffect(() => {
		if (value === true) {
			async function fetchData() {
				const reponse = await fetch('https://api.geoapify.com/v1/ipinfo?apiKey=f89627d3b9004e27ac2b2a7d1baedaab');
				const data = await reponse.json();
				console.log(data);
				setData(data);
			}
			fetchData();
		}
	}, [value]);

	return (
	<div>
		<h1>Hello The API</h1>
		<button onClick={() => Click()}>Fetch</button>
		<div>
			{
				
			}
		</div>
	</div>
	);
}


export default Test;



