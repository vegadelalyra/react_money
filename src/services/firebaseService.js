// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import store from '/src/store/index';
import { SET_IS_AUTHENTICATED, SET_USER } from '../store/slices/user/userSlice';
import { fetchAccountFromDB } from '../store/slices/user/userThunks';

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
/* 
FIREBASE BROWSER SESSION PERSISTENCE

    SESSION:{ browserSessionPersistence }
        Auth state will be cleared upon browser/tab close.

    LOCAL: { browserLocalPersistence }
        Auth state will be persisted even after browser/tab close, but cleared when the user logs out.

    NONE:
        Auth state will not persist between page reloads.
*/
setPersistence(auth, browserSessionPersistence);
onAuthStateChanged(auth, user => {
  if (user) {
    const serializedUser = {
      name: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
      uid: user.uid,
    };
    store.dispatch(SET_USER(serializedUser));
    store.dispatch(SET_IS_AUTHENTICATED(true));
    // fetchAccountFromDB({ user }, store.dispatch);
  } else {
    store.dispatch(SET_USER(null));
    store.dispatch(SET_IS_AUTHENTICATED(false));
  }
});

const firestore = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, firestore, googleAuthProvider };
