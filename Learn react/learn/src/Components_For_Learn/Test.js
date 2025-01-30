// Start Create Test Component
import "./Test.css"

// import UseState Hook from react
import { useState } from "react"

export default function Test() {
    const state = useState("abdellah");
    const value = state[0];
    const setValue = state[1];
    function Change() {
        setValue("hello")
    }
    return (
      <div>
        <button onClick={Change}>click me</button>
        <h1>{value}</h1>
      </div>
    );
}

