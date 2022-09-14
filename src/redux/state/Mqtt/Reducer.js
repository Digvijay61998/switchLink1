import Immutable from "seamless-immutable";
import {
  GET_MQTT_SWITCH_USERID,
  GET_MQTT_SWITCH,
  GET_MQTT_SWITCH_SUCCESS,
  GET_MQTT_SWITCH_ERROR,
  CONTROL_MQTT_SWITCH,
  CONTROL_MQTT_SWITCH_SUCCESS,
  CONTROL_MQTT_SWITCH_ERROR,
  CONTROL_MQTT_FANSPEED,
  CONTROL_MQTT_FANSPEED_ERROR
} from "../ActionTypes";
import { createReducer } from "../CreateReducer";

const INITIAL_STATE = Immutable({
  mqttData: null,
  userId:null,
  SwitchStatus:true,
  isFetching: false,
  error: null,
});

const reducers = {
  [GET_MQTT_SWITCH]: (state, action) => {
    return Immutable.merge(state, { mqttData:null, isFetching: true });
  },
  [GET_MQTT_SWITCH_USERID]: (state, action) => {
    console.log("action++@@@@@@@",action);
    return Immutable.merge(state, {
      userId: action.payload.data.userId,
      isFetching: false,
      error: null,
    });
  },
  [GET_MQTT_SWITCH_SUCCESS]: (state, action) => {
    console.log("action++@@@@@@@",action);
    return Immutable.merge(state, {
      mqttData: action.payload.switchs,
      SwitchStatus:action.payload.state,
      isFetching: false,
      error: null,
    });
  },
  [GET_MQTT_SWITCH_ERROR]: (state, error) => {
    console.log("error",error);
    return Immutable.merge(state, {
      error,
    });
  },
  [CONTROL_MQTT_SWITCH]: (state, action) => {
    return Immutable.merge(state, {  isFetching: true });
  },
  [CONTROL_MQTT_SWITCH_SUCCESS]: (state, action) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: null,
    });
  },
  [CONTROL_MQTT_SWITCH_ERROR]: (state, error) => {
    console.log("error",error);
    return Immutable.merge(state, {
      error,
    });
  },
  [CONTROL_MQTT_FANSPEED]: (state, action) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: null,
    });
  },
  [CONTROL_MQTT_FANSPEED_ERROR]: (state, error) => {
    console.log("error",error);
    return Immutable.merge(state, {
      error,
    });
  },
};

export const reducer = createReducer(INITIAL_STATE, reducers);
