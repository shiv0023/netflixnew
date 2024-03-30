import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MoviesReducer from "./MoviesSlice";
import GptReducer from "../utils/GptSlice";
import LanguageReducer from "../utils/ConfigSlice"
const Store = configureStore({
    reducer: {
        user: UserSlice,
        Movies: MoviesReducer,
        Gpt: GptReducer,
        Config: LanguageReducer
    }
})
export default Store;