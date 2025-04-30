import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { CombineReducers } from "../reducers/combine-reducers";

export const store = legacy_createStore(CombineReducers,applyMiddleware(thunk))