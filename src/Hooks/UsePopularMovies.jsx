import React, { useEffect } from 'react'
import { AddPopular } from '../utils/MoviesSlice'
import { options } from '../utils/Constant'
import { useDispatch } from 'react-redux'

const UsePopularMovies = () => {
    const dispatch = useDispatch()
    useEffect(() => {

        const MyPopular = async () => {
            const MyData = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", options)
            const Data = await MyData.json();
            console.log(Data.results)
            dispatch(AddPopular(Data.results))
        }
        MyPopular()

    }, [])

}

export default UsePopularMovies;