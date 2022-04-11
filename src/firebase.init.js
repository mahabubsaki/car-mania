// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZZPaXJvsqirbK_Y9sLOFhztumu8UsGAs",
    authDomain: "car-mania-1276a.firebaseapp.com",
    projectId: "car-mania-1276a",
    storageBucket: "car-mania-1276a.appspot.com",
    messagingSenderId: "1020782335583",
    appId: "1:1020782335583:web:0b0b5fa9b7e51844126dea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth