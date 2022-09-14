import { put, takeLatest, call } from "redux-saga/effects";
import { Alert } from "react-native";
import API from "../../../services/Api";
import {
    CREATE_BOARD_SUCCESS,
  GET_SWITCH_LIST_SUCCESS,
  GET_DEVICE_LIST,
  CREATE_BOARD_TO_ROOM,
  UPDATE_BOARD_NAME,
  UPDATE_EDIT_SWITCH_LIST_SUCCESS
} from "../ActionTypes";
import * as RoomAction from "../Room/Action";
import * as BoardAction from "./Action";
import Snackbar from "react-native-snackbar";
import { navigate, replace, reset } from "../../../theme/rnnavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";


function* createBoard(action) {
    try {
      const response = yield call(API.post, "/board", action.payload.data);
      const result = API.handleResponseForMessage(response);
        if (result) {
          if (result) {
              console.log("result@@@@@@@@@@@@@@@",result);
                yield put(BoardAction.getSwitchList({data:result.data}));
                try {
                    Snackbar.show({
                        backgroundColor:'green',
                        text: "Board Created Succesfully",
                        duration: 3000,
                    });
                    yield call(navigate, "ConfirmBoardDetails");
                } catch (error) {
                    console.log("error: ", error);
                }
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
      console.log("Saga Responce Error",error);
    }
}

function* createBoardToRoom(action) {
  try {
    const response = yield call(API.post, "/board/addToRoom", action.payload.data);
    // const result = API.handleResponseForSearchMessage(response);
      if (response) {
            yield put(BoardAction.createBoardToRoomSuccess({ data:response.data.message }));
        try {
            yield put(RoomAction.getRoomsList('calling Room list API'));
                yield call(navigate, 'RootBottomTabStack', { screen: 'CustomRooms' });
              } catch (error) {
                  console.log("error: ", error);
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
    console.log("Saga Responce Error",error);
  }
}

function* getSwitchList(action) {
    console.log("saga login account==", action);
    try {
      const response = yield call(API.get, "/switch/board/"+action.payload.data.BasketKey);
      const result = API.handleResponseForMessage(response);
        if (result) {
                yield put(BoardAction.getSwitchListDetails({switchList:result.data}));
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
  
function* getDeviceList(action) {
  console.log("saga login account==", action);
  try {
    const response = yield call(API.get, "/board/room/"+action.payload.roomKey);
    const result = API.handleResponseForMessage(response);
      if (result) {
        yield put(BoardAction.getDeviceListSuccess({ deviceList: result.data}));
              yield call(navigate, 'AddStackRoom', { screen: 'EditRoom'});
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

function* updateBoardName(action) {
  try {
    const response = yield call(API.put, "/board/updateBoard", action.payload.data);
    const result = API.handleResponseForMessage(response);
    console.log("saga redux @@@response",response);
      // if (result) {
      //   if (result) {
      //       console.log("result@@@@@@@@@@@@@@@",result);
      //         yield put(BoardAction.getSwitchList({data:result.data}));
      //         try {
      //             Snackbar.show({
      //                 backgroundColor:'green',
      //                 text: "Board Created Succesfully",
      //                 duration: 3000,
      //             });
      //             yield call(navigate, "ConfirmBoardDetails");
      //         } catch (error) {
      //             console.log("error: ", error);
      //         }
      //     }
      // }
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

function* updateEditSwitchListSuccess(action) {
  try {
    const response = yield call(API.put, "/switch/", action.payload.data);
    const result = API.handleResponseForMessage(response);
    console.log("saga redux @@@updateEditSwitchListSuccess",response);
      // if (result) {
      //   if (result) {
      //       console.log("result@@@@@@@@@@@@@@@",result);
      //         yield put(BoardAction.getSwitchList({data:result.data}));
      //         try {
      //             Snackbar.show({
      //                 backgroundColor:'green',
      //                 text: "Board Created Succesfully",
      //                 duration: 3000,
      //             });
      //             yield call(navigate, "ConfirmBoardDetails");
      //         } catch (error) {
      //             console.log("error: ", error);
      //         }
      //     }
      // }
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
      yield takeLatest(CREATE_BOARD_SUCCESS, createBoard),
      yield takeLatest(CREATE_BOARD_TO_ROOM, createBoardToRoom),
      yield takeLatest(GET_SWITCH_LIST_SUCCESS, getSwitchList),
      yield takeLatest(GET_DEVICE_LIST, getDeviceList),
      yield takeLatest(UPDATE_BOARD_NAME, updateBoardName),
      yield takeLatest(UPDATE_EDIT_SWITCH_LIST_SUCCESS, updateEditSwitchListSuccess),
    ];
  }
  