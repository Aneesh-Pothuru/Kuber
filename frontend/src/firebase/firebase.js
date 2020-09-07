import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const key = {
    apiKey: "AIzaSyCHOFm6yGFvERxxlEIwz_Yf_3pl70qfpPU",
    authDomain: "kuber-91d4f.firebaseapp.com",
    databaseURL: "https://kuber-91d4f.firebaseio.com",
    projectId: "kuber-91d4f",
    storageBucket: "kuber-91d4f.appspot.com",
    messagingSenderId: "478484051391",
    appId: "1:478484051391:web:04931483142f2fab619d0a",
    measurementId: "G-NQKXQTCN0C"
};
firebase.initializeApp(key);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();
google.setCustomParameters({ prompt: 'select_account' });
export const googleLog = () => auth.signInWithPopup(google);

export default firebase;