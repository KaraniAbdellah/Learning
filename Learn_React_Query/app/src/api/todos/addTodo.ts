import type { todos } from "../../types/todos";
export function addTodo(todo: todos, data: todos[]) {
  data.push(todo);
  return todo;
}
