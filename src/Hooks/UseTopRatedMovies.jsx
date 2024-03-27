
import React, { useEffect } from 'react'
import { AddPopular, AddTopRated } from '../utils/MoviesSlice'
import { options } from '../utils/Constant'
import { useDispatch } from 'react-redux'
const UseTopRatedMovies = () => {

    const dispatch = useDispatch()
    useEffect(() => {

        const MyPopular = async () => {
            const MyData = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", options)
            const Data = await MyData.json();
            console.log(Data.results)
            dispatch(AddTopRated(Data.results))
        }
        MyPopular()

    }, [])

}



export default UseTopRatedMovies