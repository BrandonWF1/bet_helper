import {createAsyncThunk} from "@reduxjs/toolkit";
import fetchMatches from "../../utils/fetchMatches";

export const fetchMatchesThunk = createAsyncThunk('Matches/fetch',
    async (category, {rejectWithValue}) => {
        try {
            const response = await fetchMatches(category)
            if (typeof response === 'string')
                throw Error("Ошибка")

            return response
        } catch (e) {
            return rejectWithValue("Ошибка!")
        }
    }
)

export const Pending = (state) => {
    state.loading = true
    state.error=null
}

export const Fulfilled = (state, action) => {
    state.loading = false
    state.matches = action.payload
    state.error=null
}

export const Reject = (state,action) => {
    state.error = action.payload
    state.loading=false
}