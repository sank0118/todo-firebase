import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIf2HnMHEAYm7mFFVZe6S5us2z2iwvxF0",
  authDomain: "fir-fc769.firebaseapp.com",
  projectId: "fir-fc769",
  storageBucket: "fir-fc769.firebasestorage.app",
  messagingSenderId: "528865730526",
  appId: "1:528865730526:web:de7f0c8caf32143044074f",
  measurementId: "G-0F0CS9WKGL"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore;
export const auth = firebase.auth;

export const dbService = db();
export const authService = auth();

export { firebase };
