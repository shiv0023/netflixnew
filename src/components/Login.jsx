import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
const [IsSignIn,SetIsSignIn]=useState(true)
const ToggleMenu=()=>{
  SetIsSignIn(!IsSignIn)
}

  return (
    <div>
        <Header/>
    <div className='absolute'>
      <img className='w-full' src='https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg' alt='logo' />
    </div>
    <form className=' absolute w-3/12 bg-black p-12 my-36 right-0 left-0 mx-auto text-white bg-opacity-80'>
      <h1 className='text-white px-2 font-bold'>{IsSignIn?"Sign In":"Sign Up"}</h1>
   {IsSignIn?null:<input className='bg-gray-800 p-2 m-2 rounded-lg w-full' type='text' placeholder='Name'/>}
    <input className=' bg-gray-800 text-white p-2 m-2 rounded-md w-full' type='text' placeholder='Email Address'/>
    <input className='bg-gray-800 p-2 m-2 rounded-lg w-full' type='password' placeholder='Password'/>
<button className=' p-2 m-2 border font-medium text-black-600 rounded-md  bg-red-700 w-full'>{IsSignIn?"Sign In":"Sign Up"}</button>
<p onClick={ToggleMenu} className='p-2 m-2 cursor-pointer'>{IsSignIn?"New to Netflix? Sign Up Now":"Already Registered Sign In Now"}</p>
    </form>
    </div>
  )
}

export default Login