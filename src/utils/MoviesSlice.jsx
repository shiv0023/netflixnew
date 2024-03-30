import { createSlice } from "@reduxjs/toolkit";


const MovieSlice = createSlice({
    name: "Movies",
    initialState: {
        NowPlayingMovies: null,
        trailerVideo: [],
        popular: [],
        TopRated: [],
        Upcoming: [],
    },
    reducers: {
        AddMovies: (state, action) => {
            state.NowPlayingMovies = action.payload
        },
        AddPopular: (state, action) => {
            state.popular = action.payload
        },
        AddTopRated: (state, action) => {
            state.TopRated = action.payload
        },
        AddUpComingMovies: (state, action) => {
            state.Upcoming = action.payload
        },
        AddTrailerMovies: (state, action) => {
            state.trailerVideo = action.payload

        }
    }

})
export const { AddMovies, AddTrailerMovies, AddPopular, AddTopRated, AddUpComingMovies } = MovieSlice.actions
export default MovieSlice.reducer