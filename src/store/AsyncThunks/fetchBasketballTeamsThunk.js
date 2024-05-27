import {createAsyncThunk} from "@reduxjs/toolkit";
import fetchBasketballTeams from "../../utils/fetchBasketballTeams"

export const fetchBasketballTeamsThunk = createAsyncThunk(
    'BasketballTeams/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const response = fetchBasketballTeams(); // Вызываем функцию
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