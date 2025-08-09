// this for reduce store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
    reducer: counterReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
