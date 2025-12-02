import React from "react";
import { Stack } from "expo-router";


/*
  --> Stack organize screens like a pile of pages
  --> Expo use filies as Screens
  --> _layout.js: Stack SetUp
  --> Use <Link /> or router.push()

  --> How Stack Work With Screen
      - I am in HOME --> Stack: [HOME]
      - I am Navigate to Details --> Stack [HOME, DETAILS]
      - I am Navigate to Profile --> Stack [HOME, DETAILS, PROFILE]
      - Press Back --> Stack Remove PROFILE --> Back to DETAILS
*/


const RootLayout = () => {
  return <Stack>
    <Stack.Screen name="index" options={{title: "Home"}}></Stack.Screen>
    <Stack.Screen name="details" options={{title: "Details"}}></Stack.Screen>
  </Stack>;
};


export default RootLayout;
