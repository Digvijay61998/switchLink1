import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import UserLogin from '../screens/Auth/UserLogin';
import UserSignUp from '../screens/Auth/UserSignUp';
import HomeScreen from "../screens/HomeScreen"

const stack = createStackNavigator();

const AuthNavigator = () => (
  <stack.Navigator headerMode="none" initialRouteName="UserLogin">
    <stack.Screen name="UserLogin" component={UserLogin} />
     <stack.Screen name="HomeScreen" component={HomeScreen} />
    <stack.Screen name="UserSignUp" component={UserSignUp} /> 
  </stack.Navigator>
);

export default AuthNavigator;
