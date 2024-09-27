// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// require('dotenv').config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Your API Key",
  authDomain: "job-portal-demo-b1184.firebaseapp.com",
  projectId: "job-portal-demo-b1184",
  storageBucket: "job-portal-demo-b1184.appspot.com",
  messagingSenderId: "529955102217",
  appId: "1:529955102217:web:736f77c80d8f0d522d62d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;