import React from 'react'

const AddTitle = ({ title, overview, }) => {
    return (
        <div className='w-screen aspect-video pt-72 px-24 absolute bg-gradient-to-r '>
            <p className='font-bold text-6xl p-2 text-white' >{title}</p>
            <p className='font-bold w-1/4 p-2 text-white'>{overview}</p>
            <div>
                <button className='text-2xl px-10 m-4 p-2 bg-gray-500 hover:bg-opacity-50 text-white border rounded-lg bg-opacity'>Play </button>
                <button className='text-2xl px-10 m-4 p-2 bg-gray-500 hover:bg-opacity-50  text-white border rounded-lg'>More Info!</button>
            </div>

        </div>
    )
}

export default AddTitle;