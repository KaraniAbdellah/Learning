import fetchTodos from "../services/fetchTodos";
import { useEffect, useState } from "react";
import { Text, View, ScrollView, Button } from "react-native";
import Todo from "../types/Todo";
import regroupTodos from "@/src/screens/Home/utils/regroupTodos";
import { Link, useNavigation } from "expo-router";


const Home = () => {
  const navigation = useNavigation();
  const [todos, setTodos] = useState<{ [key: string]: Todo[] }>({});
  const [loading, setLoading] = useState<boolean>(false);

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

  if (!loading) return "Loadding Todo...";
  return (
    <div>
      <View className="bg-white w-full h-screen">
        <View className="bg-blue-600 px-6 py-8 shadow-lg">
          <Text className="text-white text-3xl font-semibold">Todo List</Text>
        </View>

        <ScrollView className="px-4 py-6">
          {Object.keys(todos).map((ele, index) => {
            return (
              <View
                key={index}
                className="bg-white mb-3 p-4 rounded-lg shadow-md border border-gray-100"
              >
                {/* First Way*/}
                {/* <Button
                  title="Just Clik Me"
                  onPress={() => navigation.navigate("Details", {userId: 10})}
                /> */}
                <Text className="text-gray-500 text-sm">User ID: {ele}</Text>
                <Link
                  href={{ pathname: "/components/details", params: { name: ele } }}
                  key={index}
                >
                  <Button title="Click to Show Todo" />
                </Link>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </div>
  );
};

export default Home;
