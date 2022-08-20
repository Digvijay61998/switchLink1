import { StyleSheet, Text, View ,Image,Switch, TextInput, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {CustomHeader} from "../../common/component"
import { appTheme, COLORS, ICONS, Scale, verticalScale } from '../../common/constants'
const ContactUs = (props) => {
const {navigation} = props;
const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{backgroundColor:appTheme('primary'),flex:1}}>
   
        <Text style={{fontSize:Scale(24),color:appTheme('headerFont'),padding:20}}>Contact Us</Text>
      <View style={{padding:Scale(20),}}>
      <View style={{display:"flex",flexDirection:"column",height:verticalScale(90),width:Scale(160),justifyContent:"space-between",marginBottom:verticalScale(10)}}>
        <Text style={{color:appTheme('headerFont')}}> Contact us at</Text>
        <Text style={{color:appTheme('headerFont')}}> 98xxx xxxxx</Text>
        <Text style={{color:COLORS.link}}> support@switchlink.com</Text>
        <Text style={{color:appTheme('headerFont')}}> OR</Text>
    </View>

    <View style={{marginBottom:verticalScale(12)}}>
<Text style={{color:appTheme('headerFont')}}> Fill Up the form and out team will get back to you!</Text>
    </View>
    <View style={{height:verticalScale(400),width:"98%",display:'flex',flexDirection:'column',justifyContent:"space-around"}}>
    <TextInput
                    style={[styles.dropdown,{backgroundColor: appTheme('contactUsInput'),borderColor:appTheme('inputBorder')}]}
                    // onChangeText={onChangeNumber}
                    // value={number}
                        placeholder="Name"
                    keyboardType="alphabet"
                    />
    
    <TextInput
                    style={[styles.dropdown,,{backgroundColor: appTheme('contactUsInput'),borderColor:appTheme('inputBorder')}]}
                    // onChangeText={onChangeNumber}
                    // value={number}
                        placeholder="Email"
                    keyboardType="alphabet"
                    />

<TextInput
                    style={[styles.message,{backgroundColor: appTheme('contactUsInput'),borderColor:appTheme('inputBorder')}]}
                    // onChangeText={onChangeNumber}
                    // value={number}
                        placeholder="Message"
                    keyboardType="alphabet"
                    />

<TouchableOpacity
                      style={[styles.button,{backgroundColor:appTheme('scanBoard')}]}
                      >
                          <Text style={{color:appTheme('primary'),fontSize:Scale(18)}}>Send Message</Text>
                        </TouchableOpacity>
</View>
      </View>
     
    
      </View>
  )
}

export default ContactUs

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
        backgroundColor: '#F8FAFD',
        fontSize: Scale(17),
        borderWidth:1,
        borderColor:'#9243E3'
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
            
            fontSize: Scale(17),
            borderWidth:1,
            borderColor:'#9243E3'
            // fontFamily: 'Montserrat-Thin',
    }
})