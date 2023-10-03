// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJhX-rvlF2mp0mHNHeD0Mhpq4ERtQViMk",
  authDomain: "donation-campain-project-react.firebaseapp.com",
  projectId: "donation-campain-project-react",
  storageBucket: "donation-campain-project-react.appspot.com",
  messagingSenderId: "1027187157920",
  appId: "1:1027187157920:web:ccddba8daab7d5c7fd52c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;