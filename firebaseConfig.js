// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const FIREBASE_KEY = import.meta.env.VITE_API_URL;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "myapp-938c0.firebaseapp.com",
  projectId: "myapp-938c0",
  storageBucket: "myapp-938c0.firebasestorage.app",
  messagingSenderId: "863901629124",
  appId: "1:863901629124:web:64b5963da26eb60940e791",
  measurementId: "G-ZT0M7C1RLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);