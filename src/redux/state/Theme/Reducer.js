import Immutable from "seamless-immutable";
import {THEME_SUCCESS} from "../ActionTypes";
import { createReducer } from "../CreateReducer";

const INITIAL_STATE = Immutable({
  theme: false,
});

const reducers = {
  [THEME_SUCCESS]: (state,action) => {
    console.log("action",action);
    return Immutable.merge(state, {theme:action.payload.data.theme});
  },
};

export const reducer = createReducer(INITIAL_STATE, reducers);
