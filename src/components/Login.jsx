import React, { useRef, useState } from 'react';
import Header from './Header';
import { CheckValidate } from '../utils/Validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase"
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { AddUser } from '../utils/UserSlice';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
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
            displayName: "shiva", photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const { uid, email, DisplayName, photoURL } = auth.currentUser
            dispatch(AddUser({ uid: uid, email: email, DisplayName: DisplayName, photoURL: photoURL }))

            navigate("/browse")
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
          navigate("/browse")
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
        <img className='w-full' src='https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg' alt='logo' />
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
