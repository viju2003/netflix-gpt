// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNxJhEE5-TL1MCZXHJcUAuVDjvZ22ENro",
    authDomain: "netflixgpt-93762.firebaseapp.com",
    projectId: "netflixgpt-93762",
    storageBucket: "netflixgpt-93762.appspot.com",
    messagingSenderId: "223512303175",
    appId: "1:223512303175:web:86cbda4aaa2f1671b70362",
    measurementId: "G-FF519ZTQNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);