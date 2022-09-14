/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,useState} from 'react';
import {
  Platform,
  Text
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import {Provider} from 'react-redux';
import createStore from './src/redux/state/index';
import RootNavigator from './src/routes/RootNavigator';
import {navigationRef,isMountedRef} from "./src/theme/rnnavigation"
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
const store = createStore();

export default function App() {
  const [netInfo, setNetInfo] = useState('');
  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetInfo(state.isConnected);
    });
 
    return () => {
      // Unsubscribe to network state updates
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);
  return netInfo ==  true ? (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>):(<Text>Network error</Text>)
}