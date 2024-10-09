import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"

import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";



const Login = () => {


const dispatch = useDispatch();

const[isSgnInForm, setSignInForm] = useState(true);
const[errormessage , seterrormessage] =  useState(null);
const email = useRef(null);
const password = useRef(null)
const name = useRef(null)

const toggleSignInForm = () => {
   setSignInForm(!isSgnInForm);
}

const handleButtonClick = () => {
  // checkValidData();
 
  const message = checkValidData(  email.current.value , password.current.value);
  seterrormessage(message);
  if(message) return;

  if(!isSgnInForm){
    // sign up logic
    createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png"
    }).then(() => {
      const {uid , email , displayName, photoURL} = auth.currentUser;
      dispatch(adduser({uid: uid , email: email, displayName: displayName ,photoURL: photoURL}));
     

    }).catch((error) => {
      seterrormessage(error.message)
    });
    
    
    
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage( errorMessage)
    // ..
  });
  }

   else{
    //sign in logic
    signInWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
   
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorMessage)
  });
   }

  

};

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img className="h-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
        alt="bg-logo"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
      <h1 className="font-bold text-3xl py-4">{ isSgnInForm ? "Sign In" : "Sign Up"}</h1>
      {!isSgnInForm && <input ref={name} type="text" placeholder="Enter your name" className="p-2 my-2 w-full bg-gray-700 rounded-lg outline-none"/>}
        <input ref={email}  type="text" placeholder="Email Address" className="p-2 my-2 w-full bg-gray-700 rounded-lg outline-none"/>
        <input ref={password}  type="password" placeholder="Password" className="p-2 my-2 w-full bg-gray-700 rounded-lg outline-none"/>
        <p className="text-red-500">{errormessage}</p>
        <button onClick={handleButtonClick} className="p-4 my-2 bg-red-700 w-full rounded-lg cursor-pointer  hover:text-red-300">{ isSgnInForm ? "Sign In" : "Sign Up"} </button>
        <p className="p-4 my-2 cursor-pointer hover:text-red-400" onClick={toggleSignInForm}>{ isSgnInForm ? " New to Netflix? Sign Up now" : "Already register? Sign in Now"}</p>
      </form>
    </div>
  );
};

export default Login;


