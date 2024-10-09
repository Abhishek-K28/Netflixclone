import {  useSelector } from "react-redux";
import useTrailerBg from "../hooks/useTrailerBg";

const VideoBackground = ({ movieid }) => {
     const trailervideo = useSelector(store => store.movies?.trailervideo)

     useTrailerBg(movieid);
    
  return (
    <div >
    {trailervideo ? (
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailervideo.key}?&autoplay=1&mute=1`}
       
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ) : (
      <p>Loading trailer...</p>
    )}
  </div>
  );
};

export default VideoBackground;
