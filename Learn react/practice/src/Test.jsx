import React, { useRef } from "react";

// useRef()
/*
    like useState() but don't trigger re-renders
    refs are mutable
    states are ummutable

    // In This Example Unitil Render And Then You Can See The Result
*/

const Test = () => {
    const ref = useRef(0);
    console.log(ref); // {current: 0}
    console.log(ref.current);
    const handleIncremt = () => {
        ref.current++;
        console.log(ref.current);
    }
    return (
        <div>
            <button onClick={() => handleIncremt()}>click me!</button>
            <p>{ref.current}</p>
        </div>
    );
};

export default Test;
