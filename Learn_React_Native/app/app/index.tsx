import fetchTodos from "@/services/fetchTodos";
import { useEffect, useState } from "react";
import { Text, View,ScrollView } from "react-native";
import "../global.css";
import Users from "@/types/Users";


export default function Index() {
  const [todos, setTodos] = useState<Users>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Fetch The data todos
    fetchTodos()
      .then((res) => setTodos(() => res))
      .finally(() => setLoading(() => true));

    // this function return when component Unmounting
    return () => {
      console.log("Unmounting");
    };
  }, []);
  if (!loading) return "Loadding Todos...";
  return (
    <View className="bg-zinc-700 w-full h-screen p-10">
      <Text className="text-white text-2xl font-bold">Users List</Text>
      <ScrollView>

      </ScrollView>
    </View>
  );
}

// React native + Zunstand + Caching + SuperBase
