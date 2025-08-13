import { useMutation, useQuery } from "@tanstack/react-query";
import fetchTodos from "../api/todos/fetchTodos";
import type { todos } from "../types/todos";
import { addTodo } from "../api/todos/addTodo";

const ToDo = () => {
  const todo: todos = {
    todo: "Use DummyJSON in the project",
    completed: false,
    userId: 5,
    id: 10000,
  };

  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(),
  });

  const getMutation = useMutation({
    mutationFn: () => addTodo(todo),
    onSuccess: () => {
      console.log("Todo add succeffully");
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
  console.log(getMutation.data);
  console.log(getMutation.isPending);

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
      <button
        onClick={() => {
          console.log("Hello world");
          getMutation.mutate();
        }}
      >
        add todo
      </button>
    </div>
  );
};

export default ToDo;
