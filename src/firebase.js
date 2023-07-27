// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVaeLTV9ez9avQm6AnUabijcYxPkUClrY",
  authDomain: "netflixclone-e0abc.firebaseapp.com",
  projectId: "netflixclone-e0abc",
  storageBucket: "netflixclone-e0abc.appspot.com",
  messagingSenderId: "1081047167067",
  appId: "1:1081047167067:web:0c3604e6bd9f4ddf0f4f7e"
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =getFirestore(app)