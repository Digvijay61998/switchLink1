import Immutable from "seamless-immutable";
import {
  GET_ROOM_LIST,
  GET_ROOM_LIST_ERROR,
  GET_ROOM_LIST_SUCCESS,
  CREATE_ROOM,
  CREATE_ROOM_ERROR,
  CREATE_ROOM_SUCCESS
} from "../ActionTypes";
import { createReducer } from "../CreateReducer";

const INITIAL_STATE = Immutable({
  roomList: null, 
  createRoom:null,
    isFetching:false,
    error: null,
});

const reducers = {
  [GET_ROOM_LIST]: (state, action) => {
    console.log("action",action);
    return Immutable.merge(state, {
      roomList:null,
      isFetching: true,
      error: null,
    });
  },
  [GET_ROOM_LIST_SUCCESS]: (state, action) => {
    return Immutable.merge(state, {
          roomList:action.payload.roomList,
          isFetching: false,
          error: null,
        });
      },
    
  [GET_ROOM_LIST_ERROR]: (state, error) => {
        return Immutable.merge(state, {
          isFetching: false,
          error: error,
        });
  },
  [CREATE_ROOM]: (state, { data }) => {
    return Immutable.merge(state, {
      roomList:null,
      isFetching: true,
      error: null,
    });
  },
  [CREATE_ROOM_SUCCESS]: (state, action) => {
    return Immutable.merge(state, {
         createRoom:action.payload.createRoom,
          isFetching: false,
          error: null,
        });
      },
    
  [CREATE_ROOM_ERROR]: (state, error) => {
        return Immutable.merge(state, {
          isFetching: false,
          error: error,
        });
      },
};


export const reducer = createReducer(INITIAL_STATE, reducers);
