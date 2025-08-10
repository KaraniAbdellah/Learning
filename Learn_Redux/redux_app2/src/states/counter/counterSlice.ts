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
    increment: (oldState) => {
      oldState.value += 1;
    },
  },
});

// export default counterSlice.actions; // actions generated auto
export default counterSlice.reducer;
