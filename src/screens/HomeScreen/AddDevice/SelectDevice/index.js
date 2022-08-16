import React from "react";
import { Image, StyleSheet, Text, View ,TouchableOpacity} from "react-native";
import { appImage, appTheme, COLORS, ICONS, Scale, verticalScale } from "../../../../common/constants";
import LinearGradient from 'react-native-linear-gradient'


const SelectDevice = (props) => {

    return(
      <>
          <LinearGradient
    colors={appTheme('secondary')}
      start={{ x: 0, y:1 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
        > 
        <View style={{paddingLeft:20,paddingBottom:15}}>
        <Text style={{color:"black",fontSize:30}}>
            Select Device
        </Text>
        </View>
        <View style={{justifyContent:"center",alignItems:'center'}}>
        <TouchableOpacity 
        onPress={()=>props.navigation.navigate('AddBoard')} style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:'black'}}>Switch Board</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </TouchableOpacity>

        <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:'black'}}>Monitor Sensor</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </View>

        <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15, color:'black'}}>IR Blaster</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </View>

        <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:'black'}}>Camera</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </View>
    </View>
    </LinearGradient>
    </>
    )
}
export default SelectDevice;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:verticalScale(450)
    
  },
    dropdown: {
      height: Scale(50),
      width: Scale(320),
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      backgroundColor: 'white',
      fontSize: 17,
      fontFamily: 'Montserrat-Thin',
    },
    button: {
      height: Scale(50),
      width: Scale(320),
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      backgroundColor: 'black',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  


