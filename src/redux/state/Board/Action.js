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

export const getDeviceList = payloadData => ({
  type: ActionTypes.GET_DEVICE_LIST,
  payload: payloadData,
});
export const getDeviceListSuccess = payloadData => ({
  type: ActionTypes.GET_DEVICE_LIST_SUCCESS,
  payload: payloadData,
});

export const getDeviceListError = (error) => ({
  type: ActionTypes.GET_DEVICE_LIST_ERROR,
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

  export const updateBoardName = payloadData => ({
    type: ActionTypes.UPDATE_BOARD_NAME,
    payload: payloadData,
  });
  
  export const updateBoardNameError = (error) => ({
      type: ActionTypes.UPDATE_BOARD_NAME_ERROR,
      error,
  });
  

  // Create board to room 

  export const createBoardToRoom = payloadData => ({
    type: ActionTypes.CREATE_BOARD_TO_ROOM,
    payload: payloadData,
  });
export const createBoardToRoomSuccess = payloadData => ({
    type: ActionTypes.CREATE_BOARD_TO_ROOM_SUCCESS,
    payload: payloadData,
});

export const createBoardToRoomError = (error) => ({
    type: ActionTypes.CREATE_BOARD_TO_ROOM_ERROR,
    error,
});
  