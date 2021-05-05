import { combineReducers } from "redux";
import fetchApiReducer from "./fetchApiReducer";

export default combineReducers({
  total: fetchApiReducer,
});
