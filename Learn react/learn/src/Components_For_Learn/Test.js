// Start Create Test Component
import "./Test.css"


// Redering a List


function Test(props) {
	let fruits = props.items;

	fruits.sort((a, b) => a.name.localeCompare(b.name));
	fruits = fruits.filter((fruit) => fruit.calories > 30); 
	console.log(fruits);

	const listItems = fruits.map((fruit) => 
		<li key={fruit.key}>{fruit.name} -- {fruit.calories}</li>
	);
	
	return (
		listItems
	);
}

export default Test;
