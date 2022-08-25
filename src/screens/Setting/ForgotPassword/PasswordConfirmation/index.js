import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState,useReducer} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {CustomHeader} from '../../common/component';
import {
  appTheme,
  COLORS,
  ICONS,
  Scale,
  verticalScale,
} from '../../../../common/constants';
import {useDispatch, useSelector} from 'react-redux';
import { userNewPassword } from "../../../../redux/state/Login/Actions"

const PasswordConfirmation = props => {
  const dispatch = useDispatch();
  const [userPassword, setNewPassword] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      newPassword: '',
      confirmPassword: '',
      errorMessage: "",
    }
  )
  console.log("userPassword", userPassword);
  
  const handleSubmit = () => {
    if (userPassword.newPassword === userPassword.confirmPassword) {
      console.log("output is same");
      let password = userPassword.newPassword
      let confirmPassword = userPassword.confirmPassword
      dispatch(
        userNewPassword({
          data: {
            password:password,
            confirmPassword:confirmPassword,
          },
        }),
      );
    } else {
      console.log("password is not matchs");
      setNewPassword({
        errorMessage:'Both password need to be the same'
      })
    }
  };
  return (
    <View style={{backgroundColor: appTheme('primary'), flex: 1}}>
      <Text
        style={{
          fontSize: Scale(24),
          color: appTheme('headerFont'),
          padding: Scale(25),
          fontWeight:"600",
          fontFamily:'metropolis'
        }}>
        Forgot Password
      </Text>
      <View style={{padding: Scale(20)}}>
        <View
          style={{
            height: verticalScale(300),
            width: '98%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            marginTop: verticalScale(50),
          }}>
          <TextInput
             name="New_Password"
              onChangeText={(val)=>setNewPassword({newPassword:val})}
            style={[
              styles.dropdown,
              {
                backgroundColor: appTheme('contactUsInput'),
                borderColor: appTheme('inputBorder'),
              },
            ]}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="New Password"
            keyboardType="alphabet"
          />
          <TextInput
            name="Old_Password"
            onChangeText={(val)=>setNewPassword({confirmPassword:val})}
            style={[
              styles.dropdown,
              {
                backgroundColor: appTheme('contactUsInput'),
                borderColor: appTheme('inputBorder'),
              },
            ]}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Confirm Password"
            keyboardType="alphabet"
          />
          <Text style={{color:'red',marginTop:verticalScale(-30)}}>{ userNewPassword.errorMessage}</Text>
          <TouchableOpacity
            onPress={() => {
              handleSubmit()
            }}
            style={[styles.button, {backgroundColor: appTheme('scanBoard')}]}>
            <Text style={{color: appTheme('primary'), fontSize: Scale(18)}}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PasswordConfirmation;

const styles = StyleSheet.create({
  container: {
    width: Scale(375),
    height: Scale(620),
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Scale(35),
    // backgroundColor:COLORS.secondary
  },
  header: {
    borderBottomLeftRadius: Scale(40),
    borderBottomRightRadius: Scale(40),
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: Scale(20),
    height: verticalScale(90),
  },
  userName: {
    width: Scale(54),
    height: verticalScale(54),
    borderRadius: Scale(50),
    backgroundColor: COLORS.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    height: Scale(50),
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 8,
    // backgroundColor:COLORS.input,
    backgroundColor: '#F8FAFD',
    fontSize: Scale(17),
    borderWidth: 1,
    // fontFamily: 'Montserrat-Thin',
  },
  button: {
    width: '100%',
    height: verticalScale(56),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Scale(12),
    marginRight: Scale(20),
  },
  message: {
    justifyContent: 'flex-start',
    height: Scale(140),
    width: '100%',
    borderRadius: 8,
    // backgroundColor:COLORS.input,
    backgroundColor: '#F8FAFD',
    fontSize: Scale(17),
    color: COLORS.black,

    // fontFamily: 'Montserrat-Thin',
  },
});
