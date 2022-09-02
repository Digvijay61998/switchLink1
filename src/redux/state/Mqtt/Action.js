import * as ActionTypes from '../ActionTypes';

export const getMQTTswitch = payloadData => ({
    type: ActionTypes.GET_MQTT_SWITCH,
    payload: payloadData,
  });
export const getMQTTswitchSuccess = payloadData => ({
    type: ActionTypes.GET_MQTT_SWITCH_SUCCESS,
    payload: payloadData,
});

export const getMQTTswitchError = (error) => ({
    type: ActionTypes.GET_MQTT_SWITCH_ERROR,
    error,
});