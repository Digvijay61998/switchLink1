import {put, takeLatest, call} from 'redux-saga/effects';
import {Alert} from 'react-native';
import API from '../../../services/Api';
import {
  LOGIN_ACCOUNT,
  SIGNUP_USERS_ACCOUNT,
  UPDATE_FORGOT_PASSWORD,
  POST_VERIFY_OTP,
  USER_NEW_PASSWORD,
  USER_CHANGE_PASSWORD
} from '../ActionTypes';
import * as LoginActions from './Actions';
import Snackbar from 'react-native-snackbar';
import {navigate, replace, reset} from '../../../theme/rnnavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RoomAction from "../Room/Action";

function* loginAccount(action) {
  console.log('saga login account==', action.payload.data);
  try {
    const response = yield call(API.post, '/user/login', action.payload.data);
    console.log('response@@@@@@@@@@@@', response);
    const result = API.handleLoginResponse(response);
    console.log('Result Response==', JSON.stringify(result));
    if (result) {
      if (result.data.token) {
        yield put(LoginActions.loginAccountSuccess(result.data));
        try {
          AsyncStorage.setItem('userToken', JSON.stringify(result.data.token));
        } catch (error) {
          console.log('error: ', error);
        }
        yield call(reset, 'HomeNavigator');
        Snackbar.show({
          text: 'User Login Succesfully',
          duration: 3000,
        });
      }
    } else yield put(LoginActions.loginAccountError(result));
  } catch (error) {
    if (error.response.status == 403) {
      yield put(LoginActions.loginAccountError(error.response.data));
      Snackbar.show({
        backgroundColor:"red",
        text: error.response.data,
        duration: 3000,
      });
    }else{
      Snackbar.show({
        backgroundColor:"red",
        text: error.message,
        duration:3000,
      });
    }
    console.log('Saga Responce Error', error);
  }
}

function* signUserAccount(action) {
  console.log('saga signUserAccount==', action);
  try {
    const response = yield call(() => API.post('/user', action.payload.data));
    console.log('SignUp response@@@@@@@@@==', response);
    const result = API.handleLoginResponse(response);
    console.log('SignUp result@@@@@@@@@==', result);
    // UserLogin
    if (result) {
      Snackbar.show({
        backgroundColor:'green',
        text: 'Your Account has been registered In SwitchLink Data base please login',
        duration: 3000,
        // fontFamily: 'metropolis.regular',
      });
      // alert(
      //   `Welcome ${action.payload.data.name} You have been successfully registered to the Switch Link Application,`
      // );
      yield call(navigate, 'UserLogin');
      console.log('@@@ Buyer Account Api=======', result);
      // } else {
      //   yield put(LoginActions.signUpBuyerError("Some Error"));
    }
  } catch (error) {
    if (error.response.status == 400 && error.response.data) {
      Alert.alert(
        "success",
        `${error.response.data}`,
        [
          { text: "OK", }
        ]
      );
    }
    // }
    console.log('Saga Responce Error', error);
  }
}

function* updateForgotPassword(action) {
  console.log("sagaa redux@@  callUPDATE_FORGOT_PASSWORD",action);
  try {
    const response = yield call(API.put, '/user/forgot', action.payload.data);
    const result = API.handleLoginResponse(response);
    if (result) {
      yield put(LoginActions.updateForgotPasswordSuccess({
        message: result.data.message,
        UserEmail:action.payload.data
      }));
      if (result.data.success === true) {
        Snackbar.show({
          backgroundColor:'green',
          text: result.data.message,
          duration: 3000,
          // fontFamily: 'metropolis.regular',
        });
        yield call(navigate, "Verification");
      } else yield put(LoginActions.updateForgotPasswordError(result));
    } 
  } catch (error) {
    // let errorMsg = JSON.parse(error.request._response).message;
    // let errorStatus = JSON.parse(error.request._response).success;
    // if (errorStatus === false) {
    //   yield put(LoginActions.recoverPasswordError(error));
      Snackbar.show({
        text: 'network error',
        duration: 3000,
        // fontFamily: 'metropolis.regular',
      });
    // }
    console.log('Saga Responce Error');
  }
}

