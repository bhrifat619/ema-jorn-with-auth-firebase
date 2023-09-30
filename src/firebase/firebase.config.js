// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnt_PF_6SLYULtGBDui8I3ydML3MZe6Os",
  authDomain: "ema-john-with-auth-fireb-1bbaf.firebaseapp.com",
  projectId: "ema-john-with-auth-fireb-1bbaf",
  storageBucket: "ema-john-with-auth-fireb-1bbaf.appspot.com",
  messagingSenderId: "17443746361",
  appId: "1:17443746361:web:1220115818b1ca03cc93e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;