import { put, takeLatest, call } from "redux-saga/effects";
import { Alert } from "react-native";
import API from "../../../services/Api";
import {
    GET_ROOM_LIST,
    GET_ROOM_LIST_ERROR,
  GET_ROOM_LIST_SUCCESS,
  CREATE_ROOM,
} from "../ActionTypes";
import * as RoomAction from "./Action";
import Snackbar from "react-native-snackbar";
import { navigate, replace, reset } from "../../../theme/rnnavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";


function* getRoomList(action) {
    try {
      const response = yield call(API.get, "/room/user");
        const result = API.handleResponseForMessage(response);
        console.log("result@@@@@@",result);
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
    yield [
        yield takeLatest(GET_ROOM_LIST, getRoomList),
        yield takeLatest(CREATE_ROOM, createRoom),
    ];
  }
  