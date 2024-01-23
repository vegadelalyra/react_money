// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyD_1tl8BAcQ5jfhlVIxHARpjCdV2gKZ0aE',
    authDomain: 'makaia-react-money.firebaseapp.com',
    projectId: 'makaia-react-money',
    storageBucket: 'makaia-react-money.appspot.com',
    messagingSenderId: '860516876237',
    appId: '1:860516876237:web:460d3c50c88a9e28da8e84',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const googleAuthProvider = new GoogleAuthProvider();
