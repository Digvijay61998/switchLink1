import { put, takeLatest, call } from "redux-saga/effects";
import { Alert } from "react-native";
import API from "../../../services/Api";
import {
    CREATE_BOARD_SUCCESS,
    GET_SWITCH_LIST_SUCCESS
} from "../ActionTypes";
import * as CreateBoard from "./Action";
import Snackbar from "react-native-snackbar";
import { navigate, replace, reset } from "../../../theme/rnnavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";


function* createBoard(action) {
    console.log("saga login account==", AsyncStorage.getItem("userToken"));
                    ;
    try {
      const response = yield call(API.post, "/board", action.payload.data);
      const result = API.handleResponseForMessage(response);
        if (result) {
            if (result) {
                yield put(CreateBoard.getSwitchList({data:result.data}));
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
    //     Snackbar.show({
    //       text: errorMsg,
    //       duration: 3000,
    //     });
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
                yield put(CreateBoard.getSwitchListDetails({switchList:result.data}));
        }
    } catch (error) {
    //   console.log("saga login account error===", error);
    //   let errorMsg = JSON.parse(error.request._response).message;
    //   let errorStatus = JSON.parse(error.request._response).success;
    //   if (errorStatus === false) {
    //     yield put(LoginActions.loginAccountError(error));
    //     Snackbar.show({
    //       text: errorMsg,
    //       duration: 3000,
    //     });
    //   }
      console.log("Saga Responce Error",error);
    }
  }
  export default function* root() {
    yield [
        yield takeLatest(CREATE_BOARD_SUCCESS, createBoard),
        yield takeLatest(GET_SWITCH_LIST_SUCCESS, getSwitchList),
        
    ];
  }
  