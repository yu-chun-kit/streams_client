// import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});
