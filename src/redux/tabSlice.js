import { createSlice } from "@reduxjs/toolkit";

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
            const { tab, data } = action.payload;
            state.loading = false;
            state.tabs[tab - 1] = data;  
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