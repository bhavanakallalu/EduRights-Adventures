import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCctTF94t5KecVHOi6cy9rCavNfoIgOT_U",
  authDomain: "miniproject-c1f80.firebaseapp.com",
  projectId: "miniproject-c1f80",
  storageBucket: "miniproject-c1f80.appspot.com",
  messagingSenderId: "790837127898",
  appId: "1:790837127898:web:f4430a9a31fab592f853e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication

// Export the auth object and the authentication functions
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
