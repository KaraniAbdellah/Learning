import type { todos } from "../../types/todos";

export default async function fetchTodos() {
  const res = await fetch("https://dummyjson.com/todos/random/10");
  const todos_fetched: todos[] = await res.json();
  console.log(todos_fetched);
  return todos_fetched;
}
