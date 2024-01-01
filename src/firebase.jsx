import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// web app Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9QQ4ogtYMeeqqSPHvqCPFnl_1nZjxVCQ",
  authDomain: "patika-fimple-final-case-app.firebaseapp.com",
  projectId: "patika-fimple-final-case-app",
  storageBucket: "patika-fimple-final-case-app.appspot.com",
  messagingSenderId: "165844222951",
  appId: "1:165844222951:web:b35e54d984ebc09f857342",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const firestoreDB = getFirestore(app);


