import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
// import HomeScreen from '../screens/Dashboard/HomeScreen';
// import QusAnsScreen from '../screens/Dashboard/QusAnsScreen';
// import SessionScreen from '../screens/Dashboard/SessionScreen';
// import StoreInformastion from '../screens/Dashboard/StoreInformastion';
// import TermsCondistion from '../screens/Dashboard/TermsCondistion';
// import SelectRoleScreen from '../screens/OnBoarding/SelectRoleScreen';
// import ChangePassword from '../screens/UserAuth/ChangePassword';
// import enterEmail from '../screens/UserAuth/EnterEmail';
// import OtpScreen from '../screens/UserAuth/OtpScreen';
import UserLogin from '../screens/Auth/UserLogin';
import UserSignUp from '../screens/Auth/UserSignUp';
import HomeScreen from "../screens/HomeScreen"
// import userSignUp from '../screens/UserAuth/userSignUp';
// import ContactScreen from '../screens/Contact/ContactScreen';

const stack = createStackNavigator();

const AuthNavigator = () => (
  <stack.Navigator headerMode="none" initialRouteName="UserLogin">
    <stack.Screen name="UserLogin" component={UserLogin} />
     <stack.Screen name="HomeScreen" component={HomeScreen} />
    <stack.Screen name="UserSignUp" component={UserSignUp} /> 
  </stack.Navigator>
);

export default AuthNavigator;
