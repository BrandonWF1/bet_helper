import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import MatchesSlice from "./Slices/MatchesSlice";
import FootballTeamsSlice from "./Slices/FootballTeamsSlice";
import BasketballTeamsSlice from "./Slices/BasketballTeamsSlice";
import HockeyTeamsSlice from "./Slices/HockeyTeamsSlice";

const rootReducer = combineReducers({
    MatchesSlice: MatchesSlice,
    FootballTeamsSlice: FootballTeamsSlice,
    BasketballTeamsSlice: BasketballTeamsSlice,
    HockeyTeamsSlice: HockeyTeamsSlice,
})

const store  = configureStore({
    reducer: rootReducer
})

export default store