import {put, takeLatest, call} from 'redux-saga/effects';
import {Alert} from 'react-native';
import API from '../../../services/Api';
import {
    GET_MQTT_SWITCH,
} from '../ActionTypes';
import Snackbar from 'react-native-snackbar';
import {navigate, replace, reset} from '../../../theme/rnnavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';



function* getMQTTswitch(action) {
    try {
      const response = yield call(API.post, '/user/verifyOtp', action.payload.data);
      console.log("saga redux @@response",response);
      const result = API.handleLoginResponse(response);
    //   if (result) {
    //     AsyncStorage.setItem('userToken', JSON.stringify(result.data.token));
    //       Snackbar.show({
    //         backgroundColor:'green',
    //         text: result.data.message,
    //         duration: 3000,
    //         // fontFamily: 'metropolis.regular',
    //       });
    //       console.log("navigation@@@@@@@@@");
    //       yield call(navigate, "PasswordConfirmation");
    //     } 
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
  
export default function* root() {
    yield [
      yield takeLatest(GET_MQTT_SWITCH, getMQTTswitch),
    ];
  }