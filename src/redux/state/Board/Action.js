import * as ActionTypes from '../ActionTypes';

export const createBoardProcess = payloadData => ({
    type: ActionTypes.CREATE_BOARD_PROCESS,
    payload: payloadData,
  });
export const createBoardSuccess = payloadData => ({
    type: ActionTypes.CREATE_BOARD_SUCCESS,
    payload: payloadData,
});

export const createBoardError = (error) => ({
    type: ActionTypes.CREATE_BOARD_ERROR,
    error,
});

export const getSwitchList = payloadData => ({
    type: ActionTypes.GET_SWITCH_LIST,
    payload: payloadData,
  });
  export const getSwitchListDetails = payloadData => ({
    type: ActionTypes.GET_SWITCH_LIST_DETAILS,
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