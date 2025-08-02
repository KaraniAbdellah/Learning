// User Context Provider Here

import { createContext } from "react";
export interface User {
  id: number;
  name: string;
  age: number;
  isMarried?: boolean;
}

interface UserContextTypes {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (id: number, newUser: User) => User | null;
  deleteUser: (id: number) => User | null;
  displayUser: () => User[] | null;
}

const initValue = {
  users: [],
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
  displayUser: () => null,
};

const UserContext = createContext<UserContextTypes>(initValue);
export default UserContext;
