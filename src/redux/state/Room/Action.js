import * as ActionTypes from '../ActionTypes';

export const getSwitchList = payloadData => ({
  type: ActionTypes.GET_SWITCH_LIST,
  payload: payloadData,
});

export const getSwitchListSuccess = payloadData => ({
  type: ActionTypes.GET_SWITCH_LIST_SUCCESS,
  payload: payloadData,
});

export const getSwitchListError = (error) => ({
    type: ActionTypes.GET_SWITCH_LIST_ERROR,
    error,
  });