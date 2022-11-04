// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsgaRe5ZrBFFyVFkOWbvZoU941tcDA53o",
  authDomain: "idealcricket-6cb66.firebaseapp.com",
  projectId: "idealcricket-6cb66",
  storageBucket: "idealcricket-6cb66.appspot.com",
  messagingSenderId: "995859682713",
  appId: "1:995859682713:web:43d88f904cf172c0c0af08",
  measurementId: "G-DJX4942E8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)
export { analytics, auth,db}