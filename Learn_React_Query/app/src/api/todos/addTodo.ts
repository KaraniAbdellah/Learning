import type { todos } from "../../types/todos";
export async function addTodo(todo: todos) {
  const res = await fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  const add_todo = await res.json();
  return add_todo;
}
