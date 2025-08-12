import { useQuery } from "@tanstack/react-query";

const ToDo = () => {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetch("https://dummyjson.com/todos/random/10"),
  });
  console.log(query);

  return <div>To Do:</div>;
};

export default ToDo;
