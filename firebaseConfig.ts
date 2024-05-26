// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAMivEz0jhnVUiLB_ge6I5aCJjCWuZKekY',
  authDomain: 'workoutnavigator-6456a.firebaseapp.com',
  projectId: 'workoutnavigator-6456a',
  storageBucket: 'workoutnavigator-6456a.appspot.com',
  messagingSenderId: '203058467839',
  appId: '1:203058467839:web:375a55344c6d7082398dca',
  measurementId: 'G-4R469FJYFS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
