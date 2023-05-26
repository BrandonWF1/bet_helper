import {createSlice} from "@reduxjs/toolkit";
import * as actions from '../AsyncThunks/fetchMatchesThunk'

const MatchesSlice = createSlice({
    name: "@Matches",
    initialState: {
        matches: {
            sport_name: '',
            matches: []
        },
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: builder => builder
        .addCase(actions.fetchMatchesThunk.pending,actions.Pending)
        .addCase(actions.fetchMatchesThunk.fulfilled,actions.Fulfilled)
        .addCase(actions.fetchMatchesThunk.rejected,actions.Reject)
})

export default MatchesSlice.reducer