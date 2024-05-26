import {createSlice} from "@reduxjs/toolkit";
import * as actions from '../AsyncThunks/fetchFootballTeamsThunk'

const FootballTeamsSlice = createSlice({
    name: "@FootballTeams",
    initialState: {
        teams: [],
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: builder => builder
        .addCase(actions.fetchFootballTeamsThunk.pending,actions.Pending)
        .addCase(actions.fetchFootballTeamsThunk.fulfilled,actions.Fulfilled)
        .addCase(actions.fetchFootballTeamsThunk.rejected,actions.Reject)
})

export default FootballTeamsSlice.reducer