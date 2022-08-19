import { StyleSheet, Image,StatusBar} from 'react-native'
import React, { useEffect } from 'react'
import {Scale,IMAGE,appTheme} from "../../common/constants"
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector ,connect} from "react-redux";
import {
  themeChange
} from "../../redux/state/Theme/Actions";
const Splash = (props) => {
  const dispatch = useDispatch();
  async function handleTheme() { 
    const userTheme = await AsyncStorage.getItem("userTheme");
    console.log("@@@@ User Token================", userTheme);
    dispatch(
      themeChange({
        data: { theme: userTheme }
      }),
    );
  }

  async function componentDidMount() {
 
        let userToken = (await AsyncStorage.getItem("userToken"));
        console.log("@@@@ User Token================", userToken);
    setTimeout(() => {
          console.log("AuthStackScreen is navigated ");
          if (userToken) {
            props.navigation.replace("HomeNavigator");
          } else { 
            props.navigation.replace("AuthStackScreen");
            }
          
            // } else {
            //   this.props.navigation.replace("StackScreenSeller");
            // }
        //   }
        },3000);
      }

  useEffect(() => {
    componentDidMount()
        handleTheme()
      },[])
  return (<>
    <StatusBar hidden />
    <Animatable.View
    useNativeDriver
    animation="bounceIn"
    style={[styles.container,{backgroundColor:appTheme('primary')}]}
  >
    <Image source={IMAGE.spashLogo} style={styles.imageStyle} />
  </Animatable.View>
  </>
  )
}
function mapStateToProps(state) {
  console.log("state~~~~~~~~~~~~~~~~~~~~~~~~~",state);
  return {
    // Theme:Theme.theme
  };
}

export default connect(mapStateToProps, null, null, { forwardRef: true })(
  Splash
)

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