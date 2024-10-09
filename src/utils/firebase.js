// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJfZEXz13P4oIkDXzdWKz5YS5mHdwsNrI",
  authDomain: "netflixgpt-fc3ed.firebaseapp.com",
  projectId: "netflixgpt-fc3ed",
  storageBucket: "netflixgpt-fc3ed.appspot.com",
  messagingSenderId: "427738908390",
  appId: "1:427738908390:web:651b7affd35479bd235d27",
  measurementId: "G-RWXR5F9BF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();