import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
    const userId = '12345'; // Hardcoded for demo

    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home userId={userId} />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
