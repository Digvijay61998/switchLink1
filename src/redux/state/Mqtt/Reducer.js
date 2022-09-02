import Immutable from "seamless-immutable";
import {
  GET_MQTT_SWITCH,
  GET_MQTT_SWITCH_SUCCESS,
  GET_MQTT_SWITCH_ERROR,
} from "../ActionTypes";
import { createReducer } from "../CreateReducer";

const INITIAL_STATE = Immutable({
  mqttData: null,
  isFetching: false,
  error: null,
});

const reducers = {
  [GET_MQTT_SWITCH]: (state, action) => {
    return Immutable.merge(state, { mqttData:null, isFetching: true });
  },
  [GET_MQTT_SWITCH_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, {
        mqttData: data,
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
};

export const reducer = createReducer(INITIAL_STATE, reducers);
