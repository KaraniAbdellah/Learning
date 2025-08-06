import React, { act } from "react";
import { createStore } from "../../node_modules/redux/src/createStore";
import {
  ActionCreator,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  Reducer,
  Store,
  StoreEnhancer,
} from "redux";

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
  value: User | Task;
};

// this code can not be understand from node.js [+v20]
enum ActionTypes {
  ADD_USER = "ADD_USER",
  REMOVE_USER = "REMOVE_USER",
  ADD_TASK = "ADD_TASK",
  REMOVE_TASK = "REMOVE_TASK",
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

// Actions
const addUserAction = (user: User): Action => ({
  type: ActionTypes.ADD_USER,
  value: user,
});
const removeUserAction = (user: User): Action => ({
  type: ActionTypes.REMOVE_USER,
  value: user,
});

const addTaskAction = (task: Task): Action => ({
  type: ActionTypes.ADD_TASK,
  value: task,
});
const removeTaskAction = (task: Task): Action => ({
  type: ActionTypes.REMOVE_TASK,
  value: task,
});

// Reducer
const sum = [1, 2, 3, 4].reduce((acc, cur) => acc + cur);

const userReducer: Reducer<User[], Action> = (
  users: User[] = initialState.users,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return [...users, action.value as User];
    case ActionTypes.REMOVE_USER:
      return users.filter((user) => user.id != action.value.id);
    default:
      return users;
  }
};

const taskReducer: Reducer<Task[], Action> = (
  tasks: Task[] = initialState.tasks,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return [...tasks, action.value as Task];
    case ActionTypes.REMOVE_TASK:
      return tasks.filter((task) => task.id != action.value.id);
    default:
      return tasks;
  }
};


// Redux Middleware
/*
  in Each Action clg will be executed
*/
const logMiddleware = (store: Store<State, Action>) => (next: (arg0: Action) => void) => (action: Action) => {
  console.log(action, store.getState());
  return next(action);
}

// Store
const store: Store<State, Action> = createStore(
  combineReducers({
    users: userReducer,
    tasks: taskReducer,
  }),
  initialState,
  // applyMiddleware(logMiddleware),
);

const subscriber = () => {
  console.log(store.getState());
};

// tell store call subscriber each time state change
store.subscribe(subscriber);

// dispatch state and action to reducer
store.dispatch(addUserAction({ name: "Abdellah", id: 3 }));
store.dispatch(removeUserAction({ name: "user1", id: 1 }));
store.dispatch(addTaskAction({ id: 5, name: "todo2", userId: 3 }));
store.dispatch(removeTaskAction({ id: 3, name: "todo3", userId: 2 }));

// Another way to dispatch state and action
/*

*/
const actions = bindActionCreators(
  {
    addUserAction,
    removeUserAction,
    addTaskAction,
    removeTaskAction,
  },
  store.dispatch
);

actions.addUserAction({ name: "Abdellah", id: 3 });
actions.removeUserAction({ name: "user1", id: 1 });
actions.addTaskAction({ id: 5, name: "todo2", userId: 3 });
actions.removeTaskAction({ id: 3, name: "todo3", userId: 2 });




const ToDo = () => {
  return <div>To Do</div>;
};

export default ToDo;
