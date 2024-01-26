// LoginPage.js
import React from 'react';
import './styles.sass';
import { useDispatch } from 'react-redux';

import { loginGoogle } from '../../store/slices/user/userThunks';

import hero_mobile_svg from '../../assets/login/hero_mobile.svg';
import makaiapp_logo_svg from '../../assets/login/makaiapp_logo.svg';
import google_icon_svg from '../../assets/login/google_icon.svg';

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
        <div>
            <picture onContextMenu={handleContextMenu}>
                <img
                    src={makaiapp_logo_svg}
                    alt='Here shall be our logo'
                    draggable='false'
                />
                <img
                    src={hero_mobile_svg}
                    alt='Welcome to Makaiapp!'
                    draggable='false'
                />
            </picture>
            <button onClick={handleGoogleLogin}>
                <img
                    src={google_icon_svg}
                    id='googleG'
                />{' '}
                Log in with Google
            </button>
        </div>
    );
};

export default LoginPage;
