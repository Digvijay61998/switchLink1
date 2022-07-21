import { StyleSheet, Image,StatusBar} from 'react-native'
import React, { useEffect } from 'react'
import {Scale,IMAGE} from "../../common/constants"
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";
const Splash = (props) => {
    async function componentDidMount() {
        let userToken = JSON.parse(await AsyncStorage.getItem("userToken"));
        console.log("@@@@ User Token================", userToken);
        setTimeout(() => {
        //   if (!userToken?.accessToken) {
        //     this.props.navigation.replace("OnBoardingStackScreen");
        //   } else {
            // if (userToken?.role == "customer") {
            props.navigation.replace("AuthStackScreen");
            // } else {
            //   this.props.navigation.replace("StackScreenSeller");
            // }
        //   }
        }, 3000);
      }

      useEffect(()=>{
        componentDidMount()
      },[])
  return (<>
    <StatusBar hidden />
    <Animatable.View
    useNativeDriver
    animation="bounceIn"
    style={styles.container}
  >
    <Image source={IMAGE.spashLogo} style={styles.imageStyle} />
  </Animatable.View>
  </>
  )
}

export default Splash

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageStyle: {
    width: Scale(340),
    height: Scale(360),
    resizeMode: "contain",
  },
});