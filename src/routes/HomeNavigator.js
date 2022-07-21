import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Image} from 'react-native';
import CustomDrawer from '../common/component/CustomDrawer';
import HomeScreen from '../screens/HomeScreen';
import Scheduler from '../screens/Scheduler';
import Scene from '../screens/Scene';
import Favorites from "../screens/Favorites"
// import GetStartedScreen from '../screens/OnBoarding/GetStartedScreen';
// import SelectRoleScreen from '../screens/OnBoarding/SelectRoleScreen';
// import UserChat from '../screens/Dashboard/UserChat';
// import TransactionScreen from '../screens/Dashboard/Transaction';
// import TermsCondistion from '../screens/Dashboard/TermsCondistion';
// import QusAnsScreen from '../screens/Dashboard/QusAnsScreen';
// import ContactScreen from '../screens/Contact/ContactScreen';
// import UserProfile from '../screens/UserProfile/Profile';
// import BuyerProfile from '../screens/UserProfile/BuyerProfile';
// import SessionScreen from '../screens/Dashboard/SessionScreen';
// import LiveReels from '../screens/Dashboard/LiveStreamVideo/LiveReels';
// import TopCategories from '../screens/Dashboard/TopCategories';
// import AllStores from '../screens/Dashboard/AllStores';
// import AllLiveStreams from '../screens/Dashboard/AllLiveStreams/AllLiveStreams';
// import StoreManagementNew from '../screens/Dashboard/StoreManagementNew';
// import UplaodProduct from '../screens/UplaodProduct/UplaodProduct';
// import TopSellingCategories from '../screens/Dashboard/TopSellingCategories/TopSellingCategories';
// import OrderDetails from '../screens/Dashboard/OrderDetails';
// import ProductDecription from '../screens/Dashboard/ProductDecription';
// import ProductDescriptionSeller from '../screens/Dashboard/ProductDescriptionSeller/ProductDescriptionSeller';
// import Notifications from '../screens/Notifications/Notifications';
// import * as IMAGECONST from '../theme/ImageConstants';
import {Scale,verticalScale} from "../common/constants";
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import StoreInformastion from '../screens/Dashboard/StoreInformastion';
// import MyOrder from '../screens/Dashboard/MyOrder';
// import AddProduct from '../screens/Dashboard/AddProduct';
// import EditProduct from '../screens/Session/EditProduct';

const DrawerStack = createDrawerNavigator();
const RootStackNavigator = createStackNavigator();

const Tab = createBottomTabNavigator();

const RootBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator
      headerMode="none"
      initialRouteName="HomeScreen">
      <RootStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{gestureEnabled: false, headerShown: false}}
      />
      {/* <RootStackNavigator.Screen
        name="StoreInformastion"
        component={StoreInformastion}
        options={{gestureEnabled: false, headerShown: false}}
      />

      <RootStackNavigator.Screen
        name="QusAnsScreen"
        component={QusAnsScreen}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <RootStackNavigator.Screen
        name="TermsCondistion"
        component={TermsCondistion}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <RootStackNavigator.Screen
        name="UserChat"
        component={UserChat}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <RootStackNavigator.Screen
        name="MyOrder"
        component={MyOrder}
        options={{gestureEnabled: false, headerShown: false}}
      />

      <RootStackNavigator.Screen
        name="UserProfile"
        component={UserProfile}
        options={{gestureEnabled: false, headerShown: false}}
      /> */}
    </RootStackNavigator.Navigator>
  );
};

const FristBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator
      headerMode="none"
      initialRouteName="Scheduler">
      <RootStackNavigator.Screen
        name="Scheduler"
        component={Scheduler}
        options={{gestureEnabled: false, headerShown: false}}
      />

      {/* <RootStackNavigator.Screen
        name="TopCategories"
        component={TopCategories}
        options={{gestureEnabled: false, headerShown: false}}
      />

      <RootStackNavigator.Screen
        name="TopSellingCategories"
        component={TopSellingCategories}
        options={{gestureEnabled: false, headerShown: false}}
      />

      <RootStackNavigator.Screen
        name="AddProduct"
        component={AddProduct}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <RootStackNavigator.Screen
        name="ProductDecription"
        component={ProductDecription}
        options={{gestureEnabled: false, headerShown: false}}
      />

      <RootStackNavigator.Screen
        name="ProductDescriptionSeller"
        component={ProductDescriptionSeller}
        options={{gestureEnabled: false, headerShown: false}}
      /> */}

      {/* <RootStackNavigator.Screen
		  name="ProductDecription"
		  component={ProductDecription}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="PaymentScreen"
		  component={PaymentScreen}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="StoreInformastion"
		  component={StoreInformastion}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="QusAnsScreen"
		  component={QusAnsScreen}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="TermsCondistion"
		  component={TermsCondistion}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="UserChat"
		  component={UserChat}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="MyOrder"
		  component={MyOrder}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="AddItem"
		  component={AddItem}
		  options={{ gestureEnabled: false, headerShown: false }}
		/> */}
    </RootStackNavigator.Navigator>
  );
};

const SecandBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator
      headerMode="none"
      initialRouteName="Scene">
      <RootStackNavigator.Screen
        name="Scene"
        component={Scene}
        options={{gestureEnabled: false, headerShown: false}}
      />

      {/* <RootStackNavigator.Screen
        name="SessionScreen"
        component={SessionScreen}
        options={{gestureEnabled: false, headerShown: false}}
      />

      <RootStackNavigator.Screen
        name="EditProduct"
        component={EditProduct}
        options={{gestureEnabled: false, headerShown: false}}
      />

      <RootStackNavigator.Screen
        name="StoreManagementNew"
        component={StoreManagementNew}
        options={{gestureEnabled: false, headerShown: false}}
      />

      <RootStackNavigator.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{gestureEnabled: false, headerShown: false}}
      /> */}

      {/* <RootStackNavigator.Screen
		  name="QusAnsScreen"
		  component={QusAnsScreen}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="TermsCondistion"
		  component={TermsCondistion}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="UserChat"
		  component={UserChat}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="MyOrder"
		  component={MyOrder}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="AddItem"
		  component={AddItem}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="StoreLiveVideo"
		  component={StoreLiveVideo}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="TopCategories"
		  component={TopCategories}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="OpenShop"
		  component={OpenShop}
		  options={{ gestureEnabled: false, headerShown: false }}
		/> */}
    </RootStackNavigator.Navigator>
  );
};

const ThardBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator
      headerMode="none"
      initialRouteName="Favorites">
      <RootStackNavigator.Screen
        name="Favorites"
        component={Favorites}
        options={{gestureEnabled: false, headerShown: false}}
      />
      {/* <RootStackNavigator.Screen
		  name="PaymentScreen"
		  component={PaymentScreen}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
  
		<RootStackNavigator.Screen
		  name="QusAnsScreen"
		  component={QusAnsScreen}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="TermsCondistion"
		  component={TermsCondistion}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="UserChat"
		  component={UserChat}
		  options={{ gestureEnabled: false, headerShown: false }}
		/>
		<RootStackNavigator.Screen
		  name="MyOrder"
		  component={MyOrder}
		  options={{ gestureEnabled: false, headerShown: false }}
		/> */}
    </RootStackNavigator.Navigator>
  );
};

const BottomTabsStackScreen = props => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        style: {
          height: 65,
          paddingVertical: 5,
          backgroundColor: '#FFFFFF',
          width: Scale(380),
          paddingBottom: Scale(5),
          justifyContent: 'center',
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.2,
          shadowRadius: 8,
          borderColor: '#000',
          borderWidth: 1,
          borderStyle: 'solid',
        },

        labelStyle: {
          fontSize: Scale(12),
          color: '#85868A',
          fontWeight: '500',
        },

        tabBarOptions: {
          activeTintColor: 'green',
        },

        indicatorStyle: {
          borderBottomColor: 'red',
          borderBottomWidth: 125552,
        },
      }}>
      <Tab.Screen
        name="RootBottomTabStack"
        component={RootBottomTabStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: Scale(24),
                height: Scale(25),
                resizeMode: 'contain',
              }}
              // source={focused ? IMAGECONST.HOME_ACT : IMAGECONST.HOME_IN_ACT}
            />
          ),
        }}
      />

      <Tab.Screen
        name="FristBottomTabStack"
        component={FristBottomTabStack}
        options={{
          tabBarLabel: 'Stock',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: Scale(24),
                height: Scale(25),
                resizeMode: 'contain',
              }}
              // source={focused ? IMAGECONST.ECOM_ACT : IMAGECONST.ECOM_IN_ACT}
            />
          ),
        }}
      />

      <Tab.Screen
        name="SecandBottomTabStack"
        component={SecandBottomTabStack}
        options={{
          tabBarLabel: 'Live',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: Scale(24),
                height: Scale(25),
                resizeMode: 'contain',
              }}
              // source={focused ? IMAGECONST.VIDEO_ACT : IMAGECONST.VIDEO_IN_ACT}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ThardBottomTabStack"
        component={ThardBottomTabStack}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: Scale(24),
                height: Scale(25),
                resizeMode: 'contain',
              }}
              // source={focused ? IMAGECONST.CART_ACT : IMAGECONST.CART_IN_ACT}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeNavigator = () => (
  <DrawerStack.Navigator
    initialRouteName="BottomTabsStackScreen"
    drawerStyle={{
      flex: 1,
      backgroundColor: '#F6F6F6',
      width: Scale(337),
      borderRadius: Scale(25),
    }}
    drawerContent={props => <CustomDrawer {...props} />}>
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
