import { put, takeLatest, call } from "redux-saga/effects";
import { Alert } from "react-native";
import API from "../../../services/Api";
import {
  LOGIN_ACCOUNT,
  SIGNUP_USERS_ACCOUNT,



  RECOVER_EMAIL_ACCOUNT,
  ENTER_OTP_ACCOUNT,
  RECOVER_PASSWORD_ACCOUNT,
  SIGNUP_SELLER_ACCOUNT,
  CREATE_PROFILE_ACCOUNT,
  SOCIAL_LOGIN_ACCOUNT,
  LOGIN_FACEBOOK_ACCOUNT,
} from "../ActionTypes";
import * as LoginActions from "./Actions";
import Snackbar from "react-native-snackbar";
import { navigate, replace, reset } from "../../../theme/rnnavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

function* loginAccount(action) {
  console.log("saga login account==", action.payload.data);
  try {
    const response = yield call(API.post, "/user/login", action.payload.data);
    console.log("response",response);
    // const result = API.handleLoginResponse(response);
    // console.log("Result Response==", JSON.stringify(result));
    // if (result) {
    //   if (result) {
    //     yield put(LoginActions.loginAccountSuccess(result.data));
    //     try {
    //       AsyncStorage.setItem("userToken", JSON.stringify(result.data.data));
    //     } catch (error) {
    //       console.log("error: ", error);
    //     }
    //     if (result.data.data.role === "customer") {
    //       Snackbar.show({
    //         text: "User Login Succesfully",
    //         duration: 3000,
    //       });
    //       yield call(reset, "BuyerNavigator");
    //     } else if (result.data.data.sellerProfileStatus === false) {
    //       Snackbar.show({
    //         text: "Please Complete Your Profile",
    //         duration: 3000,
    //       });
    //       yield call(reset, "StoreInformastion");
    //       Alert.alert(
    //         "Success",
    //         "Your Account has been registered into our  Database and our executives will review and activate your account within 24 to 48 hours"
    //       );
    //       // Snackbar.show({
    //       //   text: 'User Login Succesfully',
    //       //   duration: 3000,
    //       // });
    //     } else {
    //       yield call(reset, "StackScreenSeller");
    //     }
    //     console.log("@@@ Login Account Api=======", result.success);
    //   } else yield put(LoginActions.loginAccountError(result));
    // } else {
    //   yield put(LoginActions.loginAccountError("Some Error"));
    // }
  } catch (error) {
    // console.log("saga login account error===", error);
    // let errorMsg = JSON.parse(error.request._response).message;
    // let errorStatus = JSON.parse(error.request._response).success;
    // if (errorStatus === false) {
    //   yield put(LoginActions.loginAccountError(error));
    //   Snackbar.show({
    //     text: errorMsg,
    //     duration: 3000,
    //   });
    // }
    console.log("Saga Responce Error",error);
  }
}


function* signUserAccount(action) {
  console.log("saga signUserAccount==", action.payload.data);
  try {
    const response = yield call(
      () => API.post("user", action.payload.data),
    );
    console.log("response SignUp Response@@@@@@@@@@==", response);
    // const result = API.handleLoginResponse(response);
    // console.log("Buyer Response==", result);
    // if (result) {
    //   if (result) {
    //     yield put(LoginActions.signUpBuyerSuccess(result.data));
    //     if (result.status === 200) {
    //       Snackbar.show({
    //         text:
    //           "Your Account has been registered In SwitchLink Data base",
    //         duration: 3000,
    //         // fontFamily: 'Metropolis',
    //       });
    //       alert(
    //         `Welcome ${action.payload.data.name} You have been successfully registered to the Switch Link Application,`
    //       );
    //       yield call(navigate, "HomeNavigator");
    //     }
    //     console.log("@@@ Buyer Account Api=======", result);
    //   } else yield put(LoginActions.signUpBuyerError(result));
    // } else {
    //   yield put(LoginActions.signUpBuyerError("Some Error"));
    // }
  } catch (error) {
    // let errorMsg = JSON.parse(error.request._response).message;
    // let errorStatus = JSON.parse(error.request._response).success;
    // if (errorStatus === false) {
    // 	yield put(LoginActions.signUpBuyerError(error));
    // 	Snackbar.show({
    // 		text: errorMsg,
    // 		duration: 3000,
    // 		// fontFamily: 'Metropolis',
    // 	});
    // }
    console.log("Saga Responce Error", error);
  }
}

function* recoverPasswordAccount(action) {
  console.log("saga recoverPasswordAccount==", action.payload.data);
  try {
    const response = yield call(
      API.post,
      "auth/resetPassword",
      action.payload.data
    );
    console.log("Recover Password Response==", response);
    const result = API.handleLoginResponse(response);
    console.log("Recover Response==", result);
    if (result) {
      yield put(LoginActions.recoverPasswordSuccess(result.data));
      if (result.data.success === true) {
        Snackbar.show({
          text: result.data.message,
          duration: 3000,
          // fontFamily: 'Metropolis',
        });
        yield call(navigate, "UserLogin");
        console.log("@@@ Recover Password Api=======", result.success);
      } else yield put(LoginActions.recoverPasswordError(result));
    } else {
      yield put(LoginActions.recoverPasswordError("Some Error"));
    }
  } catch (error) {
    let errorMsg = JSON.parse(error.request._response).message;
    let errorStatus = JSON.parse(error.request._response).success;
    if (errorStatus === false) {
      yield put(LoginActions.recoverPasswordError(error));
      Snackbar.show({
        text: errorMsg,
        duration: 3000,
        // fontFamily: 'Metropolis',
      });
    }
    console.log("Saga Responce Error");
  }
}

export default function* root() {
  yield [
    yield takeLatest(LOGIN_ACCOUNT, loginAccount),
    // yield takeLatest(SOCIAL_LOGIN_ACCOUNT, SocialLoginGoogleAccount),
    yield takeLatest(SIGNUP_USERS_ACCOUNT, signUserAccount),
    yield takeLatest(RECOVER_PASSWORD_ACCOUNT, recoverPasswordAccount),
  ];
}
