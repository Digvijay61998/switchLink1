import React, { Component ,useState} from 'react';
import {
  View,
  StatusBar,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';
import {CONTAINER,Scale,verticalScale,COLORS,FONTS,ICONS} from "../../common/constants"
import { useDispatch, useSelector } from "react-redux";
import { Formik, useFormik } from 'formik';
import LinearGradient from 'react-native-linear-gradient'
import * as yup from 'yup';
import {
  signUserAccount,
} from "../../redux/state/Login/Actions";

const UserSignUp = (props) => {
    const dispatch = useDispatch();
  const { loginData, isFetching, error } = useSelector((state) => state.auth);


  const handleSubmit = async (val) => {
    console.log("val", val);
    const input = val.email
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.match(regexEmail)) {
      // console.log("true~~~~~~~~>");
      // dispatch(
      //   signUserAccount({
      //      data:{
      //       name: val.Name,
      //       email:val.email,
      //       password:val.Set_Password,
      //       confirmPassword:val.confirm_password,
      //       pin:val.Set_Pin
      //     }
      //   })
      // )
      props.navigation.replace("HomeNavigator");
      // userLoginWithCreds(data)
      return true;
    }
    else {
      error({errorMessage: "Please enter valid Email/Phone"})
      isFetching(false)
    }

  }
   //  VALIDATION SCHEMA
   const validationSchema = yup.object().shape({
    fullName: yup
      .string()
      .required("This field is required")
      .min(1),
       email: yup
      .string()
      .email("Please enter valid email"),
      // .required('Email Address is Required'),
      Set_Password: yup
      .string()
      .required("This field is required"),
      confirm_password: yup.string().when("Set_Password", {
      is: val => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf(
        [yup.ref("Set_Password")],
        "Both password need to be the same"
      )
      
    }),
    Set_Pin: yup
    .string()
    .required("This field is required"),
    Confirm_Pin: yup.string().when("Set_Pin", {
    is: val => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf(
      [yup.ref("Set_Pin")],
      "Both password need to be the same"
    )
    
  })
  })
  return (
    <SafeAreaView style={CONTAINER}>
        <View style={{width:Scale(200),right:Scale(50),marginTop:Scale(20)}}>
        <Text style={FONTS.textTittle}>Welcome to</Text>
        <View style={{flexDirection:"row"}}><Image
       source={ICONS.SwitchLogo}
       resizeMode="contain"
       style={{
         width: Scale(50),
         height: Scale(50),
         marginTop:verticalScale(-5)
       }}
       /><Text style={[FONTS.textTittle,{left:Scale(10)}]}>SwitchLink !</Text>
       </View>
       </View>
       <View style={{borderBottomColor:"#EBEBEB",borderBottomWidth:2,width:Scale(320),paddingLeft:Scale(2),flexDirection:"row",alignItems:"baseline",marginTop:Scale(20)}}>
         <Text style={{color:"#7F7F7F",letterSpacing:1}}>First, let's get to know each other better.</Text></View>
      <Formik
        initialValues={{
            Name: "" ,
            email: "" ,
           Set_Password: "" ,
           confirm_password: "" ,
           Set_Pin: "" ,
           Confirm_Pin: '',
          }}
          // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, onKeyPress, errors, setFieldTouched, touched, isValid, handleSubmit }) => {
          return (
            <View style={styles.LoginBox}>
              <Text style={{bottom:verticalScale(30), color: "red"  }}>{error?.errorMessage}</Text>
              <Text style={[FONTS.textstyle, { fontSize: Scale(20), letterSpacing: -1, color: COLORS.black, top: verticalScale(-10) }]}>Sign up</Text>
              <View
                style={styles.input} center
              >
                <TextInput
                   style={[FONTS.textstyle, { color: "black",paddingLeft:Scale(10), width: "100%"}]}
                   name="Name"
                   keyboardType='email-address'
                   value={values.Name}
                   onChangeText={handleChange('Name')}
                   placeholder="Name"
                   placeholderTextColor="#A7B0C0"
                   autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                        {errors.Name}
                      </Text>
                      <View
                style={styles.input} center
              >
                <TextInput
                   style={[FONTS.textstyle, { color: "black",paddingLeft:Scale(10), width: "100%"}]}
                   name="email"
                   keyboardType='email-address'
                   value={values.email}
                   onChangeText={handleChange('email')}
                   placeholder="Email"
                   placeholderTextColor="#A7B0C0"
                   autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                        {errors.email}
                      </Text>
                      <View
                style={styles.input} center
              >
                <TextInput
                   style={[FONTS.textstyle, { color: "black",paddingLeft:Scale(10), width: "100%"}]}
                   name="Set_Password"
                   keyboardType='email-address'
                   value={values.Set_Password}
                   onChangeText={handleChange('Set_Password')}
                   placeholder="Set_Password"
                   placeholderTextColor="#A7B0C0"
                   autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                        {errors.Set_Password}
                      </Text>
                      <View
                style={styles.input} center
              >
                <TextInput
                   style={[FONTS.textstyle, { color: "black",paddingLeft:Scale(10), width: "100%"}]}
                   name="confirm_password"
                   keyboardType='email-address'
                   value={values.confirm_password}
                   onChangeText={handleChange('confirm_password')}
                   placeholder="confirm_password"
                   placeholderTextColor="#A7B0C0"
                   autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                        {errors.confirm_password}
                      </Text>
              <View
                style={styles.input}
              >
                <TextInput
                    style={[FONTS.textstyle, { color: "black", width: "100%",fontSize: 18,paddingLeft:Scale(10) }]}
                    name="Set_Pin"
                    value={values.Set_Pin}
                    onChangeText={handleChange('Set_Pin')}
                    secureTextEntry={true}
                    placeholder="Set_Pin"
                    placeholderTextColor="#A7B0C0"
                    autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                        {errors.Set_Pin}
                      </Text>
                      <View
                style={styles.input}
              >
                <TextInput
                    style={[FONTS.textstyle, { color: "black", width: "100%",fontSize: 18,paddingLeft:Scale(10) }]}
                    name="Confirm_Pin"
                    value={values.Confirm_Pin}
                    onChangeText={handleChange('Confirm_Pin')}
                    secureTextEntry={true}
                    placeholder="Confirm_Pin"
                    placeholderTextColor="#A7B0C0"
                    autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                        {errors.Confirm_Pin}
                      </Text>
              <LinearGradient
              colors={COLORS.button}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: Scale(320),
                  top: Scale(10),
                  borderRadius: 10,
                  height: Scale(50),
                }}>
              <TouchableOpacity
              style={{width:"100%",height:verticalScale(56),justifyContent:'center',
              alignItems: "center",}}
                title="Request OTP"
                color="#f5871f00"
                elevation="2"
                // disabled={isFetching}
                onPress={handleSubmit}
              ><Text style={[FONTS.textstyle,{fontSize:Scale(20),color:"white",letterSpacing:0,fontWeight:"600" }]}>Sign Up</Text>
              </TouchableOpacity>
                </LinearGradient>
                <View 
              style={{width:Scale(320),height:Scale(30),marginTop:Scale(10),flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <Text>Already have an account?  </Text>
                <TouchableOpacity
                onPress={() => props.navigation.replace('UserLogin')}
              >
                <Text style={[FONTS.Link,{fontWeight:"600"}]}>Log In</Text>
              </TouchableOpacity>
              </View>
            </View>

          )
        }}
      </Formik>
      </SafeAreaView>
  )
}

export default UserSignUp

const styles = StyleSheet.create({
    LoginBox: {
        width: Scale(320),
      },
      input: {
        height:verticalScale(50),
        width: "100%",
        borderRadius: 10,
        marginTop: Scale(5),
        backgroundColor: "#F8FAFD",
        elevation: 1,
        alignItems: 'center',
        justifyContent: "center",
      },
      error: {
        color:"red",
        fontSize: 13,
        left: Scale(160)
      }
})