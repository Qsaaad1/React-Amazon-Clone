import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjrceXT385YrJbJuLXeW10NFBBUYszdPE",
    authDomain: "react--clone-25e09.firebaseapp.com",
    projectId: "react--clone-25e09",
    storageBucket: "react--clone-25e09.appspot.com",
    messagingSenderId: "757532228726",
    appId: "1:757532228726:web:18598f87951864d0197357",
    measurementId: "G-5JBQYPHZ3W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };