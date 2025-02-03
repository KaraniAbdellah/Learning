// Start Create Test Component
import "./Test.css"


// Redering a List


function Test(props) {
	const fruits = [
		{ name: "apple", key: 1 },
		{ name: "orange", key: 2 },
		{ name: "banana", key: 3 },
		{ name: "coconut", key: 4 }
	];

	const listItems = fruits.map((fruit) => 
		<li key={fruit.key}>{fruit.name}</li>
	);
	
	return (
		listItems
	);
}

export default Test;
