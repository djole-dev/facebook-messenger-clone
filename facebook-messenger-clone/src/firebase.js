import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfoXRRWaRsY1KIRoXBb4R6H4TLG6h-sfU",
    authDomain: "facebook-messenger-clone-76c0c.firebaseapp.com",
    projectId: "facebook-messenger-clone-76c0c",
    storageBucket: "facebook-messenger-clone-76c0c.appspot.com",
    messagingSenderId: "134437204967",
    appId: "1:134437204967:web:07bae7e7c3383053f8c342",
    measurementId: "G-STSXVSYQ6W"
});

const db = firebaseApp.firestore();

export default  db;