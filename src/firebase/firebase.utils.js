import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBJJvSGe2X56Blx3K2AQPS17pRdXG8NR_k",
    authDomain: "shoes-cart.firebaseapp.com",
    projectId: "shoes-cart",
    storageBucket: "shoes-cart.appspot.com",
    messagingSenderId: "68877453537",
    appId: "1:68877453537:web:549c824986a6f1a5068fa0",
    measurementId: "G-GNXRT2KX0Y"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;