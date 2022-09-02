import LoginSaga from "./Login/Sagas";
import BoardSaga from "./Board/Sagas";
import RoomSaga from "./Room/Sagas"
import MqttSaga from "./Mqtt/Sagas"
import { all } from "redux-saga/effects";

export default function* root() {
  yield all([
    LoginSaga(),
    BoardSaga(),
    RoomSaga(),
    MqttSaga(),
    // StockMangSaga(),
    // questionAnswer(),
    // termConditions(),
    // contactUs(),
    // profile(),
    // BuyerHomeSaga(),
    // AddressSaga(),
    // OrderSaga(),
    // CartSaga(),
    // SessionSaga()
  ]);
}
