import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useDebugValue, useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store=>store.user);
  const dispatch = useDispatch();
  const handleSignOut = ()=>{
	signOut(auth).then(() => {
	// Sign-out successful.
	}).catch((error) => {
	// An error happened.
	console.log(error);
	});
  }
    useEffect(()=>{
		const unsubscribe = onAuthStateChanged(auth, (user)=>{
		if(user){
			const {uid, email, displayName} = user;
			dispatch(addUser({uid, email, displayName}));
			navigate("/browse");
		}
		else{
			dispatch(removeUser());
			navigate("/");
		}
		})
		return ()=> unsubscribe();
  },[])
  return (
	<div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between'>
	  <img 
	  className='w-44' 
	  src="/Logo.png" alt="logo"/>
	  {
		auth?.currentUser && (<div className='flex p-2'>
			{user && <p>{user.displayName}</p>}
			<img 
			className='w-12 h-12'
			src="/userIcon.png"
			alt="image"
			/>
			<button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
		</div>)
	  }

	</div>
  )
}

export default Header
