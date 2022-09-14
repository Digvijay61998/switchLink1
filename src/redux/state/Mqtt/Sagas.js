import {put, takeLatest, call} from 'redux-saga/effects';
import {Alert} from 'react-native';
import API from '../../../services/Api';
import {
  GET_MQTT_SWITCH,
  CONTROL_MQTT_SWITCH,
  CONTROL_MQTT_FANSPEED
} from '../ActionTypes';
import Snackbar from 'react-native-snackbar';
import {navigate, replace, reset} from '../../../theme/rnnavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  * as  MqttAction from "./Action"


function* getMQTTswitch(action) {
  console.log("Action@@@@@@@@",action)
    try {
      const response = yield call(API.get,'/mqtt/state/'+action.payload.data.BasketKey);
      console.log("saga redux @@response",response);
      const result = API.handleResponseForMessage(response);
      if (result) {
        yield put(MqttAction.getMQTTswitchSuccess(response.data));
          // yield call(navigate, "PasswordConfirmation");
        } 
    } catch (error) {
      // let errorMsg = JSON.parse(error.request._response).message;
      // let errorStatus = JSON.parse(error.request._response).success;
      // if (errorStatus === false) {
      //   yield put(LoginActions.recoverPasswordError(error));
      // }
      console.log('Saga Responce Error',error);
    }
}
  
function* controlMQTTswitch(action) {
  console.log("action",action)
    try {
      const response = yield call(API.post,'/mqtt',action.payload.data);
      console.log("saga redux @@response",response);
      const result = API.handleResponseForMessage(response);
      // if (result) {
      //   yield put(MqttAction.getMQTTswitchSuccess(response.data));
      //     // yield call(navigate, "PasswordConfirmation");
      //   } 
    } catch (error) {
      // let errorMsg = JSON.parse(error.request._response).message;
      // let errorStatus = JSON.parse(error.request._response).success;
      // if (errorStatus === false) {
      //   yield put(LoginActions.recoverPasswordError(error));
      // }
      console.log('Saga Responce Error',error);
    }
}

function* controlMQTTFanSpeed(action) {
  console.log("action",action)
    try {
      const response = yield call(API.post,'/mqtt/fanSpeed',action.payload.data);
      console.log("saga redux @@response",response);
      const result = API.handleResponseForMessage(response);
      // if (result) {
      //   yield put(MqttAction.getMQTTswitchSuccess(response.data));
      //     // yield call(navigate, "PasswordConfirmation");
      //   } 
    } catch (error) {
      // let errorMsg = JSON.parse(error.request._response).message;
      // let errorStatus = JSON.parse(error.request._response).success;
      // if (errorStatus === false) {
      //   yield put(LoginActions.recoverPasswordError(error));
      // }
      console.log('Saga Responce Error',error);
    }
}
  
export default function* root() {
    yield [
      yield takeLatest(GET_MQTT_SWITCH, getMQTTswitch),
      yield takeLatest(CONTROL_MQTT_SWITCH, controlMQTTswitch),
      yield takeLatest(CONTROL_MQTT_FANSPEED, controlMQTTFanSpeed),
    ];
  }