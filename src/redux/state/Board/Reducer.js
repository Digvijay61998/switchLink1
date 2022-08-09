import Immutable from "seamless-immutable";
import {CREATE_BOARD_PROCESS,CREATE_BOARD_SUCCESS,CREATE_BOARD_ERROR} from "../ActionTypes";
import { createReducer } from "../CreateReducer";

const INITIAL_STATE = Immutable({
    boardName:null,
    macAdress:null,
    boardType:null,
    isFetching: false,
    error: null,
});

const reducers = {
    [CREATE_BOARD_PROCESS]: (state, { data }) => {
        return Immutable.merge(state, {
            boardName:null,
            macAdress:null,
            boardType:null,
          isFetching: false,
          error: null,
        });
      },
    
  [CREATE_BOARD_SUCCESS]: (state, { data }) => {
        return Immutable.merge(state, {
            boardName:null,
            macAdress:null,
            boardType:null,
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
};

export const reducer = createReducer(INITIAL_STATE, reducers);
