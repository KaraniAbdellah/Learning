import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack>
    <Stack.Screen name="index" options={{title: "Home"}}></Stack.Screen>
    <Stack.Screen name="details" options={{title: "Details"}}></Stack.Screen>
  </Stack>;
};

export default RootLayout;
