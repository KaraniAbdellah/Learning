import React from "react";
import { createStore } from "../../node_modules/redux/src/createStore";
import { Reducer } from "redux";

type User = {
  name: string;
  id: number;
};

type Task = {
  id: number;
  userId: number;
  name: string;
};

type State = {
  users: User[];
  tasks: Task[];
};

type Action = {
  type: string;
  value: User;
};

// this code can not be understand from node.js [+v20]
enum ActionTypes {
  ADD_USER = "ADD_USER",
  REMOVE_USER = "REMOVE_USER",
}

const initialState: State = {
  users: [
    { name: "user1", id: 1 },
    { name: "user2", id: 2 },
  ],
  tasks: [
    { id: 1, name: "todo1", userId: 1 },
    { id: 2, name: "todo2", userId: 1 },
    { id: 3, name: "todo3", userId: 2 },
    { id: 4, name: "todo4", userId: 2 },
  ],
};

// Action
const addUserAction = (user: User): Action => ({
  type: ActionTypes.ADD_USER,
  value: user,
});
const removeUserAction = (user: User): Action => ({
  type: ActionTypes.REMOVE_USER,
  value: user,
});

// Reducer
const sum = [1, 2, 3, 4].reduce((acc, cur) => acc + cur);
const userReducer: Reducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  if (action.type == "ADD_USER") {
    const new_state: State = {
      users: [...state.users, action.value],
      tasks: state.tasks,
    };
    return new_state;
  }

  if (action.type == "REMOVE_USER") {
    // Delete User
    const newUsers: User[] = state.users.filter(
      (user) => user.id != action.value.id
    );
    // Delete Tasks
    const newTasks: Task[] = state.tasks.filter(
      (task) => task.userId != action.value.id
    );
    // Return New State
    const new_state: State = {
      users: newUsers,
      tasks: newTasks,
    };
    return new_state;
  }
  return state;
};

// Store
const store = createStore(userReducer, initialState);
store.dispatch(addUserAction({ name: "abdellah", id: 3 }));
console.log(store.getState());
store.dispatch(removeUserAction({name: "ahmed", id: 2}));
console.log(store.getState());



const ToDo = () => {
  return <div>To Do</div>;
};

export default ToDo;
