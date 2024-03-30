import { createSlice } from "@reduxjs/toolkit";

const LanuageSlice = createSlice({
    name: "Config",
    initialState: {
        lang: "en",
    },
    reducers: {
        changeLanuage: (state, action) => {
            state.lang = action.payload

        }

    }
})
export const { changeLanuage } = LanuageSlice.actions
export default LanuageSlice.reducer