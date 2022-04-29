// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEPRT7blZw_52eWdUGA8uQM0mcl6kpKsc",
  authDomain: "martinispritz-4704e.firebaseapp.com",
  projectId: "martinispritz-4704e",
  storageBucket: "martinispritz-4704e.appspot.com",
  messagingSenderId: "526834416423",
  appId: "1:526834416423:web:a1e78c10c28a24b5c10702",
  measurementId: "G-SKZWQ69PFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);