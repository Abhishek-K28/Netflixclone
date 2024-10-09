import { useEffect } from "react";
import { api_option } from "../utils/constans";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const useTrailerBg = (movieid) => {
    const dispatch =useDispatch();
    const GetMovieVideo = async () => {
      const data = await fetch(
       `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
        api_option
      );
      const json = await data.json();
      const filtertrailer = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filtertrailer.length ? filtertrailer[0] : json.results[0];
      dispatch(addTrailer(trailer));
  
    };
  
    useEffect(() => {
      GetMovieVideo();
    }, []);
  
}

export default useTrailerBg