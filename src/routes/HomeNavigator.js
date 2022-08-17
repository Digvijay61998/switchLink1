import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import { Image, View } from 'react-native';
import {Scale,verticalScale,appTheme,appIcons} from "../common/constants";
import {CustomDrawer,CustomHome} from '../common/component';
import HomeScreen from '../screens/HomeScreen';
import Scheduler from '../screens/Scheduler';
import Scene from '../screens/Scene';
import Favorites from "../screens/Favorites"
import Setting from '../screens/Setting';
import ContactUs from '../screens/ContactUs';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EditRoom from '../screens/HomeScreen/AddRoom/EditRoom';
import BoardName from '../screens/HomeScreen/AddRoom/BoardName';
import { CustomHeader } from '../common/component';
import AddBoard from '../screens/HomeScreen/AddDevice/AddBoard';
import SelectDevice from '../screens/HomeScreen/AddDevice/SelectDevice';
import BarCodeScanner from '../screens/HomeScreen/AddDevice/BarCodeScanner';
import ConfirmBoardDetails from '../screens/HomeScreen/AddDevice/ConfirmBoardDetails';
import CreateNewRoom from '../screens/HomeScreen/AddDevice/NewRoom';
import SetWifiCredentials from '../screens/HomeScreen/AddDevice/SetWifi';
import CustomRooms from '../screens/HomeScreen/AddRoom/CustomRooms';
import ChangePassword from '../screens/Setting/ChangePassword';
import InsertEmail from '../screens/Setting/ForgotPassword/InsertEmail';
import Verification from '../screens/Setting/ForgotPassword/Verification';
import ResetPin from '../screens/Setting/ForgotPassword/ResetPin';
import PasswordConfirmation from '../screens/Setting/ForgotPassword/PasswordConfirmation';
import EditScene from '../screens/Scene/EditScene';
// import CreateNewRoom from '../screens/HomeScreen/NewRoom';
// import SetWifiCredentials from '../screens/HomeScreen/SetWifi';
// import BarCodeScanner from '../screens/HomeScreen/Add Device/BarCodeScanner';
// import StoreInformastion from '../screens/Dashboard/StoreInformastion';
// import MyOrder from '../screens/Dashboard/MyOrder';
// import AddProduct from '../screens/Dashboard/AddProduct';
// import EditProduct from '../screens/Session/EditProduct';

const DrawerStack = createDrawerNavigator();
const RootStackNavigator = createStackNavigator();

const Tab = createBottomTabNavigator();

const AddStackRoom =()=>{
  return(
  < View style={{flex:1 }}>
        <CustomHome props />
<RootStackNavigator.Navigator
initialRouteName="EditRoom">
<RootStackNavigator.Screen
  name="EditRoom"
  component={EditRoom}
  options={{gestureEnabled: false, headerShown: false}}
/>
<RootStackNavigator.Screen
       name="BoardName"
        component={BoardName}
       options={{gestureEnabled: false, headerShown: false}}
     /> 
{/* <RootStackNavigator.Screen
  name="BarCodeScanner"
  component={BarCodeScanner}
  options={{gestureEnabled: false, headerShown: false}}
/> */}

{/* <RootStackNavigator.Screen
  name="CustomRooms"
  component={CustomRooms}
  options={{gestureEnabled: false, headerShown: false}}
/> */}
</RootStackNavigator.Navigator>
</View>
  )
}

const AddDeviceStack =()=>{
  return(
  < View style={{flex:1 }}>
    <CustomHome props />
<RootStackNavigator.Navigator
initialRouteName="SelectDevice">

{/* <RootStackNavigator.Screen
       name="CreateNewRoom"
        component={CreateNewRoom}
       options={{gestureEnabled: false, headerShown: false}}
     /> */}
     <RootStackNavigator.Screen
       name="SelectDevice"
        component={SelectDevice}
       options={{gestureEnabled: false, headerShown: false}}
     />
<RootStackNavigator.Screen
       name="AddBoard"
        component={AddBoard}
       options={{gestureEnabled: false, headerShown: false}}
     /> 

<RootStackNavigator.Screen
       name="BarCodeScanner"
        component={BarCodeScanner}
       options={{gestureEnabled: false, headerShown: false}}
     /> 
<RootStackNavigator.Screen
       name="ConfirmBoardDetails"
        component={ConfirmBoardDetails}
       options={{gestureEnabled: false, headerShown: false}}
     /> 
{/* <RootStackNavigator.Screen
  name="BarCodeScanner"
  component={BarCodeScanner}
  options={{gestureEnabled: false, headerShown: false}}
/> */}


</RootStackNavigator.Navigator>
</View>
  )
}

const RootBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator
    options={{gestureEnabled: false, headerShown: false}}
      initialRouteName="HomeScreen">
      <RootStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <RootStackNavigator.Screen
       name="CreateNewRoom"
        component={CreateNewRoom}
       options={{gestureEnabled: false, headerShown: false}}
     />
       <RootStackNavigator.Screen
          name="SetWifiCredentials"
          component={SetWifiCredentials}
          options={{gestureEnabled: false, headerShown: false}}
        />
        <RootStackNavigator.Screen
        name="AddStackRoom"
        component={AddStackRoom}
        options={{gestureEnabled: false, headerShown: false}}
      />
        <RootStackNavigator.Screen
        name="AddDeviceStack"
        component={AddDeviceStack}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <RootStackNavigator.Screen
  name="CustomRooms"
  component={CustomRooms}
  options={{gestureEnabled: false, headerShown: false}}
