import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
// import AddAddress from "../screens/AddCard/AddAddress";
// import AddCard from "../screens/AddCard/AddCard";
// import MyAddress from "../screens/AddCard/MyAddress";
// import MyCart from "../screens/AddCard/MyCart";
// import PaymentMethods from "../screens/AddCard/PaymentMethods";
// import AddProduct from "../screens/Dashboard/AddProduct";
// import AllStores from "../screens/Dashboard/AllStores";
// import PaymentScreen from "../screens/Dashboard/PaymentScreen";
// import ProductDecription from "../screens/Dashboard/ProductDecription";
// import TopSellingCategories from "../screens/Dashboard/TopSellingCategories/TopSellingCategories";
// import MainContainer from "../screens/LiveShopScreen/MainContainer";
// import Notifications from "../screens/Notifications/Notifications";
// import OnBoardingScreen from "../screens/OnBoarding/OnBoardingScreen";
import SplashScreen from "../screens/Splash/Splash.js";
import AuthNavigator from "./AuthNavigator";
// import BottomTabsStackScreen from "./HomeNavigator";
import HomeNavigator from "./HomeNavigator";
// import BuyerNavigator from "./BuyerNavigator";

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
    initialRouteName="HomeNavigator"
  >
    <stack.Screen name="SplashStackScreen" component={SplashStackScreen} />
    <stack.Screen name="AuthStackScreen" component={AuthNavigator} />
    <stack.Screen name="HomeNavigator" component={HomeNavigator} />
    {/* <stack.Screen name="BuyerNavigator" component={BuyerNavigator} />

    <stack.Screen
      name="TopSellingCategories"
      component={TopSellingCategories}
    />

    <stack.Screen name="AllStores" component={AllStores} />
    <stack.Screen name="MainContainer" component={MainContainer} />
    <stack.Screen name="ProductDecription" component={ProductDecription} />
    <stack.Screen name="PaymentScreen" component={PaymentScreen} />
    <stack.Screen name="PaymentMethods" component={PaymentMethods} />
    <stack.Screen name="Notifications" component={Notifications} />
    <stack.Screen name="MyAddress" component={MyAddress} />
    <stack.Screen name="AddAddress" component={AddAddress} />
    <stack.Screen name="AddCard" component={AddCard} />
    <stack.Screen name="MyCart" component={MyCart} /> */}
  </stack.Navigator>
);

export default RootNavigator;
