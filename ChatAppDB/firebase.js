// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDD0ZctkixU6Q4bN4RU6-voKqaw8wdCCL0",
    authDomain: "chatappdb-d9c00.firebaseapp.com",
    projectId: "chatappdb-d9c00",
    storageBucket: "chatappdb-d9c00.appspot.com",
    messagingSenderId: "755740087593",
    appId: "1:755740087593:web:df00b82458eac46ae6d338",
    measurementId: "G-2ZRRYHPDN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);