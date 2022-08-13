import Immutable from "seamless-immutable";
import {
  SIGNUP_USERS_ACCOUNT,
  LOGIN_ACCOUNT,
  LOGIN_ACCOUNT_SUCCESS,
  LOGIN_ACCOUNT_ERROR
} from "../ActionTypes";
import { createReducer } from "../CreateReducer";

const INITIAL_STATE = Immutable({
  loginData: null,
  isFetching: false,
  error: null,
  userId: null,
});

const reducers = {
  [LOGIN_ACCOUNT]: (state, action) => {
    return Immutable.merge(state, { loginData:null, isFetching: true });
  },
  [LOGIN_ACCOUNT_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, {
      loginData: data,
      isFetching: false,
      error: null,
    });
  },
  [LOGIN_ACCOUNT_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
  },

  [SIGNUP_USERS_ACCOUNT]: (state, data) => {
    return Immutable.merge(state, { loginData:null, isFetching: true });
  },
};

export const reducer = createReducer(INITIAL_STATE, reducers);
