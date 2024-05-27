import {createSlice} from "@reduxjs/toolkit";
import * as actions from '../AsyncThunks/fetchBasketballTeamsThunk'

const BasketballTeamsSlice = createSlice({
    name: "@BasketballTeams",
    initialState: {
        teams: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => builder
        .addCase(actions.fetchBasketballTeamsThunk.pending, actions.Pending)
        .addCase(actions.fetchBasketballTeamsThunk.fulfilled, actions.Fulfilled)
        .addCase(actions.fetchBasketballTeamsThunk.rejected, actions.Reject)
})

export default BasketballTeamsSlice.reducer