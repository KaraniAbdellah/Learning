// Start Create Test Component
import "./Test.css";
import "./style.css";


// HTTP Method in Axios [GET, POST, PUT, DELETE]
import axios from "axios";
import { useRef, useEffect, useState } from "react";

function Test() {
	const [data, setData] = useState([]);
	useEffect(() => {
		// Get Method
		axios.get("https://reqres.in/api/users?page=2").then((res) => {
			setData(res.data.data);
			console.log(res.data.data);
		}).catch((err) => {
			console.log(err);
		});
		// Post Method
		axios.post("https://reqres.in/api/users", {
			"name": "Abdellah",
			"job": "Developer"
		}).then(res => console.log(res)).catch((err) => console.log(err));
		// PUT Method
		axios.post("https://reqres.in/api/users/2", {
			"name": "Abdellah",
			"job": "Developer"
		}).then(res => console.log(res)).catch((err) => console.log(err));
		// DELETE Method
		axios.delete("https://reqres.in/api/users/2").
		then(res => console.log(res))
		.catch((err) => console.log(err));
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

