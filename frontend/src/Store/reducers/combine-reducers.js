import { combineReducers } from "redux";
import { baseReducer } from "./reducers";
import { adminReducer } from "./adminReducer";

export const CombineReducers = combineReducers({baseReducer,adminReducer})