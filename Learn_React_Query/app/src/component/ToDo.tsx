import { useMutation, useQuery } from "@tanstack/react-query";
import fetchTodos from "../api/todos/fetchTodos";
import type { todos } from "../types/todos";
import { addTodo } from "../api/todos/addTodo";

const ToDo = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(),
  });

  const mutation = useMutation({
    mutationFn : addTodo(
      {
        completed: false,
        id: 91,
        todo: "Take a nap",
        userId: 70,
      },
      data
    ),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      To Do:
      {data?.map((todo: todos) => {
        return (
          <div key={todo.id}>
            <p>todos: {todo.todo}</p>
            <p>completed: {todo.completed}</p>
            <p>--------------</p>
          </div>
        );
      })}
    </div>
  );
};

export default ToDo;
