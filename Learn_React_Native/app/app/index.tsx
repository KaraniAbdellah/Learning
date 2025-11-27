import fetchPokems from "@/services/fetchPokems";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import "../global.css";

export default function Index() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    // Fetch The data posts
    fetchPokems()
      .then((res) => setPosts(() => res))
      .finally(() => console.log(posts));
      // This is the optional cleanup mechanism for effects
    return () => {};
  }, []);
  return (
    <View>
      <Text className="text-blue-500">Hello World</Text>
    </View>
  );
}

// React native + Zunstand + Caching + SuperBase
