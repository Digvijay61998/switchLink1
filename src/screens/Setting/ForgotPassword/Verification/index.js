import { StyleSheet, Text, View ,Image,Switch, TextInput, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {CustomHeader} from "../../common/component"
import { appTheme, COLORS, ICONS,Scale, verticalScale } from '../../../../common/constants'
// import { COLORS,ICONS,Scale, verticalScale } from '../../../common/constants'

const Verification = (props) => {
const {navigation} = props;
const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{backgroundColor:appTheme('primary'),flex:1,}}>
   
        <Text style={{fontSize:Scale(24),color:appTheme('headerFont')}}>Forgot Password</Text>
      
      <View style={{display:"flex",justifyContent:'center',alignItems:'center',width:'100%',marginTop:verticalScale(25)}}>
      <View style={{padding:Scale(20),width:Scale(340),height:verticalScale(300),alignItems:"center",display:'flex',flexDirection:'column',justifyContent:'space-between',}}>
     
      <Text style={{color:appTheme('headerFont'),fontSize:Scale(21)}}>Enter Verification Code</Text>
<Text style={{color:appTheme('headerFont'),fontSize:Scale(16)}}>sent to your email address</Text>
  
  
    
<TextInput
                     style={[styles.dropdown,{backgroundColor: appTheme('contactUsInput'),borderColor:appTheme('inputBorder')}]}

                    // onChangeText={onChangeNumber}
                    // value={number}
                        placeholder="Enter the 6 digit code"
                    keyboardType="alphabet"
                    />

<TouchableOpacity
onPress={()=> props.navigation.navigate('PasswordConfirmation')}
                      style={[styles.dropdown,{backgroundColor:appTheme('scanBoard'),justifyContent: 'center',
                      alignItems: "center",}]}
                      >
                          <Text style={{color:appTheme('primary'),fontSize:Scale(18)}}>Verify</Text>
                        </TouchableOpacity>
<View>
  <Text style={{color:"#30BDF2",fontSize:Scale(18)}}>Resend Code</Text>
  </View>
    
      </View>
      </View>
    
      </View>
  )
}

export default Verification


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