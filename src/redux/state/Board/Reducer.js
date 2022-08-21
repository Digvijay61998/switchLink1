import Immutable from 'seamless-immutable';
import {
  CREATE_BOARD_PROCESS,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_ERROR,
  CREATE_BOARD_TO_ROOM,
  CREATE_BOARD_TO_ROOM_SUCCESS,
  CREATE_BOARD_TO_ROOM_ERROR,
  GET_SWITCH_LIST,
  GET_SWITCH_LIST_SUCCESS,
  GET_SWITCH_LIST_ERROR,
  GET_SWITCH_LIST_DETAILS,
  GET_DEVICE_LIST,
  GET_DEVICE_LIST_SUCCESS,
  GET_DEVICE_LIST_ERROR,
} from '../ActionTypes';
import {createReducer} from '../CreateReducer';

const INITIAL_STATE = Immutable({
  switchList: null,
  roomKey: null,
  deviceList: null,
  boardName: null,
  macAddress: null,
  boardDetails: null,
  BasketKey:null,
  message:'',
  isFetching: false,
  error: null,
});

const reducers = {
  [CREATE_BOARD_PROCESS]: (state, action) => {
    console.log('data', action);
    return Immutable.merge(state, {
      boardName: action.payload.data.boardName,
      isFetching: true,
      error: null,
    });
  },

  [CREATE_BOARD_SUCCESS]: (state, action) => {
    console.log('data', action);
    return Immutable.merge(state, {
      boardName: action.payload.data.boardName,
      macAddress: action.payload.data.macAddress,
      isFetching: false,
      error: null,
    });
  },

  [CREATE_BOARD_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
  },
  [GET_SWITCH_LIST]: (state, action) => {
    console.log('data@@@@@@@', action);
    return Immutable.merge(state, {
      boardDetails: action.payload.data,
      isFetching: true,
      error: null,
    });
  },
  [GET_SWITCH_LIST_DETAILS]: (state, action) => {
    console.log('data@@@@@@@', action);
    return Immutable.merge(state, {
      switchList: action.payload.switchList,
      isFetching: false,
      error: null,
    });
  },
  [GET_SWITCH_LIST_SUCCESS]: (state, action) => {
    console.log('data@@@@@@@@@@@@', action);
    return Immutable.merge(state, {
      BasketKey:action.payload.data.BasketKey,
      isFetching: false,
      error: null,
    });
  },

  [GET_SWITCH_LIST_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
  },

  [GET_DEVICE_LIST]: (state, action) => {
    console.log('data@@@@@@@', action);
    return Immutable.merge(state, {
      roomKey: action.payload.roomKey,
      isFetching: true,
      error: null,
    });
  },
  [GET_DEVICE_LIST_SUCCESS]: (state, action) => {
    console.log('data@@@@@@@@@@@@', action);
    return Immutable.merge(state, {
      deviceList:action.payload.deviceList,
      isFetching: false,
      error: null,
    });
  },

  [GET_DEVICE_LIST_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
  },

// CREATE BOARD FOR ROOMS

  [CREATE_BOARD_TO_ROOM]: (state, action) => {
    console.log('data', action);
    return Immutable.merge(state, {
      isFetching: true,
      error: null,
    });
  },

  [CREATE_BOARD_TO_ROOM_SUCCESS]: (state, action) => {
    console.log('data@@@@@@@@@@@@@@@@@@@@@@@', action);
    return Immutable.merge(state, {
      message: action.payload.data.message,
      isFetching: false,
      error: null,
    });
  },

  [CREATE_BOARD_TO_ROOM_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
  },
};

export const reducer = createReducer(INITIAL_STATE, reducers);
