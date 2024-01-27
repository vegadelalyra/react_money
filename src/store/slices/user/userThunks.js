import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../../services/firebaseService';
import { SET_ERROR, SET_IS_AUTHENTICATED, SET_USER } from './userSlice';
import { loginFromFireStore } from '../../../services/userService';

export const loginGoogle = () => {
  const provider = googleAuthProvider;

  return async dispatch => {
    try {
      const userCredentials = await signInWithPopup(auth, provider);
      const userLogged = await loginFromFireStore(userCredentials.user);

      if (!userLogged)
        throw Error(
          'if cause: "userThunksFirebaseError: Missing or insufficient permissions.", go to your firebase console and fix your firestore query rules: if request.auth != null'
        );
      SET_ERROR(null);

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
