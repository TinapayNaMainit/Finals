import React, { useState, useEffect } from 'react';
import { getUserInfo } from '../services/api'; // Import a mock API function
import './Home.css'; // Custom CSS for styling

const Home = ({ userId }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const data = await getUserInfo(userId); // Fetch user info using userId
                setUserInfo(data);
            } catch (err) {
                setError('Failed to load user information.');
            }
        };

        fetchUserInfo();
    }, [userId]);

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    if (!userInfo) {
        return <p className="loading-message">Loading user information...</p>;
    }

    return (
        <div className="home-container">
            <div className="card shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
                <div className="card-body">
                    <h2 className="text-center mb-4">Welcome, {userInfo.name}!</h2>
                    <div className="user-info">
                        <p><strong>Email:</strong> {userInfo.email}</p>
                        <p><strong>Phone:</strong> {userInfo.phone || 'Not Provided'}</p>
                        <p><strong>Bio:</strong> {userInfo.bio || 'No bio available.'}</p>
                        <a href="/profile" className="btn btn-primary mt-3 w-100">
                            Go to Profile Settings
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
