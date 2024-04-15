// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(import.meta.env.VITE_SOME_KEY)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASLaOGGg8j8NSl0Itcmgab7BUduN1xrGg",
  authDomain: "foodi-ef5f8.firebaseapp.com",
  projectId: "foodi-ef5f8",
  storageBucket: "foodi-ef5f8.appspot.com",
  messagingSenderId: "667092988310",
  appId: "1:667092988310:web:724e218fdad6c279166db7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;