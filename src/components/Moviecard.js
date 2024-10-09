import { img_cdn_url } from "../utils/constans"


const Moviecard = ({posterpath}) => {
  return (
    <div className="w-48 pr-4 transition ease-linear duration-700 fill-forwards hover:w-52">
        <img className="  " alt="Movie Card" src={img_cdn_url+posterpath}/>
    </div>
  )
}

export default Moviecard