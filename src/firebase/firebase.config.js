// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHhPrI40M1LYBDQZBrogJ21O7FhAeZ3ic",
  authDomain: "bangla-network.firebaseapp.com",
  projectId: "bangla-network",
  storageBucket: "bangla-network.appspot.com",
  messagingSenderId: "170547480716",
  appId: "1:170547480716:web:fbe2639ef9b83519eb93a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;