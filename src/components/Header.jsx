import React, { } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Store from '../utils/Store';

const Header = () => {
  
  const navigate = useNavigate()
  const user=useSelector((Store)=>Store.user)
  const RemoveUser = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });

  }

  return (
    <div className='bg-gradient-to-b absolute px-8  py-2 w-screen   from-black  z-10 flex justify-between '>
      <img className='w-44' src='https://wallpapercave.com/wp/wp5063339.png' alt='logo' />
      {user&&<div className='flex p-5'>

        <img className='w-12 h-12 ' src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' />
        {user && <button onClick={RemoveUser} className=' w-16  font-bold text-white'>(Sign out)</button>}
      </div>}
    </div>



  )
}

export default Header