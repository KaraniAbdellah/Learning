import React from "react";
import { Stack } from "expo-router";


/*
  --> Stack organize screens like a pile of pages
  --> Expo use filies as Screens
  --> _layout.js: if file when we defien how screen arranged
  --> Use <Link /> or router.push()
*/


const RootLayout = () => {
  return <Stack>
    <Stack.Screen name="index" options={{title: "Home"}}></Stack.Screen>
    <Stack.Screen name="details" options={{title: "Details"}}></Stack.Screen>
  </Stack>;
};


export default RootLayout;
