import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "Gpt",
    initialState: {
        ToggleGpt: false,
    },

    reducers: {
        ToggleGptSlice: (state, action) => {
            state.ToggleGpt = !state.ToggleGpt

        }

    }
})
export const { ToggleGptSlice } = GptSlice.actions
export default GptSlice.reducer