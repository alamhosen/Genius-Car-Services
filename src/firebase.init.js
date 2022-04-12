// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8-dtjbvWz1iaNkv5hQh30Rd12DzVFo-U",
  authDomain: "genius-car-services-1ad2a.firebaseapp.com",
  projectId: "genius-car-services-1ad2a",
  storageBucket: "genius-car-services-1ad2a.appspot.com",
  messagingSenderId: "972053993137",
  appId: "1:972053993137:web:54f99c64561f3e26fd7490"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;