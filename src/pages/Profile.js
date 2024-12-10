import React from 'react';
import ProfileSettings from '../components/ProfileSettings';

const Profile = ({ userId }) => {
    // Example: If userId comes from props
    return (
        <div className="profile-container">
            <ProfileSettings userId={userId || '12345'} />
        </div>
    );
};

export default Profile;
