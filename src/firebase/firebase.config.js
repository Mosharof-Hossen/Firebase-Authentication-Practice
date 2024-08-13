// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj9m0xbLw9dJcXLWCtPT0jSILM_5Pea68",
  authDomain: "private-route-practice-nana.firebaseapp.com",
  projectId: "private-route-practice-nana",
  storageBucket: "private-route-practice-nana.appspot.com",
  messagingSenderId: "727956539481",
  appId: "1:727956539481:web:5f75ae51c4cfbbfa460948"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;