
import { useSelector } from "react-redux";
import useNowPlayMovies from "../hooks/useNowPlayMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header"
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";



const Browse = () => {

 

  useNowPlayMovies();
  usePopularMovies();
 
  return (
    <div>
      <Header/>
      <Maincontainer/>
        <Secondarycontainer/>
        
      
     
     
    </div>
  )
}

export default Browse