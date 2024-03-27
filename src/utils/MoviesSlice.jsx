import { createSlice } from "@reduxjs/toolkit";


const MovieSlice = createSlice({
    name: "Movies",
    initialState: {
        NowPlayingMovies: null,
        trailerVideo: [],
        popular:[],
        TopRated:[],
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
        AddTrailerMovies: (state, action) => {
            state.trailerVideo = action.payload

        }
    }

})
export const { AddMovies, AddTrailerMovies, AddPopular ,AddTopRated} = MovieSlice.actions
export default MovieSlice.reducer