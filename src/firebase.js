// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import store from '/src/store/index';
import { setIsAuthenticated, setUser } from './store/slices/user/userSlice';

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

const auth = getAuth(app);
auth.useDeviceLanguage();

onAuthStateChanged(auth, user => {
    if (user) {
        const serializedUser = {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
        }
        store.dispatch(setUser(serializedUser));
        store.dispatch(setIsAuthenticated(true));
    } else {
        store.dispatch(setUser(null));
        store.dispatch(setIsAuthenticated(false));
    }
});

const firestore = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, firestore, googleAuthProvider };
