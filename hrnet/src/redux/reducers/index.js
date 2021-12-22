import { combineReducers } from "redux";
import employeReducer from "./employe";
import message from "./message";

export default combineReducers({
  employeReducer,
  message,
});