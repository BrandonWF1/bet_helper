import {createAsyncThunk} from "@reduxjs/toolkit";
import fetchHockeyTeams from "../../utils/fetchHockeyTeams";

export const fetchHockeyTeamsThunk = createAsyncThunk(
    'HockeyTeams/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const response = fetchHockeyTeams(); // Вызываем функцию
            if (typeof response === 'string') {
                throw new Error('Ошибка');
            }
            return response;
        } catch (e) {
            return rejectWithValue('Ошибка!');
        }
    }
);

export const Pending = (state) => {
    state.loading = true
    state.error=null
}

export const Fulfilled = (state, action) => {
    state.loading = false
    state.teams = action.payload
    state.error=null
}

export const Reject = (state,action) => {
    state.error = action.payload
    state.loading=false
}