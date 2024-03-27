import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Store from '../utils/Store';
import { AddUser, removeuser } from '../utils/UserSlice';
import { LOGO, User_icon } from '../utils/Constant';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((Store) => Store.user)
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
  return (
    <div className='bg-gradient-to-b absolute px-8  py-2 w-screen   from-black  z-10 flex justify-between '>
      <img className='w-32' src={LOGO} alt='logo' />
      {user && <div className='flex p-5'>

        <img className='w-12 h-12 ' src={User_icon} />
        {user && <button onClick={RemoveUser} className=' w-16  font-bold text-white'>(Sign out)</button>}
      </div>}
    </div>



  )
}

export default Header