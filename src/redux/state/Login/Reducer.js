import Immutable from "seamless-immutable";
import {
  SIGNUP_USERS_ACCOUNT,
  LOGIN_ACCOUNT,
  LOGIN_ACCOUNT_SUCCESS,
  LOGIN_ACCOUNT_ERROR,
  UPDATE_FORGOT_PASSWORD,
  UPDATE_FORGOT_PASSWORD_SUCCESS,
  UPDATE_FORGOT_PASSWORD_ERROR,
  POST_VERIFY_OTP,
  POST_VERIFY_OTP_ERROR,
  USER_NEW_PASSWORD,
  USER_NEW_PASSWORD_ERROR
} from "../ActionTypes";
import { createReducer } from "../CreateReducer";

const INITIAL_STATE = Immutable({
  loginData: null,
  UserEmail:null,
  message:null,
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
    console.log("error",error);
    return Immutable.merge(state, {
      error,
    });
  },

  [UPDATE_FORGOT_PASSWORD]: (state, action) => {
    return Immutable.merge(state, { loginData:null, isFetching: true });
  },
  [UPDATE_FORGOT_PASSWORD_SUCCESS]: (state, action) => {
    console.log("action@@@",action);
    return Immutable.merge(state, {
      message: action.payload.message,
      UserEmail:action.payload.UserEmail.email,
      isFetching: false,
      error: null,
    });
  },
  [UPDATE_FORGOT_PASSWORD_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
  },

  [POST_VERIFY_OTP]: (state, action) => {
    console.log("action@@@",action);
    return Immutable.merge(state, {
      isFetching: false,
      error: null,
    });
  },
  [POST_VERIFY_OTP_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
  },
  [USER_NEW_PASSWORD]: (state, action) => {
    console.log("action@@@",action);
    return Immutable.merge(state, {
      isFetching: false,
      error: null,
    });
  },
  [USER_NEW_PASSWORD_ERROR]: (state, error) => {
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
