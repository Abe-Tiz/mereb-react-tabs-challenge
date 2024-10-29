import { createSlice } from "@reduxjs/toolkit";
import tabsData from './../data/tabData';

const tabsSlice = createSlice({
    name: "tabs",
    initialState: {
        tabs: [],
        loading: false,
        error:null
    },
    reducers: {
        FETCH_REQUEST: (state) => {
            state.loading = true;
            state.error = null;
        },
        FETCH_SUCCESS: (state, action) => {
            state.loading = false;
            state.tabs = action.payload
            // console.log("slice:",state.tabs)
        },
        FETCH_FAILURE: (state, action) => {
            state.loading = false;
            state.error = action.payload
         }
    }
})

export const {
    FETCH_FAILURE,
    FETCH_REQUEST,
    FETCH_SUCCESS
} = tabsSlice.actions;
export default tabsSlice.reducer;