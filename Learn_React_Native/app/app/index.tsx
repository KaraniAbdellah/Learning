import fetchTodos from "@/services/fetchTodos";
import { useEffect, useState } from "react";
import { Text, View, ScrollView, Button, Pressable } from "react-native";
import "../global.css";
import Todos from "@/types/Todos";
import regroupTodos from "@/utils/regroupTodos";
import { Link } from "expo-router";


export default function Index() {
  const [todos, setTodos] = useState<{ [key: string]: Todos[] }>({});
  const [loading, setLoading] = useState<boolean>(false);

  const toTodo = (userId: number) => {
    console.log(userId);
    // Send User to Another Route For Show Todos
  };

  useEffect(() => {
    // Fetch The data todos
    fetchTodos()
      .then((res) => {
        const regroupedData = regroupTodos(res);
        console.log(regroupedData);
        setTodos(() => regroupedData);
      })
      .finally(() => setLoading(() => true));

    // this function return when component Unmounting
    return () => {
      console.log("Unmounting");
    };
  }, []);
  if (!loading) return "Loadding Todos...";
  return (
    <View className="bg-white w-full h-screen">
      <View className="bg-blue-600 px-6 py-8 shadow-lg">
        <Text className="text-white text-3xl font-semibold">Todos List</Text>
      </View>

      <ScrollView className="px-4 py-6">
        {Object.keys(todos).map((ele, index) => {
          return (
            <View
              key={index}
              className="bg-white mb-3 p-4 rounded-lg shadow-md border border-gray-100"
            >
              <Text className="text-gray-500 text-sm">User ID: {ele}</Text>
              <Link href="/" key={index} >
                <Button
                  title="Click to Show Todos"
                  onPress={(e) => toTodo(Number(ele))}
                />
              </Link>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

// React native + Zunstand + Caching + SuperBase
