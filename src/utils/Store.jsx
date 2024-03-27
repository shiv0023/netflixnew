import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MoviesReducer from "./MoviesSlice";
const Store = configureStore({
    reducer: {
        user: UserSlice,
        Movies: MoviesReducer
    }
})
export default Store;