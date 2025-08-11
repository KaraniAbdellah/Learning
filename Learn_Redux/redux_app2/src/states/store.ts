// this hold app's state
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // needed if we working with async action
