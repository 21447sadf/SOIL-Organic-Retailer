import React from 'react';
import  { useState } from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { validateName, validateEmail, validatePassword } from './Validation';
import { useAuth } from './AuthContext';

function Profile() {
    const navigate = useNavigate();
    const [profiles, setProfiles] = useState([]);
    const [profileData, setProfileData] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const { setIsUserLoggedIn } = useAuth();
    const { logout } = useAuth();
    useEffect(() => {
        const loggedInEmail = localStorage.getItem('loggedInEmail');
       // Fetch all profiles and find the current user's profile
    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    const userProfile = storedProfiles.find(profile => profile.email === loggedInEmail);
    if (userProfile) {
        setProfileData(userProfile);
        setName(userProfile.name);
        setEmail(userProfile.email);
    } else {
        navigate('/SignIn');
    }
}, [navigate]);

    const handleEditToggle = () => {
        setEditMode(!editMode);
        setErrorMsg('');
    };

    const handleSaveChanges = () => {


        if (!validateName(name) || !validateEmail(email) || (newPassword && !validatePassword(newPassword))) {
            setErrorMsg('Please ensure all fields are valid.');
            return;
        }

        if (newPassword && newPassword === profileData.password) {
            setErrorMsg('New password must be different from the current password.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMsg('Passwords do not match.');
            return;
        }

       const updatedProfile = { ...profileData, name, email, password: newPassword.trim() ? newPassword : profileData.password };

        const updatedProfiles = profiles.map(p => p.email === profileData.email ? updatedProfile : p);
        localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
        localStorage.setItem('loggedInEmail', email); // Update the loggedInEmail if email was changed
        setProfiles(updatedProfiles);
        setProfileData(updatedProfile);
        setEditMode(false);
        setErrorMsg('');
        alert('Profile updated successfully.');
    };

    const handleDeleteProfile = () => {
        if (window.confirm('Are you sure you want to delete your profile? This action cannot be undone.')) {
            const updatedProfiles = profiles.filter(profile => profile.email !== profileData.email);
            localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('loggedInEmail');
            navigate('/');
        }
    };

    // const handleSignOut = () => {
    //     localStorage.removeItem('isLoggedIn');
    //     localStorage.removeItem('loggedInEmail');
        
    //     setIsUserLoggedIn(false); // Update the context to reflect the user has logged out

    //     navigate('/'); // Navigate the user to the home page
    // };
    const handleSignOut = () => {
        logout(); // Use the logout function from the context

        navigate('/'); // Navigate the user to the sign-in page
    };


    if (!profileData) {
        return <p>No profile data found.</p>;
    }

    return (
        <div className='container'>
            <div className='header'>
            <h1>User Profile</h1>
           
            </div>
            {editMode ? (
                <>

                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                    <input type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    <button onClick={handleSaveChanges}>Save Changes</button>
                    <button onClick={handleEditToggle}>Cancel</button>
                    {errorMsg && <p>{errorMsg}</p>}
                </>
            ) : (
                <>

<div className='profile-details'>
  <p>Name: {profileData.name}</p>
  <p>Email: {profileData.email}</p>
  <p>Date of Joining: {format(new Date(profileData.dateOfJoining), 'yyyy-MM-dd')}</p>
</div>

                    <button onClick={handleEditToggle}>Edit Profile</button>
                    <button onClick={handleDeleteProfile}>Delete Profile</button>
                    <button onClick={handleSignOut}>Sign Out</button>
                </>
            )}
        </div>
    );
}

export default Profile;