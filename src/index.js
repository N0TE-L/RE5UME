// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase.app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAa1iTCWt4eWrW_Xz2CEleNf4PUF-5YuDk",
    authDomain: "re5ume.firebaseapp.com",
    databaseURL: "https://re5ume-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "re5ume",
    storageBucket: "re5ume.appspot.com",
    messagingSenderId: "68386801743",
    appId: "1:68386801743:web:f963310f0a63dad751023a",
    measurementId: "G-8V6H131F5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Analytics and get a reference to the service
const analytics = getAnalytics(app);