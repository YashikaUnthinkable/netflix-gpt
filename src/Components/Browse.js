import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecandoryContainer from './SecandoryContainer';

const Browse = () => {
  useNowPlayingMovies()
  return (
	<div>
	  <Header/>
	  <MainContainer/>
	  <SecandoryContainer/>
	</div>
  )
}

export default Browse
