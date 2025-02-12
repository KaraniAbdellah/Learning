// Start Create Test Component
import "./Test.css";
import "./style.css";


// HTTP Method With Fetch() [GET, POST, PUT, DELETE]
import axios from "axios";
import { useRef, useEffect, useState } from "react";

function Test() {
	const [data, setData] = useState([]);
	useEffect(() => {
		// GET Method [By Default Fetch Make GET]
		function FetchGet() {
			console.log("////////////// GET");
			fetch("https://reqres.in/api/users?page=2").then((res) => {
				console.log(res);
				return res.json();
			}).then((data) => {
				console.log(data.data);
				setData(data.data);
			});
		}

		// POST Method
		function FetchPost() {
			console.log("////////////// POST");
			fetch("https://reqres.in/api/users?page=2", {
				method: "POST",
				headers:  {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: "Abdellah",
					job: "Developer",
				})
			}).then((res) => {
				console.log(res);
				return res.json();
			}).then((data) => {
				console.log(data);
			});
		}

		// PUT Method
		function FetchPut() {
			console.log("////////////// PUT");
			const requestOptions = {
				method: "PUT",
				headers: {
					"Content-Type": "applications/json"
				},
				body: JSON.stringify({
					name: "Abdellah",
					job: "Developer",
				}),
			};
			fetch("https://reqres.in/api/users/page/2", requestOptions)
			.then((res) => {
				return res.json();
			}).then((data) => {
				console.log(data);
			})
		}

		// DELETE Method
		function FetchDelete() {
			fetch("https://reqres.in/api/users/2", {
				method: "DELETE",
			}).then((res) => {
				console.log(res);
				res.ok ? console.log("User deleted successfully") : console.log("Error deleting user");
			}).catch((err) => console.log(err));
		}
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

