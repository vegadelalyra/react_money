import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../../services/firebaseService';
import { SET_ERROR, SET_IS_AUTHENTICATED, SET_USER } from './userSlice';
import { loginFromFireStore } from '../../../services/firestoreService';
import {
  SET_BALANCE,
  SET_CONTACTS,
  SET_TRANSACTIONS,
} from '../account/accountSlice';

export const loginGoogle = () => {
  const provider = googleAuthProvider;

  return async dispatch => {
    try {
      const userCredentials = await signInWithPopup(auth, provider);

      return fetchAccountFromDB(userCredentials)
    } catch (error) {
      console.warn(error);
      dispatch(
        SET_ERROR({
          error: true,
          code: error.code,
          message: error.message,
        })
      );
    }
  };
};

export const logoutAsync = () => async dispatch => {
  try {
    await signOut(auth);
    dispatch(SET_IS_AUTHENTICATED(false));
    dispatch(SET_USER(null));
    dispatch(SET_ERROR(null));
  } catch (error) {
    dispatch(
      SET_ERROR({
        error: true,
        code: error.code,
        message: error.message,
      })
    );
  }
};

export const fetchAccountFromDB = (userCredentials, dispatch) => {
  try {
    const userLogged = loginFromFireStore(userCredentials.user);

    if (!userLogged)
      throw Error(
        'if cause: "userThunksFirebaseError: Missing or insufficient permissions.", go to your firebase console and fix your firestore query rules: if request.auth != null'
      );

    dispatch(SET_ERROR(null));
    dispatch(SET_BALANCE(userLogged.account.balance));
    dispatch(SET_CONTACTS(userLogged.account.contacts));
    dispatch(SET_TRANSACTIONS(userLogged.account.transactions));

    return userLogged;
  } catch (error) {
    console.warn(error);
    dispatch(
      SET_ERROR({
        error: true,
        code: error.code,
        message: error.message,
      })
    );
  }
};
