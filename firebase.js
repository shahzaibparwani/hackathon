// import firebase from "firebase/app";
// import "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyB6kHWuG5leAnDA4DEMBiFevD_XKPrlUVI",
    authDomain: "hackfinal-64ad0.firebaseapp.com",
    projectId: "hackfinal-64ad0",
    storageBucket: "hackfinal-64ad0.appspot.com",
    messagingSenderId: "602305850228",
    appId: "1:602305850228:web:0fa4704cdc27d27507da21",
    measurementId: "G-RT338L650B"
});






const db = firebase.firestore();

export { firebaseConfig, db };