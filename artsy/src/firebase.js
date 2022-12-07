// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaOeXwRsidKJiamdGuI19zqQ_d9oeh-5E",
  authDomain: "artsy-1.firebaseapp.com",
  projectId: "artsy-1",
  storageBucket: "artsy-1.appspot.com",
  messagingSenderId: "33350378814",
  appId: "1:33350378814:web:4012ca939f1e773d13786f",
  measurementId: "G-Z0YVXTZ9MM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);