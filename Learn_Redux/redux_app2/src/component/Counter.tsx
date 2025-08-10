import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../states/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter); // connect redux with app
  const dispatch = useDispatch();

  return <div>
    <h2>Counter: {count}</h2>
    <br /><br />
    <button>+</button>
    <button>-</button>
  </div>;
};

export default Counter;
