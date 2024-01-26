import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../../firebase';
import { setError, setIsAuthenticated, setUser } from './userSlice';
import { loginFromFireStore } from '../../../services/userService';

export const loginGoogle = () => {
    const provider = googleAuthProvider;

    return async dispatch => {
        try {
            const userCredentials = await signInWithPopup(auth, provider);
            const userLogged = await loginFromFireStore(userCredentials.user);
            console.log(userLogged);
            dispatch(setIsAuthenticated(true));
            dispatch(setUser(userLogged));
        } catch (error) {
            console.warn(error)
            dispatch(setIsAuthenticated(false));
            dispatch(
                setError({
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
        dispatch(setIsAuthenticated(false));
        dispatch(setUser(null));
        dispatch(setError(null));
    } catch (error) {
        dispatch(
            setError({
                error: true,
                code: error.code,
                message: error.message,
            })
        );
    }
};
