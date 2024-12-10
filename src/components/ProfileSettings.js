import React, { useState } from 'react';
import { updatePassword } from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './ProfileSettings.css'; // Import custom CSS

const ProfileSettings = ({ userId }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [profileImage, setProfileImage] = useState(null); // Profile image state
    const [imagePreview, setImagePreview] = useState(null); // Image preview state
    const [profileMessage, setProfileMessage] = useState('');

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const response = await updatePassword(userId, newPassword);
            setMessage(response.message);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error updating password');
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleProfileUpdate = () => {
        if (profileImage) {
            setProfileMessage('Profile picture updated successfully!');
        } else {
            setProfileMessage('Please select a profile picture first.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
                <div className="card-body">
                    {/* Profile Picture Section */}
                    <h2 className="card-title text-center mb-4">Profile Settings</h2>
                    <div className="text-center mb-4">
                        <img
                            src={imagePreview || 'https://via.placeholder.com/150'}
                            alt="Profile Preview"
                            className="rounded-circle img-thumbnail"
                            style={{ width: '150px', height: '150px' }}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="file"
                            className="form-control"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </div>
                    <button
                        className="btn btn-primary w-100 mb-4"
                        onClick={handleProfileUpdate}
                    >
                        Update Profile Picture
                    </button>
                    {profileMessage && <p className="text-center text-success">{profileMessage}</p>}

                    {/* Password Form */}
                    <form onSubmit={handlePasswordSubmit}>
                        <h5 className="text-center mb-3">Update Password</h5>
                        <div className="mb-3">
                            <label className="form-label">New Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm new password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-secondary w-100">
                            Update Password
                        </button>
                    </form>
                    {message && <p className="mt-3 text-center text-danger">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
