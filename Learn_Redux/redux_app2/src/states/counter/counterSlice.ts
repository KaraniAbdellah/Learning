// this file for Slice [state + reducers implementation + actions]
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

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
      // each reducer has name "counter/increment"
      // this reducer can take action but optional
      state.value += 1;
    },
    decrement: (state) => {
      // "counter/decrement"
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // "counter/decrement"
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("IncrementAsync.pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/counterAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // wait 1 second
    return amount;
  }
);

// we name actions like reducer because of redux generate action for each reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice;
