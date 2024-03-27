import React, { useRef, useState } from 'react';
import Header from './Header';
import { CheckValidate } from '../utils/Validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase"
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { AddUser } from '../utils/UserSlice';
import { Image1 } from '../utils/Constant';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsSignIn(!isSignIn);
  };

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = (e) => {
    // Prevents the default form submission behavior

    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    const message = CheckValidate(emailRef.current.value, passwordRef.current.value);
    setErrorMessage(message);
    console.log(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          updateProfile(user, {
            displayName: "shiva", photoURL: "https://scontent.cdninstagram.com/v/t51.2885-19/419907266_722102370052742_401817317509548575_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=zohIJ83y2iMAX_6IaxX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfD9bfpD_HZrZL24-FqpcjcrHh2hOX2jbsI24dEI0RziWg&oe=65F93206"
          }).then(() => {
            const { uid, email, DisplayName, photoURL } = auth.currentUser
            dispatch(AddUser({ uid: uid, email: email, DisplayName: DisplayName, photoURL: photoURL }))

            // ...
          }).catch((error) => {
            setErrorMessage(error)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorCode, '-', errorMessage)
        });
    }
    else {
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, '-', errorMessage)

        });

    }


  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className='w-full' src={Image1} alt='logo' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 bg-black p-12 my-36 right-0 left-0 mx-auto text-white bg-opacity-80'>
        <h1 className='text-white px-2 font-bold'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {isSignIn ? null : (<input className='bg-gray-800 p-2 m-2 rounded-lg w-full' type='text' placeholder='Name' />)}

        <input ref={emailRef} className='bg-gray-800 text-white p-2 m-2 rounded-md w-full' type='text' placeholder='Email Address' />
        <input ref={passwordRef} className='bg-gray-800 p-2 m-2 rounded-lg w-full' type='password' placeholder='Password' />
        <p className='text-red-700 font-bold px-2'>{errorMessage}</p>
        <button type="submit" onClick={handleButtonClick} className='p-2 m-2 border font-medium text-black-600 rounded-md bg-red-700 w-full'>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p onClick={toggleMenu} className='p-2 m-2 cursor-pointer'>{isSignIn ? "New to Netflix? Sign Up Now" : "Already Registered Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
