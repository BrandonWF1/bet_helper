import {createSlice} from "@reduxjs/toolkit";
import * as actions from '../AsyncThunks/fetchHockeyTeamsThunk'

const HockeyTeamsSlice = createSlice({
    name: "@HockeyTeams",
    initialState: {
        teams: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => builder
        .addCase(actions.fetchHockeyTeamsThunk.pending, actions.Pending)
        .addCase(actions.fetchHockeyTeamsThunk.fulfilled, actions.Fulfilled)
        .addCase(actions.fetchHockeyTeamsThunk.rejected, actions.Reject)
})

export default HockeyTeamsSlice.reducer