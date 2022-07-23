// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCW-vMBDPkHIbVKFZPaeAu36CTuAHjjQlk",
    authDomain: "genius-car-services-d9a66.firebaseapp.com",
    projectId: "genius-car-services-d9a66",
    storageBucket: "genius-car-services-d9a66.appspot.com",
    messagingSenderId: "369512136158",
    appId: "1:369512136158:web:2fcd29168c907f000c314f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;