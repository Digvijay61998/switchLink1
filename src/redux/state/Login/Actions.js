import * as ActionTypes from '../ActionTypes';

// Login Auth
export const loginAccount = payloadData => ({
  type: ActionTypes.LOGIN_ACCOUNT,
  payload: payloadData,
});
export const loginAccountSuccess = data => ({
  type: ActionTypes.LOGIN_ACCOUNT_SUCCESS,
  data,
});
export const loginAccountError = (error, id) => ({
  type: ActionTypes.LOGIN_ACCOUNT_ERROR,
  error,
});

// Sign Auth
export const signUserAccount = payloadData => ({
  type: ActionTypes.SIGNUP_USERS_ACCOUNT,
  payload: payloadData,
});


// board
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


  export const updateForgotPassword = payloadData => ({
    type: ActionTypes.UPDATE_FORGOT_PASSWORD,
    payload: payloadData,
});
  
  export const updateForgotPasswordSuccess = payloadData => ({
    type: ActionTypes.UPDATE_FORGOT_PASSWORD_SUCCESS,
    payload: payloadData,
});

export const updateForgotPasswordError = (error) => ({
    type: ActionTypes.UPDATE_FORGOT_PASSWORD_ERROR,
    error,
  });

  export const userVerifyOTP = payloadData => ({
    type: ActionTypes.POST_VERIFY_OTP,
    payload: payloadData,
});
  
export const userVerifyOTPError = (error) => ({
    type: ActionTypes.POST_VERIFY_OTP_ERROR,
    error,
  });

  export const userNewPassword = payloadData => ({
    type: ActionTypes.USER_NEW_PASSWORD,
    payload: payloadData,
});
  
export const userNewPasswordError = (error) => ({
    type: ActionTypes.USER_NEW_PASSWORD_ERROR,
    error,
  });
  
  export const userChangePassword = payloadData => ({
    type: ActionTypes.USER_CHANGE_PASSWORD,
    payload: payloadData,
});
  
export const userChangePasswordError = (error) => ({
    type: ActionTypes.USER_CHANGE_PASSWORD_ERROR,
    error,
  });
  
  
