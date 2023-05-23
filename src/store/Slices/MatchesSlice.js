import {createSlice} from "@reduxjs/toolkit";

const MatchesSlice = createSlice({
    name: "@mathces",
    initialState: {
        matches: [],
        loading: false,
        error: null
    },
    reducers: {

    }
})

export default MatchesSlice.reducer