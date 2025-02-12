// Start Create Test Component
import React, { useEffect } from 'react'
import "./Test.css";



export default function Test() {
	useEffect(() => {
		console.log("Start Fecthing The Data");
	}, []);
  return (
	<div>Test</div>
  )
}
