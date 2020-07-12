import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAlv6VOQkkOWVlyY3GPS70i0fOnuO5wY-Q",
    authDomain: "style-clothing-6cbb8.firebaseapp.com",
    databaseURL: "https://style-clothing-6cbb8.firebaseio.com",
    projectId: "style-clothing-6cbb8",
    storageBucket: "style-clothing-6cbb8.appspot.com",
    messagingSenderId: "515627596375",
    appId: "1:515627596375:web:bab7ca2b191dc6518dc112"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;