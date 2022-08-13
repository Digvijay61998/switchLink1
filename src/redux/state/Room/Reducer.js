import Immutable from "seamless-immutable";
import {CREATE_ROOM_SUCCESS,CREATE_ROOM_ERROR} from "../ActionTypes";
import { createReducer } from "../CreateReducer";

const INITIAL_STATE = Immutable({
     switchList:null,
    isFetching: false,
    error: null,
});

const reducers = {
  [CREATE_ROOM_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, {
        boardName:null,
        macAdress:null,
        boardType:null,
      isFetching: false,
      error: null,
    });
  },
  [CREATE_ROOM_SUCCESS]: (state, { data }) => {
        return Immutable.merge(state, {
            boardName:null,
            macAdress:null,
            boardType:null,
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
