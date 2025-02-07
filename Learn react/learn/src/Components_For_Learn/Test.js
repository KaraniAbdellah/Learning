// Start Create Test Component
import "./Test.css"

// Update Ararays in State 


import React, {useState} from "react";
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

export default Test;



