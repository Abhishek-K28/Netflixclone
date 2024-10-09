import { api_option } from "../utils/constans";
import { useDispatch } from "react-redux";
import {addPopularMovies} from "../utils/moviesSlice"
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const GetPopularMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', api_option)
      const json = await data.json();
     dispatch(addPopularMovies(json.results))
    };
  
  useEffect(() => {
    GetPopularMovies();
  },[]);
}

export default usePopularMovies