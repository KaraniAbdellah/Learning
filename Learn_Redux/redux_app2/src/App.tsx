import { useState } from "react";

function App() {
  
  // Store
  interface CounterState {
    value: number;
  }
  interface UserState {
    isSignedIn: boolean
  }

  // Actions
  /*
      Payload is data that we need to pass to the reducer
      Payload is not required
  */
  const incrementByAmount = {type: "INCREMENT_BY_AMOUNT", payload: 10};
  const increment = {type: "INCREMENT"};
  const decrement = {type: "DECREMENT"};

  // Reducers
  

  return <></>;
}

export default App;