// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd4JSsMvqFApD0CKnGDPNFu3eRfHgEVcE",
  authDomain: "bikinis-indi.firebaseapp.com",
  projectId: "bikinis-indi",
  storageBucket: "bikinis-indi.appspot.com",
  messagingSenderId: "1055808532215",
  appId: "1:1055808532215:web:301a1e295b00d4a009edf2",
  measurementId: "G-FXGHERP4J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);