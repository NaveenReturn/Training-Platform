import {combineReducers,configureStore} from "@reduxjs/toolkit";
import autherSlice from "./slice/autherSlice";

const reducer = combineReducers({
     autherReducer:autherSlice
});
const store = configureStore({
    reducer,
});
export default store;