import { StyleSheet, Text, View ,Image,Switch} from 'react-native'
import React,{useEffect, useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {CustomHeader} from "../../common/component"
import { COLORS,DARKCOLORS, ICONS, Scale, verticalScale ,appTheme} from '../../common/constants'
import { useDispatch, useSelector ,connect} from "react-redux";
import { bindActionCreators } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  themeChange
} from "../../redux/state/Theme/Actions";
import { TouchableOpacity } from 'react-native-gesture-handler'
const Setting = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.Theme);
  const [isEnabled, setIsEnabled] = useState(theme);
  const toggleSwitch = async() => {
    setIsEnabled(previousState => !previousState);
  }

  const handleTheme = async () => {
    dispatch(
      themeChange({
        data: { theme: isEnabled }
      }),
    );
    await AsyncStorage.setItem("userTheme", String(isEnabled))
    console.log('userTheme@@@@@@@@@@', await AsyncStorage.getItem("userTheme"))
  }

  useEffect(() => {
    handleTheme()
  },[isEnabled])

  const THEMECOLOR = (theme == true ? DARKCOLORS : COLORS)
  return (
   
     <View style={{width:'100%',height:'100%',backgroundColor:appTheme('primary')}}>
        <Text style={{fontSize:Scale(24),color:appTheme('headerFont'),padding:28}}>Settings</Text>
    <View style={[styles.container, { flex: 1 }]}>
        <View style={[styles.userName,{backgroundColor: appTheme('purple'),}]}>
          <Text style={{fontSize:Scale(18),fontWeight:'700'}}>AD</Text>
        </View>
        <Text style={{marginTop:verticalScale(10),fontSize:Scale(18),color:appTheme('headerFont')}}>Ashutosh Deshmukh</Text>
        <View style={{justifyContent:"center",alignItems:'center',width:Scale(375),marginTop:verticalScale(50)}}>
        <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:appTheme('headerFont'),color:appTheme('headerFont')}}>Upadate Profile</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </View>
        <View style={{justifyContent:'center',width:'85%'}}>
      <TouchableOpacity
      onPress={() => props.navigation.navigate('ChangePassword')}
      style={{height:50,borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:appTheme('headerFont')}}>Change Password</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </TouchableOpacity>
        </View>

        <View style={{justifyContent:'center',width:'85%'}}>
      <TouchableOpacity 
      onPress={()=> props.navigation.navigate('ForgotPassword')}
      style={{height:50,borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:appTheme('headerFont')}}>Forgot Password</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </TouchableOpacity>
        </View>

        <View style={{justifyContent:'center',width:'85%'}}>
      <TouchableOpacity
      onPress={()=> props.navigation.navigate('ResetPin')}
      style={{height:50,borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:appTheme('headerFont')}}>Reset Pin</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </TouchableOpacity>
        </View>
          <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:appTheme('headerFont')}}>Switch To Dark Mode</Text>
        <Switch
                    trackColor={{ false: "#EEEEEE", true: "#A75FFF6B" }}
                    thumbColor={theme ? "#A75FFF" : "#939598"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={theme}
                    style={{width:Scale(40)}}
                />
        </View>
    </View>
      </View>
      </View>
    
  )
}

export default Setting

const styles = StyleSheet.create({
  container:{
    width:Scale(375),
    height:Scale(620),
    justifyContent:'flex-start',
    alignItems:'center',
    paddingTop:Scale(35),
    // backgroundColor:COLORS.secondary
  },
  header: {
    borderBottomLeftRadius: Scale(40),
    borderBottomRightRadius:Scale(40),
    width: '100%',
    alignItems:'flex-start',
    justifyContent: 'center',
    paddingLeft:Scale(20),
    height: verticalScale(90),
  },
  userName:{
    width: Scale(54),
    height: verticalScale(54),
    borderRadius: Scale(50),
    justifyContent: "center",
    alignItems:"center",
  }
})