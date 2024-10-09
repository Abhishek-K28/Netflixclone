import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { adduser, removeuser } from "../utils/userSlice";



const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  
  const dispatch = useDispatch();


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });

    
    return () => unsubscribe();
  }, []);

  

  return (
    <div className="absolute w-screen bg-gradient-to-b from-gray-800/80  z-10 flex justify-between">
      <img
        className="w-64 px-8 py-2 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex">
          
          <img
            className="w-8 h-10  mt-8 mr-3 "
            alt="usericon"
            src={user.photoURL}
          />

          <button
            className="mr-4 text-white
         hover:text-red-600"
            onClick={handleSignOut}
          >
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
