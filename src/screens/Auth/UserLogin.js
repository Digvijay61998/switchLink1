import React, { Component ,useState} from 'react';
import {
  View,
  StatusBar,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import {CONTAINER,Scale,verticalScale,COLORS,FONTS,ICONS} from "../../common/constants"
import { useDispatch, useSelector } from "react-redux";
import { Formik, useFormik } from 'formik';
import LinearGradient from 'react-native-linear-gradient'
import * as yup from 'yup';

export default function UserLogin (props){

  const dispatch = useDispatch();
  const { loginData, isFetching, error } = useSelector((state) => state.auth);


  const handleSubmit = async (val) => {
    console.log("val", val);
    const input = val.email
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.match(regexEmail)) {
      // console.log("true~~~~~~~~>");
      const data = {
        email: input,
        password: val.password
      }
      props.navigation.navigate("HomeScreen");
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
       email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),

      password: yup
      .string()
      .required('Password is Required')
    })
    return (
      <View style={CONTAINER}>
        <View style={{width:Scale(200),right:Scale(50),marginTop:Scale(30)}}>
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
     
       <View style={{borderBottomColor:"#EBEBEB",borderBottomWidth:2,width:Scale(320),paddingLeft:Scale(10),flexDirection:"row",alignItems:"baseline",marginTop:Scale(40)}}>
     
         <Text style={{color:"#7F7F7F",lineHeight:Scale(17)}}>Don't have an account?</Text>
         <TouchableOpacity 
         onPress={()=>props.navigation.replace("UserSignUp")}
         >
        <Text style={[FONTS.Link,{fontWeight:"600"}]}> Create an account</Text>
      </TouchableOpacity>
      </View>
      <Formik
        initialValues={{
           email: "" ,
           password: '',
          }}
          validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, onKeyPress, errors, setFieldTouched, touched, isValid, handleSubmit }) => {
          return (
            <View style={styles.LoginBox}>
              <Text style={{bottom:verticalScale(30), color: "red"  }}>{error?.errorMessage}</Text>
              <Text style={[FONTS.textstyle, { fontSize: Scale(20), letterSpacing: -1, color: COLORS.black, top: verticalScale(-10) }]}>Log In</Text>
              <View
                style={styles.input} center
              >
                <TextInput
                   style={[FONTS.textstyle, { color: "#295597",paddingLeft:Scale(10), width: "100%"}]}
                   name="email"
                   keyboardType='email-address'
                   value={values.email}
                   onChangeText={handleChange('email')}
                   placeholder="Email"
                   placeholderTextColor="#4771a5"
                   autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                        {errors.email}
                      </Text>
              <View
                style={styles.input}
              >
                <TextInput
                    style={[FONTS.textstyle, { color: "#295597", width: "100%",fontSize: 18,paddingLeft:Scale(10) }]}
                    name="password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="#4771a5"
                    autoComplete="cc-number"
                />
              </View>
              <Text class="error" style={styles.error}>
                        {errors.password}
                      </Text>
              <TouchableOpacity
              style={{width:Scale(200),height:Scale(20),marginTop:Scale(20),left:Scale(160)}}
              >
                <Text style={[FONTS.Link,{fontWeight:"600"}]}>Forgot your password?</Text>
              </TouchableOpacity>
              <LinearGradient
              colors={COLORS.button}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: Scale(320),
                  top: Scale(30),
                  borderRadius: 10,
                  height: Scale(56),
                  elevation:10
                }}>
              <TouchableOpacity
              style={{width:"100%",height:verticalScale(56),justifyContent:'center',
              alignItems: "center",}}
                title="Request OTP"
                color="#f5871f00"
                elevation="2"
                disabled={isFetching}
                onPress={handleSubmit}
              ><Text style={[FONTS.textstyle,{fontSize:Scale(20),color:"white",letterSpacing:0,fontWeight:"600" }]}>Log In</Text>
              </TouchableOpacity>
                </LinearGradient>
            </View>

          )
        }}
      </Formik>
      </View>
    );
}


const styles = StyleSheet.create({
  LoginBox: {
    width: Scale(320),
  },
  input: {
    height:verticalScale(50),
    width: "100%",
    borderRadius: 10,
    marginTop: Scale(25),
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