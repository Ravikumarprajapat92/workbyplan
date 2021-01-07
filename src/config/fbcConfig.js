import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBm08zDtRLIr50ypv-3B1qiJctBuClPltA",
    authDomain: "workbyplan-3b380.firebaseapp.com",
    projectId: "workbyplan-3b380",
    storageBucket: "workbyplan-3b380.appspot.com",
    messagingSenderId: "937395767287",
    appId: "1:937395767287:web:36342040d38159692d10f2",
    measurementId: "G-S7XCPZ74TS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;