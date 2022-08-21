import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import React, { useEffect } from 'react';
import {CustomHome} from '../../common/component';
import CustomRooms from './AddRoom/CustomRooms';
import SetWifiCredentials from './AddDevice/SetWifi';
import CreateNewRoom from './AddDevice/NewRoom';
import AddRoom from './AddDevice';
import {createStackNavigator} from '@react-navigation/stack';
// import EditRoom from './AddRoom/EditRoom';
// import BoardName from './BoardName';
import { useDispatch, useSelector } from "react-redux";
import {
  getRoomsList
  } from "../../redux/state/Room/Action";
  
const HomeStackNavigator = createStackNavigator();

const Home = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {roomList,isFetching, error } = useSelector((state) => state.room);
  console.log("isFetching",roomList, isFetching, error);
  
  useEffect(() => {
    console.log("CustomRooms");
    dispatch(
      getRoomsList(),
  );
},[])
         
  return (
    <View style={{flex: 1}}>
      {/* {SetWifiCredentials (props)} */}
      {/* <CreateNewRoom props /> */}
      {/* <AddRoom prop /> */}
        <CustomRooms navigation={navigation} />
      {/* {renderHederComponents()} */}
    </View>
  );
};
// #635BFF26
export default Home;

const styles = StyleSheet.create({
  // renderHeaderContainer: {
  //     paddingBottom: SHeight(2),
  //     borderBottomLeftRadius: Scale(10),
  //     borderBottomRightRadius: Scale(10),
  //   },
  //   headerContainerLogo: {
  //     alignItems: "center",
  //     marginTop: SHeight(3),
  //   },
  //   menuIconContainer: {
  //     position: "absolute",
  //     left: SWidth(2.5),
  //   },
  //   storeTextName: {
  //     fontSize: Scale(22),
  //     fontWeight: "600",
  //     lineHeight: Scale(30),
  //     fontFamily: "Metropolis-SemiBold",
  //     color: "#FFFFFF",
  //   },
  //   menuIconRightContainer: {
  //     position: "absolute",
  //     right: SWidth(2.5),
  //   },
});
