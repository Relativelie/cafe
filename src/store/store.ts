import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import reducers from "./reducers/reducers";

const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store["getState"]>;
