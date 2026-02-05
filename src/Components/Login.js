import React, { useReducer, useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toogleSignInForm = ()=>{
	setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick = ()=>{
	const msg = checkValidData(email.current.value, password.current.value);
	setErrorMessage(msg);

	if(msg) return;

	if(!isSignInForm){
		createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
		.then((userCredential) => {
			// Signed up 
			const user = userCredential.user;
			return updateProfile(user, {
				displayName: name.current.value
			})
		})
		.then(()=>{
			const {uid, email, displayName} = auth.currentUser;
			dispatch(addUser({uid, email, displayName}));
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMsg = error.message;
			setErrorMessage(errorCode + "-" + errorMsg)
			// ..
		});
	}
	else{
		signInWithEmailAndPassword(auth, email.current.value, password.current.value)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMsg = error.message;
			setErrorMessage(errorCode + ":" + errorMsg)
		});
	}
  }
  return (
	<div>
		<Header/>
		<div className='absolute'>
			<img src="/cover.png" alt="logo"/>
		</div>
		<form onSubmit={(e)=>e.preventDefault()}className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
			<h1 className='font-bold text-3xl py-4'> 
				{isSignInForm ? "Sign in" : "Sign UP"}
			</h1>

			{!isSignInForm ? (<input 
			type="text" 
			placeholder="Full Name" 
			className="p-4 my-4 w-full bg-gray-700"
			ref={name}
			/>) : null}

			<input 
			type="text" 
			placeholder="Email address" 
			className="p-4 my-4 w-full bg-gray-700"
			ref={email}
			/>
			
			<input 
			type="password" 
			placeholder="Password" 
			className="p-4 my-4 w-full bg-gray-700"
			ref={password}
			/>
			<p className='text-red-500 p-2 font-bold text-lg'>{errorMessage}</p>
			<button type="button"
			className='p-4 my-6 bg-red-700 w-full rounded-lg ' onClick={handleButtonClick}>
				{isSignInForm ? "Sign in" : "Sign UP"}
			</button>
			<p className='p-4 my-4 cursor-pointer' onClick={toogleSignInForm}>
				{isSignInForm ? "New here? Sign up now" : "Already registered? sign in"}
			</p>
		</form>
	</div>
  )
}

export default Login
