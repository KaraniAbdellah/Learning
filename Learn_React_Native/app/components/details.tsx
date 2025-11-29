import React from "react";
import { Text } from "@react-navigation/elements";
import todoContext from "@/context/Todo";
import Todo from "@/types/Todo";
import { useLocalSearchParams } from "expo-router";


const Details = () => {
  const params = useLocalSearchParams();
  console.log(params);
  const Todos = useContext<Todo | undefined>(todoContext);
  return (
    <div>
      <Text>Details Here</Text>
    </div>
  );
};

export default Details;
