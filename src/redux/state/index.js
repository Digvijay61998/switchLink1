import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import rootSaga from "./Sagas";


export default () => {
  const rootReducer = combineReducers({
    auth: require("./Login/Reducer").reducer,
    Theme: require("./Theme/Reducer").reducer,
    board: require("./Board/Reducer").reducer,
    room: require("./Room/Reducer").reducer,
    mqtt: require("./Mqtt/Reducer").reducer,
  });
  return configureStore(rootReducer, rootSaga);
};