/>
      {/* <RootStackNavigator.Screen
  name="BarCodeScanner"
  component={BarCodeScanner}
  options={{gestureEnabled: false, headerShown: false}}
/> */}
    </RootStackNavigator.Navigator>
  );
};

const ForgotPassword = props => {

  return(
    <RootStackNavigator.Navigator
    options={{gestureEnabled: false, headerShown: false}}
      initialRouteName="InsertEmail">
      <RootStackNavigator.Screen
        name="InsertEmail"
        component={InsertEmail}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <RootStackNavigator.Screen
        name="Verification"
        component={Verification}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <RootStackNavigator.Screen
        name="PasswordConfirmation"
        component={PasswordConfirmation}
        options={{gestureEnabled: false, headerShown: false}}
      />

    </RootStackNavigator.Navigator>
  )

}

const FristBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator
    options={{gestureEnabled: false, headerShown: false}}
      initialRouteName="Scheduler">
      <RootStackNavigator.Screen
        name="Scheduler"
        component={Scheduler}
        options={{gestureEnabled: false, headerShown: false}}
      />

    </RootStackNavigator.Navigator>
  );
};

const SecandBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator
    options={{gestureEnabled: false, headerShown: false}}
      initialRouteName="Scene">
      <RootStackNavigator.Screen
        name="Scene"
        component={Scene}
        options={{gestureEnabled: false, headerShown: false}}
      />
            <RootStackNavigator.Screen
        name="EditScene"
        component={EditScene}
        options={{gestureEnabled: false, headerShown: false}}
      />
      
    </RootStackNavigator.Navigator>
  );
};

const ThardBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator
    options={{gestureEnabled: false, headerShown: false}}
      initialRouteName="Favorites">
      <RootStackNavigator.Screen
        name="Favorites"
        component={Favorites}
        options={{gestureEnabled: false, headerShown: false}}
      />
    </RootStackNavigator.Navigator>
  );
};
const FourthBottomTabStack = props => {
  return (
    // <RootStackNavigator.Navigator
    //   headerMode="none"
    //   initialRouteName="Setting">
 
    // </RootStackNavigator.Navigator>
    <RootStackNavigator.Navigator
    options={{gestureEnabled: false, headerShown: false}}
      initialRouteName="Setting">
      <RootStackNavigator.Screen
        name="Setting"
        component={Setting}
        options={{gestureEnabled: false, headerShown: false}}
      />
    <RootStackNavigator.Screen
      name="ContactUs"
      component={ContactUs}
      options={{gestureEnabled: false, headerShown: false}}
    />
    <RootStackNavigator.Screen
      name="ChangePassword"
      component={ChangePassword}
      options={{gestureEnabled: false, headerShown: false}}
    />
    <RootStackNavigator.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{gestureEnabled: false, headerShown: false}}
    />
     <RootStackNavigator.Screen
      name="ResetPin"
      component={ResetPin}
      options={{gestureEnabled: false, headerShown: false}}
    />
  </RootStackNavigator.Navigator>
  );
};

const BottomTabsStackScreen = props => {
  return (
    <>
    <CustomHeader navigation={props.navigation}/>
    <Tab.Navigator
      initialRouteName="RootBottomTabStack"
      screenOptions={{
        tabBarStyle: {
          backgroundColor:appTheme('primary') ,
        },
      }}>

      <Tab.Screen
        name="FristBottomTabStack"
        component={FristBottomTabStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                top:verticalScale(10),
                width: Scale(24),
                height: Scale(25),
                resizeMode: 'contain',
              }}
              source={focused ? appIcons('ActiveTime') : appIcons('time')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="SecandBottomTabStack"
        component={SecandBottomTabStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                top:verticalScale(10),
                width: Scale(24),
                height: Scale(25),
                resizeMode: 'contain',
              }}
              source={focused ? appIcons('ActiveScene') : appIcons('scene')}
            />
          ),
        }}
      />
 <Tab.Screen
        name="RootBottomTabStack"
        component={RootBottomTabStack}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                top:verticalScale(10),
                width: Scale(24),
                height: Scale(25),
                resizeMode: 'contain',
              }}
              source={focused ? appIcons('Activehome') : appIcons('home')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ThardBottomTabStack"
        component={ThardBottomTabStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                top:verticalScale(10),
                width: Scale(24),
                height: Scale(25),
                resizeMode: 'contain',
              }}
              source={focused ? appIcons('ActiveFavorites') : appIcons('favorites')}
            />
          ),
        }}
      />
          <Tab.Screen
        name="FourthBottomTabStack"
        component={FourthBottomTabStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                top:verticalScale(10),
                width: Scale(24),
                height: Scale(25),
                resizeMode: 'contain',
              }}
              source={focused ? appIcons('ActiveSetting') : appIcons('setting')}
            />
          ),
        }}
      />
    </Tab.Navigator>
    </>
  );
};

const HomeNavigator = () => (
  <DrawerStack.Navigator
    initialRouteName="BottomTabsStackScreen"
    drawerWidth={Scale(200)}
    screenOptions={{
      drawerPosition: 'right', headerShown: false,
      
  }}
    drawerStyle={{
      flex: 1,
      backgroundColor: appTheme('primary'),
      width: Scale(100),
      borderRadius: Scale(25),
    }}
    
    drawerContent={props => <CustomDrawer props={props} />}>
    <RootStackNavigator.Screen
      options={{gestureEnabled: false}}
      name="BottomTabsStackScreen"
      // component={props => <MainStackScreen {...props}/>}
      component={BottomTabsStackScreen}
    />
    
    {/* <DrawerStack.Screen name="HomeScreen" component={HomeScreen} /> */}
  </DrawerStack.Navigator>
);

export default HomeNavigator;
