import { combineReducers } from "redux";
import { cityReducer } from "../pages/cityPage/store/cityReducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  city: cityReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
