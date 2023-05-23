import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import MatchesSlice from "./Slices/MatchesSlice";

const rootReducer = combineReducers({
    MatchesSlice: MatchesSlice
})

const store  = configureStore({
    reducer: rootReducer
})

export default store