import { StyleSheet, Text, View ,Image,Switch, TextInput, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {CustomHeader} from "../../common/component"
import { appTheme, COLORS,ICONS,Scale, verticalScale  } from '../../../../common/constants'
const ResetPin = (props) => {
const {navigation} = props;
const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{backgroundColor:appTheme('primary'),flex:1}}>
    
        <Text style={{fontSize:Scale(24),color:appTheme('headerFont'),padding:Scale(25)}}>Reset Pin</Text>
     
      <View style={{padding:Scale(20),}}>
     

  
    <View style={{height:verticalScale(320),width:"98%",display:'flex',flexDirection:'column',justifyContent:"space-around",marginTop:verticalScale(50)}}>
    <TextInput
                   style={[styles.dropdown,{backgroundColor: appTheme('contactUsInput'),borderColor:appTheme('inputBorder')}]}
                   // onChangeText={onChangeNumber}
                    // value={number}
                        placeholder="Current Pin"
                    keyboardType="alphabet"
                    />
    
    <TextInput
                   style={[styles.dropdown,{backgroundColor: appTheme('contactUsInput'),borderColor:appTheme('inputBorder')}]}
                   // onChangeText={onChangeNumber}
                    // value={number}
                        placeholder="New Pin"
                    keyboardType="alphabet"
                    />

<TextInput
                   style={[styles.dropdown,{backgroundColor: appTheme('contactUsInput'),borderColor:appTheme('inputBorder')}]}
                   // onChangeText={onChangeNumber}
                    // value={number}
                        placeholder="Confirm Pin"
                    keyboardType="alphabet"
                    />

<TouchableOpacity
                      style={[styles.button,{backgroundColor:appTheme('scanBoard')}]}
                      >
                          <Text style={{color:appTheme('primary'),fontSize:Scale(18)}}>Reset Pin</Text>
                        </TouchableOpacity>
</View>
      </View>
     
    
      </View>
  )
}

export default ResetPin


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
  },
    dropdown: {
        height: Scale(50),
        width: '100%',
        borderRadius: 8,
        paddingHorizontal: 8,
        // backgroundColor:COLORS.input,
        backgroundColor: '#F8FAFD',
        fontSize: Scale(17),
        color:COLORS.black,
        borderWidth:1
        // fontFamily: 'Montserrat-Thin',
      },
      button: {
        width: '100%',
        height: verticalScale(56),
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: Scale(12),
        marginRight:Scale(20)
    },
    message:{
        justifyContent:'flex-start',
            height: Scale(140),
            width: '100%',
            borderRadius: 8,
            // backgroundColor:COLORS.input,
            backgroundColor: '#F8FAFD',
            fontSize: Scale(17),
            color:COLORS.black,
            
            // fontFamily: 'Montserrat-Thin',
    }
})