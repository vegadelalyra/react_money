// LoginPage.js
import React from 'react';
import { auth, googleAuthProvider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import './styles.sass';

import hero_mobile_svg from '../../assets/login/hero_mobile.svg';
import makaiapp_logo_svg from '../../assets/login/makaiapp_logo.svg';
import google_icon_svg from '../../assets/login/google_icon.svg';

const LoginPage = () => {
    const handleGoogleLogin = async () => {
        try {
            const oAuth2 = await signInWithPopup(auth, googleAuthProvider);
            // Dispatch an action if needed
            console.log(oAuth2);
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
