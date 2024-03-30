import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AddUpComingMovies } from '../utils/MoviesSlice';
import { options } from '../utils/Constant';

const UpComingMovies = () => {
    const dispatch = useDispatch();
    const UpComing = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", options)
        const MyData = await data.json();
        console.log(MyData.results)
        dispatch(AddUpComingMovies(MyData.results))
    }
    useEffect(() => {
        UpComing()
    }, [])

}

export default UpComingMovies;