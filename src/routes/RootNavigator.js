import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SplashScreen from "../screens/Splash/Splash.js";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";

const stack = createStackNavigator();

const SplashStackScreen = (props) => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="SplashScreen" component={SplashScreen} />
    </stack.Navigator>
  );
};


const RootNavigator = () => (
  <stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="SplashStackScreen"
  >
    <stack.Screen name="SplashStackScreen" component={SplashStackScreen} />
    <stack.Screen name="AuthStackScreen" component={AuthNavigator} />
    <stack.Screen name="HomeNavigator" component={HomeNavigator} />
  </stack.Navigator>
);

export default RootNavigator;
