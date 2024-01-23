import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
// import { Home } from './pages/Home'
import LoginPage from './pages/LoginPage';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <LoginPage />
        </>
    );
}

export default App;
