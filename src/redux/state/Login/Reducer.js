import Immutable from "seamless-immutable";
import {
  SIGNUP_USERS_ACCOUNT,
  LOGIN_ACCOUNT,



  LOGIN_ACCOUNT_ERROR,
  LOGIN_ACCOUNT_SUCCESS,
  SIGNUP_BUYER_SUCCESS,
  SIGNUP_BUYER_ERROR,
  SIGNUP_SELLER_ACCOUNT,
  SIGNUP_SELLER_SUCCESS,
  SIGNUP_SELLER_ERROR,
  RECOVER_EMAIL_ACCOUNT,
  RECOVER_EMAIL_SUCCESS,
  RECOVER_EMAIL_ERROR,
  ENTER_OTP_ACCOUNT,
  ENTER_OTP_SUCCESS,
  ENTER_OTP_ERROR,
  RECOVER_PASSWORD_ACCOUNT,
  RECOVER_PASSWORD_SUCCESS,
  RECOVER_PASSWORD_ERROR,
  CREATE_PROFILE_ACCOUNT,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_ERROR,
  SOCIAL_LOGIN_ACCOUNT,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_ERROR,
  LOGIN_FACEBOOK_ACCOUNT,
  LOGIN_FACEBOOK_SUCCESS,
  LOGIN_FACEBOOK_ERROR
} from "../ActionTypes";
import { createReducer } from "../CreateReducer";

const INITIAL_STATE = Immutable({
  loginData: null,
  socialLoginData: null,
  phoneVerifyData: null,
  isFetching: false,
  facebookSuccess: null,
  error: null,
  userId: null,
});

const reducers = {
  [SIGNUP_USERS_ACCOUNT]: (state, action) => {
    return Immutable.merge(state, { loginData: null, isFetching: true });
  },

  [LOGIN_ACCOUNT]: (state, action) => {
    return Immutable.merge(state, { loginData: null, isFetching: true });
  },





  

  [SOCIAL_LOGIN_ACCOUNT]: (state, action) => {
    return Immutable.merge(state, { socialLoginData: null, isFetching: true });
  },

  [SOCIAL_LOGIN_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, {
      socialLoginData: data,
      isFetching: false,
      error: null,
    });
  },

  [SOCIAL_LOGIN_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
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



  [SIGNUP_BUYER_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, {
      loginData: data,
      isFetching: false,
      error: null,
    });
  },

  [SIGNUP_BUYER_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
  },

  [SIGNUP_SELLER_ACCOUNT]: (state, action) => {
    return Immutable.merge(state, { loginData: null, isFetching: true });
  },

  [SIGNUP_SELLER_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, {
      loginData: data,
      isFetching: false,
      error: null,
    });
  },

  [SIGNUP_SELLER_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
  },

  [RECOVER_EMAIL_ACCOUNT]: (state, action) => {
    return Immutable.merge(state, { loginData: null, isFetching: true });
  },

  [RECOVER_EMAIL_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, {
      loginData: data,
      isFetching: false,
      error: null,
    });
  },

  [RECOVER_EMAIL_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
  },

  [ENTER_OTP_ACCOUNT]: (state, action) => {
    return Immutable.merge(state, { loginData: null, isFetching: true });
  },

  [ENTER_OTP_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, {
      loginData: data,
      isFetching: false,
      error: null,
    });
  },

  [ENTER_OTP_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
  },

  [RECOVER_PASSWORD_ACCOUNT]: (state, action) => {
    return Immutable.merge(state, { loginData: null, isFetching: true });
  },

  [RECOVER_PASSWORD_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, {
      loginData: data,
      isFetching: false,
      error: null,
    });
  },

  [RECOVER_PASSWORD_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
  },

  [CREATE_PROFILE_ACCOUNT]: (state, action) => {
    return Immutable.merge(state, { loginData: null, isFetching: true });
  },

  [CREATE_PROFILE_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, {
      loginData: data,
      isFetching: false,
      error: null,
    });
  },

  [CREATE_PROFILE_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
  },


  [LOGIN_FACEBOOK_ACCOUNT]: (state, action) => {
    return Immutable.merge(state, { facebookSuccess: null, isFetching: true });
  },

  [LOGIN_FACEBOOK_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, {
      facebookSuccess: data,
      isFetching: false,
      error: null,
    });
  },

  [LOGIN_FACEBOOK_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
  },
};

export const reducer = createReducer(INITIAL_STATE, reducers);
