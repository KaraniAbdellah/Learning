import Todos from "@/types/Todos";
function regroupTodos(todos: Todos[]) {
  // Regroup the Todos based on UserId
  // {'1': [todos], '2': []}
  const dict_todos: { [key: string]: Todos[] } = {};

  todos.forEach((todo, index) => {
    if (dict_todos[todo.userId]) {
      dict_todos[todo.userId].push(todo);
    } else {
      dict_todos[todo.userId] = [todo];
    }
  });
  return dict_todos;
}

export default regroupTodos;
