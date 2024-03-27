import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { AddTrailerMovies } from '../utils/MoviesSlice';
import { options } from '../utils/Constant';

const UseMovieTrailer = ({ Moveid }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getTrailerMovie = async () => {

            const response = await fetch("https://api.themoviedb.org/3/movie/763215/videos?language=en-US", options);
            const Data = await response.json();
            console.log(Data.results, "hh")
            const trailer = Data.results.find(video => video.type === "Trailer")
            dispatch(AddTrailerMovies(trailer))
        };

        getTrailerMovie();
    }, []);

}

export default UseMovieTrailer