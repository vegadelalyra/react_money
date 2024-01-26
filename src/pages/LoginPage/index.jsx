// LoginPage.js
import './styles.sass';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginGoogle } from '../../store/slices/user/userThunks';

import CloudinaryImg from '../../components/CloudinaryImg';

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleGoogleLogin = async () => {
        try {
            dispatch(loginGoogle());
        } catch (error) {
            console.error('Error logging in with Google:', error.message);
        }
    };

    const handleContextMenu = event => {
        event.preventDefault();
    };

    return (
        <div className='login'>
            <section onContextMenu={handleContextMenu}>
                <CloudinaryImg
                    publicId={'makaia-transfers-react/login/makaiapp_logo'}
                    imgClss={'logo'}
                    alt={'Here shall be our logo'}
                />

                <CloudinaryImg
                    publicId={'makaia-transfers-react/login/hero_mobile'}
                    alt={'Welcome to Makaiapp!'}
                />
            </section>
            <button
                className='loginButton'
                onClick={handleGoogleLogin}>
                <CloudinaryImg
                    publicId={'makaia-transfers-react/login/google_icon'}
                    imgClss={'googleG'}
                />{' '}
                Log in with Google
            </button>
        </div>
    );
};

export default LoginPage;
