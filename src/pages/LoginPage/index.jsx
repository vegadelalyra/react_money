// LoginPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth, googleAuthProvider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = e => setEmail(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider);
            // Dispatch an action if needed
        } catch (error) {
            console.error('Error logging in with Google:', error.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <picture>
                <img src='../../assets/hero_mobile.svg' />
            </picture>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
};

export default LoginPage;
