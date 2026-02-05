import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'

const Body = () => {

  console.log("auth", auth);
  return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Login/>}/>
			<Route path="/browse" element={<Browse/>}/>
		</Routes>
	</BrowserRouter>
  )
}

export default Body
