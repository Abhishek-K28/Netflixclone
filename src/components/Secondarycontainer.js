import { useSelector } from "react-redux"
import Movielist from "./Movielist"

const Secondarycontainer = () => {

const movies = useSelector((store) => store.movies)

  return (
    <div className=" bg-black">
      <div className="-mt-52 pl-12 relative z-20">
      <Movielist title={"Now Playing"} movies={movies.nowplayingmovies} />
      <Movielist title={"Trending"} movies={movies.nowplayingmovies} />
      <Movielist title={"Popular"} movies={movies.nowplayingmovies} />
      <Movielist title={"Upcoming Movies"} movies={movies.PopularMovies} />
      <Movielist title={"Horror"} movies={movies.nowplayingmovies} />
      </div>
    </div>
  )
}

export default Secondarycontainer