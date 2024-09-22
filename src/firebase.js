// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsncDiUB1z_Da0YGUTs8dzvP1-jqjNy8Y",
  authDomain: "babycode-login.firebaseapp.com",
  projectId: "babycode-login",
  storageBucket: "babycode-login.appspot.com",
  messagingSenderId: "834856791975",
  appId: "1:834856791975:web:bd2a671cda94be797cd082",
  measurementId: "G-J6FQZ62KCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth.currentUser)
export { app, auth}
