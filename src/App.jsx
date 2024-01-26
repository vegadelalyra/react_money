import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import './global.sass'

function App() {
    return (
        <Routes>
            <Route
                path='/'
                element={<HomePageWrapper />}
            />
            {/* Add more routes as needed */}
        </Routes>
    );
}

function HomePageWrapper() {
    // Place your logic for checking authentication here
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    return isAuthenticated ? <Home /> : <LoginPage />;
}

export default App;
