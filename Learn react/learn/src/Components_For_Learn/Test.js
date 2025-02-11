// Start Create Test Component
import "./Test.css"


// useContxt()
/*
	React Hook that alow you share values between multiple levels
		of components without passing props through each level.
	
		
	// PROVIDER COMPONENTS
		import {createContext} from "react";
		export const MyContext = createContext()
		<MyContext.Provider value = {value}>
			<Child/>
		<MyContext.Provider>

	// CONSUMER COMPONENTS
		import React, {useContext} from "react";
		import { MyContext } from "./ComponentA";
		const value = useContext(MyContext);
*/

import CompA from "./CompA";
import "./style.css";

import React, {useState, useEffect, useContext} from "react";
function Test(props) {
	const [user, setUser] = useState();
	return (
		<div>
			<CompA></CompA>
		</div>
	);
}

export default Test;



