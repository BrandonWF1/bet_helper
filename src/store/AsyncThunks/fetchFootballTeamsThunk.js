import {createAsyncThunk} from "@reduxjs/toolkit";
import fetchFootballTeams from "../../utils/fetchFootballTeams"

export const fetchFootballTeamsThunk = createAsyncThunk(
    'FootballTeams/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const response = fetchFootballTeams(); // Вызываем функцию
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