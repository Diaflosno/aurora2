// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkbg1FaEs4F1KNYlf8FDPgQARl9YQIwdM",
  authDomain: "aurora-4aa23.firebaseapp.com",
  databaseURL: "https://aurora-4aa23-default-rtdb.firebaseio.com",
  projectId: "aurora-4aa23",
  storageBucket: "aurora-4aa23.appspot.com",
  messagingSenderId: "495231550310",
  appId: "1:495231550310:web:5d358d165061c5897a7ea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);