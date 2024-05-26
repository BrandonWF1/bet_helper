import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import MatchesSlice from "./Slices/MatchesSlice";
import FootballTeamsSlice from "./Slices/FootballTeamsSlice";

const rootReducer = combineReducers({
    MatchesSlice: MatchesSlice,
    FootballTeamsSlice: FootballTeamsSlice,
})

const store  = configureStore({
    reducer: rootReducer
})

export default store