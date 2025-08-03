//* What is Redux
/*
    Redux Gives us a container [redux store] to store states ...
*/

//* Introduction to Redux
/*
  - The Redux store keeps all the data (state)
  - The UI gets data from the store 
  - To change the data, we send an action using dispatch()
  - The action does not change the data by itself
  - The reducer takes the action and changes the data based on the action type

  Behind the scenes:
    We send an action using dispatch() when we want to update the state in the UI.  
    The reducer takes the old state from the store and the action,  
    creates a new state, and sends it back to the store.  
    Then the UI updates with the new state.
*/
