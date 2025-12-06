import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="Details/index.details" options={{title: "Details"}}></Stack.Screen>
  </Stack>;
}
