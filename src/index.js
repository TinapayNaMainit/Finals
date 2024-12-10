import React from 'react';
import ReactDOM from 'react-dom/client';  // Use `react-dom/client` in React 18
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Profile from './pages/Profile';

const App = () => (
    <Router>
        <AppNavbar />
        <Routes>
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
);
// In React 18, use `createRoot` instead of `render`:
const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root for rendering
root.render(<App />);  // Render the App component
