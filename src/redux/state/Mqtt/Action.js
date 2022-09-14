import * as ActionTypes from '../ActionTypes';

export const getMQTTswitch = payloadData => ({
    type: ActionTypes.GET_MQTT_SWITCH,
    payload: payloadData,
});
export const getMQTTuserId = payloadData => ({
    type: ActionTypes.GET_MQTT_SWITCH_USERID,
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

export const controlMQTTswitch = payloadData => ({
    type: ActionTypes.CONTROL_MQTT_SWITCH,
    payload: payloadData,
  });
export const controlMQTTswitchSuccess = payloadData => ({
    type: ActionTypes.CONTROL_MQTT_SWITCH_SUCCESS,
    payload: payloadData,
});

export const controlMQTTswitchError = (error) => ({
    type: ActionTypes.CONTROL_MQTT_SWITCH_ERROR,
    error,
});

export const controlMQTTFanSpeed = payloadData => ({
    type: ActionTypes.CONTROL_MQTT_FANSPEED,
    payload: payloadData,
  });
export const controlMQTTFanSpeedError = (error) => ({
    type: ActionTypes.CONTROL_MQTT_FANSPEED_ERROR,
    error,
});
