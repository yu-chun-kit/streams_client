// import { combineReducers } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import streamReducer from "./streamReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  streams: streamReducer,
})
