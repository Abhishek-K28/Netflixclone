import Moviecard from "./Moviecard"
import Shimmer from "./Shimmer"


const Movielist = ({title , movies}) => {
   
  return (
    <div className="px-6 ">
         <h1 className="text-3xl py-4 text-white ">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
           
            <div className="flex ">
                { movies && movies.length > 0 ? movies.map(movies => <Moviecard key={movies.id} posterpath={movies.poster_path}/> )
               :(<Shimmer/>) 
            }
           
            </div>
        </div>      
    </div>
  )
}

export default Movielist