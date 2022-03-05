// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBuBNZIJFbGXsv9gxy2S42fvjg1De68Of8',
  authDomain: 'e-comerce-b17ab.firebaseapp.com',
  projectId: 'e-comerce-b17ab',
  storageBucket: 'e-comerce-b17ab.appspot.com',
  messagingSenderId: '267274668198',
  appId: '1:267274668198:web:d811e4c8b550123899cc67',
  measurementId: 'G-8P8CKDZS83',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
