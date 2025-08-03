import React from "react";
import { createStore } from "../../node_modules/redux/src/createStore";

const initialState = {
  users: [
    { name: "user1", id: 1 },
    { name: "user2", id: 2 },
  ],
  todos: [
    { id: 1, name: "todo1", userId: 1 },
    { id: 2, name: "todo2", userId: 1 },
    { id: 3, name: "todo3", userId: 2 },
    { id: 4, name: "todo4", userId: 2 },
  ],
};

// Store
const store = createStore((state) => state, initialState);
console.log(store);


const ToDo = () => {
  return <div>To Do</div>;
};

export default ToDo;
