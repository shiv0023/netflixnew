import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        AddUser: (state,action) => {
            return action.payload
        },
        removeuser: (action) => {
            return null
        }

    }

})
export const { AddUser, removeuser } = UserSlice.actions
export default UserSlice.reducer