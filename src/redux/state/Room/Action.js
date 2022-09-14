import * as ActionTypes from '../ActionTypes';

export const getRoomsList = payloadData => (console.log("GET_ROOM_LIST Action@@"),{
  type: ActionTypes.GET_ROOM_LIST,
  payload:payloadData
});
export const getRoomListError = (error) => ({
  type: ActionTypes.GET_ROOM_LIST_ERROR,
  error,
});
export const getRoomListSuccess = payloadData => ({
  type: ActionTypes.GET_ROOM_LIST_SUCCESS,
  payload: payloadData,
});

export const createRoom = payloadData => ({
  type: ActionTypes.CREATE_ROOM,
  payload: payloadData,
});
export const createRoomSuccess = payloadData => ({
  type: ActionTypes.CREATE_ROOM_SUCCESS,
  payload: payloadData,
});
export const createRoomError = (error) => ({
  type: ActionTypes.CREATE_ROOM_ERROR,
  error,
});
