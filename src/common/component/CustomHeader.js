import React from "react";
import { View,TouchableOpacity, StyleSheet, Image } from "react-native";
import { goBack } from "../../theme/rnnavigation";
import {Scale,verticalScale,appTheme,appImage,appIcons} from "../constants"

const CustomHeader = ({ navigation }) => {
  
  return (
      <View style={[styles.buttonContainer,{backgroundColor:appTheme('primary')}]}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image style={styles.avatarIcon} source={appIcons('backButton')} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
        <Image style={styles.headerLogo} source={appImage('SwitchlinkLogo')} />
        </View>
          <TouchableOpacity
          onPress={() =>navigation.openDrawer()}
          >
            <Image style={styles.notfIcon} source={appIcons('drower')} />
          </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  buttonContainer: {
    width: Scale(375),
    justifyContent: "space-between",
    alignItems:"center",
    flexDirection: "row",
    height: Scale(70),
    padding: Scale(15),
    position:"relative"
  },
  headerLogo:{
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  avatarIcon: {
    width: Scale(17),
    height: Scale(18),
    resizeMode: "contain",
  },

  headerTextContainer: {
    width:Scale(180),
    height: Scale(70),
  },

  headerText: {
    fontSize: Scale(22),
    color: "#FFFFFF",
    fontFamily: "Metropolis",
    fontWeight: "600",
  },

  userIcon: {
    marginTop: verticalScale(60),
    marginLeft: Scale(70),
    width: Scale(20),
    height: Scale(20),
    resizeMode: "contain",
  },

  notfIcon: {
    width: Scale(20),
    height: Scale(20),
    resizeMode: "contain",
  },
});
