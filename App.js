/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import createStore from './src/redux/state/index';
import RootNavigator from './src/routes/RootNavigator';
import {navigationRef,isMountedRef} from "./src/theme/rnnavigation"
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Paho from 'paho-mqtt';

const store = createStore();
const host = "mqtt://3.7.137.31:1883";

// const client = new Paho.Client(
//   "3.7.137.31",
//   Number(8080),
//   `mqtt-async-test-${parseInt(Math.random() * 100)}`
// );

export default function App() {

//   const [value, setValue] = useState(0);
// console.log("value",value);
//   function onMessage(message) {
//     console.log("message",message);
//     if (message.destinationName === "9812b7b3-9490-4342-9dff-0ea28b9e604e")
//         setValue(message.payloadString);
//   }

//   useEffect(() => {
//     client.connect( {
//       onSuccess: () => { 
//       console.log("Connected!");
//       client.subscribe("9812b7b3-9490-4342-9dff-0ea28b9e604e");
//       client.onMessageArrived = onMessage;
//     },
//     onFailure: () => {
//       console.log("Failed to connect!"); 
//     }
//   });
//   }, [])

//   function changeValue(c) {
//     const message = new Paho.Message((value + 1).toString());
//     message.destinationName = "mqtt-async-test/value";
//     c.send(message);
//   }
  

  useEffect(() => {
    // setupNotification();
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}