import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontSize: "20px",
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }}></Stack.Screen>
    </Stack>
  );
}
