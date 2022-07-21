import * as ActionTypes from '../ActionTypes';

export const loginAccount = payloadData => ({
  type: ActionTypes.LOGIN_ACCOUNT,
  payload: payloadData,
});

export const SocialLoginGoogleAccount = payloadData => ({
  type: ActionTypes.SOCIAL_LOGIN_ACCOUNT,
  payload: payloadData,
});

export const SocialLoginGoogleSuccess = data => ({
  type: ActionTypes.SOCIAL_LOGIN_SUCCESS,
  data,
});

export const SocialLoginGoogleError = (error, id) => ({
  type: ActionTypes.SOCIAL_LOGIN_ERROR,
  error,
});

export const loginAccountSuccess = data => ({
  type: ActionTypes.LOGIN_ACCOUNT_SUCCESS,
  data,
});

export const loginAccountError = (error, id) => ({
  type: ActionTypes.LOGIN_ACCOUNT_ERROR,
  error,
});

export const signUpBuyerAccount = payloadData => ({
  type: ActionTypes.SIGNUP_BUYER_ACCOUNT,
  payload: payloadData,
});

export const signUpBuyerSuccess = data => ({
  type: ActionTypes.SIGNUP_BUYER_SUCCESS,
  data,
});

export const signUpBuyerError = (error, id) => ({
  type: ActionTypes.SIGNUP_BUYER_ERROR,
  error,
});

export const signUpSellerAccount = payloadData => ({
  type: ActionTypes.SIGNUP_SELLER_ACCOUNT,
  payload: payloadData,
});

export const signUpSellerSuccess = data => ({
  type: ActionTypes.SIGNUP_SELLER_SUCCESS,
  data,
});

export const signUpSellerError = (error, id) => ({
  type: ActionTypes.SIGNUP_SELLER_ERROR,
  error,
});

export const recoverEmailAccount = payloadData => ({
  type: ActionTypes.RECOVER_EMAIL_ACCOUNT,
  payload: payloadData,
});

export const recoverEmailSuccess = data => ({
  type: ActionTypes.RECOVER_EMAIL_SUCCESS,
  data,
});

export const recoverEmailError = (error, id) => ({
  type: ActionTypes.RECOVER_EMAIL_ERROR,
  error,
});

export const enterOtpAccount = payloadData => ({
  type: ActionTypes.ENTER_OTP_ACCOUNT,
  payload: payloadData,
});

export const enterOtpSuccess = data => ({
  type: ActionTypes.ENTER_OTP_SUCCESS,
  data,
});

export const enterOtpError = (error, id) => ({
  type: ActionTypes.ENTER_OTP_ERROR,
  error,
});

export const recoverPasswordAccount = payloadData => ({
  type: ActionTypes.RECOVER_PASSWORD_ACCOUNT,
  payload: payloadData,
});

export const recoverPasswordSuccess = data => ({
  type: ActionTypes.RECOVER_PASSWORD_SUCCESS,
  data,
});

export const recoverPasswordError = (error, id) => ({
  type: ActionTypes.RECOVER_PASSWORD_ERROR,
  error,
});

export const createProfileAccount = payloadData => ({
  type: ActionTypes.CREATE_PROFILE_ACCOUNT,
  payload: payloadData,
});

export const createProfileSuccess = data => ({
  type: ActionTypes.CREATE_PROFILE_SUCCESS,
  data,
});

export const createProfileError = (error, id) => ({
  type: ActionTypes.CREATE_PROFILE_ERROR,
  error,
});

export const loginWithFacebook = payloadData => ({
  type: ActionTypes.LOGIN_FACEBOOK_ACCOUNT,
  payload: payloadData,
});

export const loginWithFacebookSuccess = data => ({
  type: ActionTypes.LOGIN_FACEBOOK_SUCCESS,
  data,
});

export const loginWithFacebookError = (error, id) => ({
  type: ActionTypes.LOGIN_FACEBOOK_ERROR,
  error,
});
