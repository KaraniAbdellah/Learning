import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../states/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../states/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter); // connect redux with app
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <h2>Counter: {count.value}</h2>
      <br />
      <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>+3</button>
      <button onClick={() => dispatch(incrementAsync(3))}>async: +3</button>
    </>
  );
};

export default Counter;
