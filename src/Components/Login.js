import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const toogleSignInForm = ()=>{
	console.log("toogled");
	setIsSignInForm(!isSignInForm);
  }
  return (
	<div>
		<Header/>
		<div className='absolute'>
			<img src="https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_large.jpg" alt="logo"/>
		</div>
		<form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
			<h1 className='font-bold text-3xl py-4'> 
				{isSignInForm ? "Sign in" : "Sign UP"}
			</h1>

			{!isSignInForm ? (<input 
			type="text" 
			placeholder="Full Name" 
			className="p-4 my-4 w-full bg-gray-700"
			/>) : null}

			<input 
			type="text" 
			placeholder="Email address" 
			className="p-4 my-4 w-full bg-gray-700"
			/>
			
			<input 
			type="password" 
			placeholder="Password" 
			className="p-4 my-4 w-full bg-gray-700"
			/>
			<button type="button"
			className='p-4 my-6 bg-red-700 w-full rounded-lg '>
				{isSignInForm ? "Sign in" : "Sign UP"}
			</button>
			<p className='p-4 my-4 cursor-pointer' onClick={toogleSignInForm}>
				{isSignInForm ? "New to Netflix? Sign up now" : "Already registered? sign in"}
			</p>
		</form>
	</div>
  )
}

export default Login
