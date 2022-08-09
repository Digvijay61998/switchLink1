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