import React from "react";
import { Image, StyleSheet, Text, View ,TouchableOpacity} from "react-native";
import { appImage, appTheme, COLORS, ICONS, Scale, verticalScale } from "../../../../common/constants";
import LinearGradient from 'react-native-linear-gradient'


const SelectDevice = (props) => {

    return(
      <>
          {/* <LinearGradient
    colors={appTheme('secondary')}
      
      style={styles.container}
        >  */}
        <View style={{backgroundColor:appTheme('primary'),flex: 1,paddingTop:verticalScale(20),
    height:verticalScale(450)}}>
        <View style={{paddingLeft:Scale(30),paddingBottom:Scale(15)}}>
        <Text style={{color:"black",fontSize:Scale(25)}}>
            Add Device
        </Text>
        </View>
        <View style={{justifyContent:"center",alignItems:'center'}}>
        <TouchableOpacity 
        onPress={()=>props.navigation.navigate('AddBoard')} style={{height:verticalScale(55),width:'85%',borderBottomColor:appTheme('inputBorder'),borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:Scale(18),color:'black'}}>Switch Board</Text>
        <Image source={ICONS.arrow} style={{height:verticalScale(18), width:Scale(15)}}  tintColor="grey"/>

        </TouchableOpacity>

        <View style={{height:verticalScale(55),width:'85%',borderBottomColor:appTheme('inputBorder'),borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:Scale(18),color:'black'}}>Monitor Sensor</Text>
        <Image source={ICONS.arrow} style={{height:verticalScale(18), width:Scale(15)}}  tintColor="grey"/>

        </View>

        <View style={{height:verticalScale(55),width:'85%',borderBottomColor:appTheme('inputBorder'),borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:Scale(18), color:'black'}}>IR Blaster</Text>
        <Image source={ICONS.arrow} style={{height:verticalScale(18), width:Scale(15)}}  tintColor="grey"/>

        </View>

        <View style={{height:verticalScale(55),width:'85%',borderBottomColor:appTheme('inputBorder'),borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:Scale(18),color:'black'}}>Camera</Text>
        <Image source={ICONS.arrow} style={{height:verticalScale(18), width:Scale(15)}}  tintColor="grey"/>

        </View>
    </View>
    </View>
    {/* </LinearGradient> */}
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
  


