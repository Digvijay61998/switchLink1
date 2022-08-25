import { StyleSheet, Text, View ,Image,Switch, TextInput, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {CustomHeader} from "../../common/component"
import { appTheme, COLORS, ICONS,Scale, verticalScale } from '../../../../common/constants'
// import { COLORS,ICONS,Scale, verticalScale } from '../../../common/constants'
import { useDispatch, useSelector } from "react-redux";
import {updateForgotPassword} from "../../../../redux/state/Login/Actions" 
const InsertEmail = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  
  const handleSubmit = () => {
    dispatch(
      updateForgotPassword({
        data: {
          email: email,
        }
      }));
}

  return (
    <View style={{backgroundColor:appTheme('primary'),flex:1}}>
    
        <Text style={{fontSize:Scale(24),color:appTheme('headerFont'),padding:Scale(25),fontFamily:'Montserrat'}}>Forgot Password</Text>
      
     
      <Text style={{color:appTheme('headerFont'),fontSize:Scale(18),paddingTop:Scale(50),paddingLeft:Scale(24),top:verticalScale(20)}}>Let's get you into your account</Text>
      <View style={{paddingTop:Scale(50),width:'100%',justidyContent:'center',alignItems:'center'}}>

  
    <View style={{height:verticalScale(160),width:"90%",display:'flex',flexDirection:'column',justifyContent:"space-around",}}>
  
    
<TextInput
                   style={[styles.dropdown,{backgroundColor: appTheme('contactUsInput'),borderColor:appTheme('inputBorder')}]}
                    onChangeText={(val)=>{setEmail(val)}}
                    // value={number}
                        placeholder="Email Address"
                    keyboardType="alphabet"
                    />

<TouchableOpacity
            onPress={() => handleSubmit()
              // props.navigation.navigate('Verification')
            }
                    style={[styles.button,{backgroundColor:appTheme('scanBoard')}]}
                      >
                          <Text style={{color:appTheme('primary'),fontSize:Scale(18)}}>Continue</Text>
                        </TouchableOpacity>
</View>
      </View>
     
    
      </View>
  )
}

export default InsertEmail


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
        width:'100%',
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