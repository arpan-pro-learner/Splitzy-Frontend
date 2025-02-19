// firebase/auth.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "splitzy-expense-tracker.firebaseapp.com",
  projectId: "splitzy-expense-tracker",
  storageBucket: "splitzy-expense-tracker.appspot.com",
  messagingSenderId: "735078133776",
  appId: "1:735078133776:web:b383252280bcae7aa8da95",
  measurementId: "G-Q6YJBSBVB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export { app, auth };