function* userVerifyOTP(action) {
  try {
    const response = yield call(API.post, '/user/verifyOtp', action.payload.data);
    console.log("saga redux @@response",response);
    const result = API.handleLoginResponse(response);
    if (result) {
      AsyncStorage.setItem('userToken', JSON.stringify(result.data.token));
        Snackbar.show({
          backgroundColor:'green',
          text: result.data.message,
          duration: 3000,
          // fontFamily: 'metropolis.regular',
        });
        console.log("navigation@@@@@@@@@");
        yield call(navigate, "PasswordConfirmation");
      } 
  } catch (error) {
    // let errorMsg = JSON.parse(error.request._response).message;
    // let errorStatus = JSON.parse(error.request._response).success;
    // if (errorStatus === false) {
    //   yield put(LoginActions.recoverPasswordError(error));
    Snackbar.show({
        backgroundColor:'red',
        text: 'OTP is not vaild',
        duration: 3000,
        // fontFamily: 'metropolis.regular',
      });
    // }
    console.log('Saga Responce Error');
  }
}


function* userNewPassword(action) {
  console.log("saga redux calling New password api",action);
  try {
    const response = yield call(API.put, '/user/resetPassword', action.payload.data);
    const result = API.handleLoginResponse(response);
    console.log("result@@@@@@@",result);
    if (result) {
      yield put(RoomAction.getRoomsList());
      if (result.success == true) {
        Snackbar.show({
          backgroundColor:'green',
          text: result.data.message,
          duration: 3000,
          // fontFamily: 'metropolis.regular',
        });
     
        Alert.alert(
      "success",
      "Password Created succesfully",
      [
        { text: "OK",}
      ]
    );
        yield call(reset, "UserLogin")
      }
      } 
  } catch (error) {
    // let errorMsg = JSON.parse(error.request._response).message;
    // let errorStatus = JSON.parse(error.request._response).success;
    if (error?.response?.status === 404) {
      yield put(LoginActions.userNewPasswordError(error.response.data));
    Snackbar.show({
        backgroundColor:'red',
        text: 'network error',
        duration: 3000,
        // fontFamily: 'metropolis.regular',
      });
    }
    console.log('Saga Responce Error');
  }
}

function* userChangePassword(action) {
  try {
    const response = yield call(API.put, '/user/changePassword', action.payload.data);
    const result = API.handleLoginResponse(response);
    console.log("saga redux @@@@ response");
    if (result) {
      if (result.status == 202) {
        alert(
        ` ${result.data.message} ,`
      );
      }
        yield call(reset, "Setting");
      } 
  } catch (error) {
    // let errorMsg = JSON.parse(error.request._response).message;
    // let errorStatus = JSON.parse(error.request._response).success;
    if (error?.response?.status === 404 || error?.response?.data?.error?.code === 500) {
      yield put(LoginActions.userChangePasswordError(error?.response?.data));
    Snackbar.show({
        backgroundColor:'red',
        text: 'password is wrong',
        duration: 3000,
        // fontFamily: 'metropolis.regular',
      });
    }
    console.log('Saga Responce Error',error);
  }
}
export default function* root() {
  yield [
    yield takeLatest(LOGIN_ACCOUNT, loginAccount),
    yield takeLatest(UPDATE_FORGOT_PASSWORD, updateForgotPassword),
    yield takeLatest(SIGNUP_USERS_ACCOUNT, signUserAccount),
    yield takeLatest(POST_VERIFY_OTP, userVerifyOTP),
    yield takeLatest(USER_NEW_PASSWORD, userNewPassword),
    yield takeLatest(USER_CHANGE_PASSWORD, userChangePassword),
  ];
}
