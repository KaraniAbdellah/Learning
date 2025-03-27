import React, { useRef } from "react";

// useRef()
/*
    like useState() but don't trigger re-renders
    refs are mutable
    states are ummutable
*/

const Test = () => {
    const ref = useRef(0);
    console.log(ref); // {current: 0}
    console.log(ref.current);
    return <div></div>;
};

export default Test;
