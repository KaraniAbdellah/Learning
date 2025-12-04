import { createContext } from "react";
import Todo from "@/modules/Home/types/Todo";

// const todoContext = createContext<Todo>({} as Todo);
const todoContext = createContext<Todo | undefined>(undefined);
export default todoContext;

