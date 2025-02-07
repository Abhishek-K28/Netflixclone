

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black ">
 <h1 className="text-3xl font-bold">{title}</h1>
 <p className="py-6 text-lg w-1/3">{overview}</p>

 <div>
    <button className="bg-red-500 text-white px-16 p-4 text-lg hover:text-black opacity-75 rounded-lg">Play</button>
    <button  className=" mx-2 bg-gray-500 text-white px-12 p-4 text-lg hover:text-black opacity-65 rounded-lg">More info</button>
 </div>
    </div>
  );
}

export default VideoTitle