import React from 'react'
import { Cdn_Url } from '../utils/Constant'

const MovieCards = ({ PosterPath }) => {
    return (
        <div className='w-48  p-2'>
            <img alt='Poster' src={Cdn_Url + PosterPath} />
        </div>
    )
}

export default MovieCards