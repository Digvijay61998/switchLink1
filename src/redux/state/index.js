import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import rootSaga from "./Login/Sagas";

export default () => {
  const rootReducer = combineReducers({
    auth: require("./Login/Reducer").reducer,
    // questionAnswer: require("./FAQ/Reducer").reducer,
    // stockManag: require("./StockManagement/Reducer").reducer,
    // termConditions: require("./TermConditions/Reducer").reducer,
    // contactUs: require("./ContactUs/Reducer").reducer,
    // profile: require("./Profile/Reducer").reducer,
    // buyerHomeReducer: require("./BuyerHome/Reducer").reducer,
    // addressReducer: require("./Address/Reducer").reducer,
    // order: require("./Order/Reducer").reducer,
    // cartReducer: require("./Cart/Reducer").reducer,
    // session: require("./Session/Reducer").reducer,
  });
  return configureStore(rootReducer, rootSaga);
};
