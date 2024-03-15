import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { auth } from '../utils/Firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { AddUser, removeuser } from '../utils/UserSlice'

const Body = () => {
  const dispatch = useDispatch()

  const AppRouter = createBrowserRouter([{
    path: "/",
    element: <Login />
  },
  {
    path: "/browse",
    element: <Browse />
  }
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, DisplayName,photoURL } = user;
        dispatch(AddUser({ uid: uid, email: email, DisplayName: DisplayName,photoURL:photoURL }))

        // ...
      } else {
        dispatch(removeuser())

      }
    });
  }, [])
  return (
    <div className=''>
      <RouterProvider router={AppRouter} />
    </div>
  )
}

export default Body