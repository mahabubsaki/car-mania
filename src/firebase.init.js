// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdKrrpnWHMnCRM9KJ7C7z3Tw451CiG_Jc",
    authDomain: "car-mania-57f00.firebaseapp.com",
    projectId: "car-mania-57f00",
    storageBucket: "car-mania-57f00.appspot.com",
    messagingSenderId: "441152926277",
    appId: "1:441152926277:web:5cf3a414d66ece7617692c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth