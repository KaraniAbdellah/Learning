// this file for Slice [state + reducers implementation + actions]
import { createSlice } from "@reduxjs/toolkit";

interface Counter {
  value: number;
}

const initialState: Counter = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // this reducer can take action but optional
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// we name actions like reducer because of redux generate action for each reducer
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
