import { useEffect } from "react"
import { api_option } from "../utils/constans"
import { useDispatch } from "react-redux"
import {addmovies} from "../utils/moviesSlice"




const useNowPlayMovies = () => {
    const dispatch = useDispatch();

    const GetNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', api_option)
      const json = await data.json();
      dispatch(addmovies(json.results))
    };
  
  useEffect(() => {
    GetNowPlayingMovies();
  },[]);
  
}

export default useNowPlayMovies;