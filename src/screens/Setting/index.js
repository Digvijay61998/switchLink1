import { StyleSheet, Text, View ,Image,Switch} from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {CustomHeader} from "../../common/component"
import { COLORS,DARKCOLORS, ICONS, Scale, verticalScale ,appTheme} from '../../common/constants'
import { useDispatch, useSelector } from "react-redux";
import {
  themeChange
} from "../../redux/state/Theme/Actions";
import { TouchableOpacity } from 'react-native-gesture-handler'
const Setting = (props) => {
  console.log("props", props);
  const { navigation } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.Theme);
  console.log("theme", theme);
  dispatch(
    themeChange({
      data: { theme: isEnabled }
    }),
  );
  const THEMECOLOR = (theme == true ? DARKCOLORS : COLORS)
  return (
    <LinearGradient
      style={{flex: 1}}
    colors={appTheme('secondary')}
    start={{ x:0, y:1 }}
    end={{ x:1, y: 0 }}
    >
    <LinearGradient
    colors={appTheme('header')}
      start={{ x: 0, y:1 }}
      end={{ x: 1, y: 0 }}
      style={styles.header}
      >
        <Text style={{fontSize:Scale(24),color:appTheme('headerFont')}}>Settings</Text>
      </LinearGradient>
    <View style={[styles.container, { flex: 1 }]}>
        <View style={[styles.userName,{backgroundColor: appTheme('purple'),}]}>
          <Text style={{fontSize:Scale(18),fontWeight:'700'}}>AD</Text>
        </View>
        <Text style={{marginTop:verticalScale(10),fontSize:Scale(18)}}>Ashutosh Deshmukh</Text>
        <View style={{justifyContent:"center",alignItems:'center',width:Scale(375),marginTop:verticalScale(50)}}>
        <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:'black'}}>Upadate Profile</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </View>
        <View style={{justifyContent:'center',width:'85%'}}>
      <TouchableOpacity
      onPress={() => props.navigation.navigate('ChangePassword')}
      style={{height:50,borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:'black'}}>Change Password</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </TouchableOpacity>
        </View>

        <View style={{justifyContent:'center',width:'85%'}}>
      <TouchableOpacity 
      onPress={()=> props.navigation.navigate('ForgotPassword')}
      style={{height:50,borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:'black'}}>Forgot Password</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </TouchableOpacity>
        </View>

        <View style={{justifyContent:'center',width:'85%'}}>
      <TouchableOpacity
      onPress={()=> props.navigation.navigate('ResetPin')}
      style={{height:50,borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:'black'}}>Reset Pin</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </TouchableOpacity>
        </View>
          <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:'black'}}>Switch To Dark Mode</Text>
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
    
      </LinearGradient>
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