import LoginSaga from "./Login/Sagas";
import StockMangSaga from "./StockManagement/Sagas";
import questionAnswer from "./FAQ/Sagas";
import termConditions from "./TermConditions/Sagas";
import contactUs from "./ContactUs/Sagas";
import profile from "./Profile/Sagas";
import BuyerHomeSaga from "./BuyerHome/Sagas";
import AddressSaga from "./Address/Sagas";
import OrderSaga from "./Order/Saga";
import CartSaga from "./Cart/Sagas";
import SessionSaga from "./Session/Sagas";
import { all } from "redux-saga/effects";

export default function* root() {
  yield all([
    LoginSaga(),
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
