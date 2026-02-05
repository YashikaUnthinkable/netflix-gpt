import React, { useEffect } from 'react'
import { API_OPTIONS } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailer } from '../utils/movieSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies.trailerVideo);
  useMovieTrailer(movieId);

  if (!trailerVideo) return null;

  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default VideoBackground;
