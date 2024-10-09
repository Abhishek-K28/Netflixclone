import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"


const Maincontainer = () => {
    const movies =useSelector((store) => store.movies?.nowplayingmovies);
    if(movies === null) return;
     const Mainmovie = movies[0]

     const {original_title, overview,id} = Mainmovie;

  return (
    <div>
    <VideoTitle title={original_title} overview={overview } />
    <VideoBackground movieid={id}/>
    </div>
  )
}

export default Maincontainer