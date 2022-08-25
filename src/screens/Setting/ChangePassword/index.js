import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useReducer} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {CustomHeader} from '../../common/component';
import {
  appTheme,
  COLORS,
  ICONS,
  Scale,
  verticalScale,
} from '../../../common/constants';
import {useDispatch,useSelector } from "react-redux";
import {userChangePassword} from "../../../redux/state/Login/Actions"

const ChangePassword = props => {
  const dispatch = useDispatch();
  const [userPassword, setNewPassword] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      errorMessage: "",
    }
  )
console.log("userPassword",userPassword);

  const handleSubmit = () => {
    if (userPassword.newPassword === userPassword.confirmPassword) {
      dispatch(
        userChangePassword({
          data: {
            currentPassword:userPassword.currentPassword,
            newPassword: userPassword.newPassword,
            confirmNewPassword:userPassword.confirmPassword
          },
        }),
      );
    } else {
      setNewPassword({
        errorMessage:"Both password need to be the same"
      })
    }
  }
  return (
    <View
      style={{
        backgroundColor: appTheme('primary'),
        flex: 1,
        padding: Scale(20),
      }}>
      <Text
        style={{
          fontSize: Scale(24),
          color: appTheme('headerFont'),
          fontFamily: 'metropolis',
          fontWeight: '600',
        }}>
        Change Password
      </Text>
      <View style={{marginBottom: verticalScale(30)}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: verticalScale(110),
            width: Scale(200),
            justifyContent: 'space-between',
            marginBottom: verticalScale(10),
          }}>
          <Text style={[styles.font, {color: appTheme('headerFont')}]}>
            {' '}
            Password must contain:
          </Text>
          <Text style={[styles.font, {color: appTheme('headerFont')}]}>
            At least 8 characters
          </Text>
          <Text style={[styles.font, {color: appTheme('headerFont')}]}>
            At least 1 Uppercase (A-Z)
          </Text>
          <Text style={[styles.font, {color: appTheme('headerFont')}]}>
            At least 1 Lowercase (a-z)
          </Text>
          <Text style={[styles.font, {color: appTheme('headerFont')}]}>
            At least 1 Numerical (1,2,...9)
          </Text>
        </View>
        <View
          style={{
            height: verticalScale(320),
            width: '98%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
          <TextInput
            style={[
              styles.dropdown,
              {
                backgroundColor: appTheme('contactUsInput'),
                borderColor: appTheme('inputBorder'),
              },
            ]}
            onChangeText={(val)=>setNewPassword({currentPassword:val})}
            // value={number}
            placeholder="Current Password"
            keyboardType="alphabet"
          />

          <TextInput
            style={[
              styles.dropdown,
              {
                backgroundColor: appTheme('contactUsInput'),
                borderColor: appTheme('inputBorder'),
              },
            ]}
            onChangeText={(val)=>setNewPassword({newPassword:val})}
            // value={number}
            placeholder="New Password"
            keyboardType="alphabet"
          />

          <TextInput
            style={[
              styles.dropdown,
              {
                backgroundColor: appTheme('contactUsInput'),
                borderColor: appTheme('inputBorder'),
              },
            ]}
            onChangeText={(val)=>setNewPassword({confirmPassword:val})}
            // value={number}
            placeholder="Confirm Password"
            keyboardType="alphabet"
          />

          <TouchableOpacity
            onPress={()=>handleSubmit()}
            style={[styles.button, {backgroundColor: appTheme('scanBoard')}]}>
            <Text style={{color: appTheme('primary'), fontSize: Scale(18)}}>
              Change Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    width: Scale(375),
    height: Scale(620),
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Scale(35),
    // backgroundColor:COLORS.secondary
  },
  font: {
    fontWeight: '500',
    fontFamily: 'Montserrat',
    fontSize: Scale(15),
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
    color: COLORS.black,
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
});
