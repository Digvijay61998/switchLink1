import { StyleSheet, Text, View ,Image,Switch} from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {CustomHeader} from "../../common/component"
import { COLORS, ICONS, Scale, verticalScale } from '../../common/constants'
const Setting = (props) => {
const {navigation} = props;
const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{backgroundColor:COLORS.secondary,flex:1}}>
    <LinearGradient
    colors={["#c5c0fe","#edc1fe","#ed86ff"]}
      start={{ x: 0, y:1 }}
      end={{ x: 1, y: 0 }}
      style={styles.header}
      >
        <Text style={{fontSize:Scale(24),color:COLORS.black}}>Scene</Text>
      </LinearGradient>
    <View style={[styles.container, { flex: 1 }]}>
        <View style={styles.userName}>
          <Text style={{fontSize:Scale(18),fontWeight:'700'}}>AD</Text>
        </View>
        <Text style={{marginTop:verticalScale(10),fontSize:Scale(18)}}>Ashutosh Deshmukh</Text>
        <View style={{justifyContent:"center",alignItems:'center',width:Scale(375),marginTop:verticalScale(50)}}>
        <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:'black'}}>Upadate Profile</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </View>

        <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:'black'}}>Change Password</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </View>

        <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15, color:'black'}}>Forgot Password</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </View>

        <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:'black'}}>Reset Pin</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>
          </View>
          <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:'black'}}>Switch To Dark Mode</Text>
        <Switch
                    trackColor={{ false: "#EEEEEE", true: "#A75FFF6B" }}
                    thumbColor={isEnabled ? "#A75FFF" : "#939598"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
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
    backgroundColor: COLORS.purple,
    justifyContent: "center",
    alignItems:"center",
  }
})