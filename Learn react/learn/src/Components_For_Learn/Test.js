// Start Create Test Component
import "./Test.css";
import "./style.css";


// HTTP Method With Fetch() [GET, POST, PUT, DELETE]
import axios from "axios";
import { useRef, useEffect, useState } from "react";

function Test() {
	const [data, setData] = useState([]);
	useEffect(() => {
		console.log(data);
		// GET Method
		fetch("https://reqres.in/api/users?page=2").then((res) => {
			console.log(res);
			return res.json();
		}).then((data) => {
			console.log(data);
		});
		// POST Method
	}, []);
	return (
	<div>
		<h1>Fetching The Data...</h1>
		<div className="emails">
			{
				data.map((data, index) => <p key={index}>{data.email}</p>)
			}
		</div>
	</div>
	);
}
export default Test;

