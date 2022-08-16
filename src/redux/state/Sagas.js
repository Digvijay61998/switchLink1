import LoginSaga from "./Login/Sagas";
import BoardSaga from "./Board/Sagas";
import RoomSaga from "./Room/Sagas"
import { all } from "redux-saga/effects";

export default function* root() {
  yield all([
    LoginSaga(),
    BoardSaga(),
    RoomSaga(),
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
