import React from "react";
import { Text } from "@react-navigation/elements";
import { useContext } from "react";
import todoContext from "@/context/Todo";
import Todo from "@/types/Todo";

const Details = () => {
  const Todos = useContext<Todo | undefined>(todoContext);
  return (
    <div>
      <Text>Details Here</Text>
    </div>
  );
};

export default Details;
