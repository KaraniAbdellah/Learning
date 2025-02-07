// Start Create Test Component
import "./Test.css"

// Update Ararays in State 


import React, {useState} from "react";
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

export default Test;



