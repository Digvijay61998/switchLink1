import { put, takeLatest, call, all } from "redux-saga/effects";
import { Alert } from "react-native";
import API from "../../../services/Api";
import {
    GET_ROOM_LIST,
  CREATE_ROOM,
} from "../ActionTypes";
import * as RoomAction from "./Action";
import Snackbar from "react-native-snackbar";
import { navigate, replace, reset } from "../../../theme/rnnavigation";


function* getRoomList(action) {
  console.log("you are in saga GET_ROOM_LIST",action);
    try {
      const response = yield call(API.get, "/room/user");
        const result = API.handleResponseForMessage(response);
        console.log("result@@@@@@",response);
        if (result) {
            if (result) {
                yield put(RoomAction.getRoomListSuccess({roomList:result.data}));
            }
        }
    } catch (error) {
    //   console.log("saga login account error===", error);
    //   let errorMsg = JSON.parse(error.request._response).message;
    //   let errorStatus = JSON.parse(error.request._response).success;
    //   if (errorStatus === false) {
    //     yield put(LoginActions.loginAccountError(error));
      Snackbar.show({
        backgroundColor:'red',
      text: "Network error",
      duration: 3000,
    });
    //   }
    yield put(RoomAction.getRoomListError(error));
      console.log("Saga Responce Error",error);
    }
}

function* createRoom(action) {
    console.log("saga login account==", action);
    try {
      const response = yield call(API.post, "/room" , action.payload.data);
      const result = API.handleResponseForMessage(response);
        if (result) {
          yield put(RoomAction.createRoomSuccess({ createRoom: result.data }));
          yield call(navigate, "AddDeviceStack");
          Snackbar.show({
            backgroundColor:'green',
              text: "Room Created",
              duration: 3000,
            });
        }
    } catch (error) {
    //   console.log("saga login account error===", error);
    //   let errorMsg = JSON.parse(error.request._response).message;
    //   let errorStatus = JSON.parse(error.request._response).success;
    //   if (errorStatus === false) {
    //     yield put(LoginActions.loginAccountError(error));
      Snackbar.show({
        backgroundColor:'red',
          text: "Network error",
          duration: 3000,
        });
    //   }
      console.log("Saga Responce Error",error);
    }
  }
export default function* root() {
    console.log("yield");
    yield all([
        yield takeLatest(GET_ROOM_LIST, getRoomList),
        yield takeLatest(CREATE_ROOM, createRoom),
    ]);
  }
  