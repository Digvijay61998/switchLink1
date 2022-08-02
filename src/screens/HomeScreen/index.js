import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import React from 'react';
import {CustomHome} from '../../common/component';
import CustomRooms from './AddRoom/CustomRooms';
import SetWifiCredentials from './SetWifi';
import CreateNewRoom from './New Room';
import AddRoom from './Add Device';
import {createStackNavigator} from '@react-navigation/stack';
// import EditRoom from './AddRoom/EditRoom';
// import BoardName from './BoardName';

const HomeStackNavigator = createStackNavigator();

const Home = props => {
  console.log('props', props);
  const {navigation} = props;

  return (
    <View style={{flex: 1}}>
      {/* <SetWifiCredentials props /> */}
      <CreateNewRoom props />

      {/* <AddRoom prop /> */}
      {/* {CustomRooms(props)} */}
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
