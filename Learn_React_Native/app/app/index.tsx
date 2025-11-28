import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/components/Home";
import Details from "@/components/Details";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details}></Stack.Screen>
      </Stack.Navigator>
  );
}

// React native + Zunstand + Caching + SuperBase
