// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACbRnheJRqSpsywlMlDocjUyGl7k3jJhY",
  authDomain: "react-user-crud-app-1cfaa.firebaseapp.com",
  databaseURL:
    "https://react-user-crud-app-1cfaa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-user-crud-app-1cfaa",
  storageBucket: "react-user-crud-app-1cfaa.appspot.com",
  messagingSenderId: "358661409004",
  appId: "1:358661409004:web:ce0fc6ae8de38c9ff07dc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
