import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser, removeuser } from '../utils/UserSlice';
import { LOGO, SupportedLanuage, User_icon } from '../utils/Constant';
import { ToggleGptSlice } from '../utils/GptSlice';
import { changeLanuage } from '../utils/ConfigSlice';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((Store) => Store.user)
  const GptSearch = useSelector((store) => store.Gpt.ToggleGpt)
  const RemoveUser = () => {

    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
      console.log(error)
    });

  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, DisplayName, photoURL } = user;
        dispatch(AddUser({ uid: uid, email: email, DisplayName: DisplayName, photoURL: photoURL }))

        navigate("/browse")
      } else {
        dispatch(removeuser())
        navigate("/")

      }
    });
    return () => unsubscribe
  }, [])

  const HandleGptSearch = () => {
    dispatch(ToggleGptSlice())
  }

  const HandleLanuageChange = (e) => {
    dispatch(changeLanuage(e.target.value))
  }
  return (
    <div className='bg-gradient-to-b absolute px-8  py-2 w-screen   from-black  z-10 flex justify-between '>

      <img className='w-32' src={LOGO} alt='logo' />

      {user && <div className='flex p-5'>
        {GptSearch && <select onChange={HandleLanuageChange} className='bg-gray-900 text-white p-2 font-bold'>
          {SupportedLanuage.map(lang => <option key={lang.id} value={lang.identifier} >{lang.identifier}</option>)}
        </select>}
        <button onClick={HandleGptSearch} className='px-2 py-2 m-2 bg-purple-800 text-white hover:bg-red-600 mx-4 my-2'>{GptSearch?"Homepage":"Gpt Search"}</button>
        <img className='w-12 h-12 ' src={User_icon} />
        {user && <button onClick={RemoveUser} className=' w-16  font-bold text-white'>(Sign out)</button>}
      </div>}
    </div>



  )
}

export default Header