import { combineReducers } from "redux";
import { webViewsReducer } from "./web-view";

export const reducers = combineReducers({
    pages: webViewsReducer
});
