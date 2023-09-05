// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcZV-nIAYb1UCsjPHZSQrsfsvdg3jSHiE",
  authDomain: "rick-and-morty-app-cd3a5.firebaseapp.com",
  projectId: "rick-and-morty-app-cd3a5",
  storageBucket: "rick-and-morty-app-cd3a5.appspot.com",
  messagingSenderId: "489104232391",
  appId: "1:489104232391:web:c3bab4e031d6080a9093e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
