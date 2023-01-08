import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAYD3pPsttANqeGvxuAfkgM8LOrDApFJO0",
  authDomain: "calling-system-24e02.firebaseapp.com",
  projectId: "calling-system-24e02",
  storageBucket: "calling-system-24e02.appspot.com",
  messagingSenderId: "749594009889",
  appId: "1:749594009889:web:1239e143d9fa862e0b9e60",
  measurementId: "G-ZHQKT6J34X"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase