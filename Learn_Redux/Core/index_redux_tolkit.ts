//* What is Redux Toolkit
/*
  is lib from redux that facility state management by using some functions  
*/

//* Core Concepts
/*
  Store: The central place that holds your app’s state.
  Slice: A piece of the state + the reducers and actions related to it. Created using createSlice.
  Reducers: are functions that update state based on actions
  Actions: Events that describe what happened. Redux Toolkit auto-generates them from reducers.
  Dispatch: The way to send actions to the store to update state.
  Selectors: Functions to read specific parts of the state. and for connect redux with app
  Thunk (async logic): Middleware for handling async tasks like fetching data, done via createAsyncThunk
*/
