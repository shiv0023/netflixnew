import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptsearchSuggestions from './GptsearchInput'
import { Image1 } from '../utils/Constant'


const GptSearch = () => {
    return (
        <div className=''>
            <div className='absolute -z-10'>
                <img className='w-full' src={Image1} alt='logo' />
            </div>
            <GptSearchBar />
            <GptsearchSuggestions />
        </div>
    )
}

export default GptSearch