import React from 'react';
// ... (other imports)

function Profile() {
    const profileData = JSON.parse(localStorage.getItem('profile'));
    
    if (!profileData) {
        return <p>No profile data found.</p>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {profileData.name}</p>
            <p>Email: {profileData.email}</p>
            <p>Date of Joining: {profileData.dateOfJoining}</p> {/* Display the date of joining */}
        </div>
    );
}

export default Profile;
