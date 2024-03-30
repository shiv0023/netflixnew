import React from 'react'
import language from '../utils/LanuageCons'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langkey = useSelector((store) => store.Config.lang)
    const languageData = language[langkey] || {};

    const placeholder = languageData.GptSearchPlaceHolder || "Enter your search query";
    const searchButtonText = languageData.search || "Search";
    return (
        <div className='pt-[10%] justify-center flex '>
            <form className='w-1/2 grid grid-cols-12 bg-black' onSubmit={e => e.preventDefault()}>
                <input type='text' className=' col-span-11 p-4 m-4' placeholder={placeholder} />
                <div className='pt-4 '>
                    <button className='col-span-1 text-white p-2 bg-red-500' style={{ width: '100%', height: '48px' }}>{searchButtonText}</button>

                </div>
            </form>

        </div>
    )
}

export default GptSearchBar