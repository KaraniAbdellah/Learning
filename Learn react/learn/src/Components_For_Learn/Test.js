// Start Create Test Component
import "./Test.css"

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

export default Test;



