import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    if (!movieId) return;

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const results = json?.results || [];
    const trailers = results.filter(v => v.type === "Trailer");

    const trailer = trailers.length ? trailers[0] : results[0];

    if (trailer) dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    dispatch(addTrailer(null)); // clear old trailer
    getMovieVideo();
  }, [movieId]);
}

export default useMovieTrailer