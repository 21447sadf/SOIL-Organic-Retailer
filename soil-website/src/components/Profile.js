import React from 'react';
import  { useState } from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { validateName, validateEmail, validatePassword } from './Validation';
import { useAuth } from './AuthContext';

/**
 * Represents a user profile component.
 *
 * @returns {JSX.Element} The rendered user profile component.
 */
/**
 * Represents a user profile component.
 *
 * @returns {JSX.Element} The rendered user profile component.
 */
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
    
            // Here we call the logout function after successfully deleting the profile
            logout(); //  update the state in  AuthContext
    
            navigate('/'); // Navigate the user to the home page 
        }
    };
    

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
                <div className="underline"></div>
            </div>
            {editMode ? (
                <div className='inputs'>
                    Create new name: 
                    <input type="text" placeholder = "New name" value={name} onChange={e => setName(e.target.value)} />
                    Create new email:
                    <input type="email" placeholder = "New email" value={email} onChange={e => setEmail(e.target.value)} />
                    Create new password:
                    <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                    Confirm new password:
                    <input type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    <div className="submit-container">
                        <button className="submit" onClick={handleSaveChanges}>Save Changes</button>
                        <button className="submit gray" onClick={handleEditToggle}>Cancel</button>
                    </div>
                    {errorMsg && <p>{errorMsg}</p>}
                </div>
            ) : (
                <div className='profile-details'>
                    <div className='profile-info'><span>Name:</span> {profileData.name}</div>
                    <div className='profile-info'><span>Email:</span> {profileData.email}</div>
                    <div className='profile-info'><span>Date of Joining:</span> {format(new Date(profileData.dateOfJoining), 'yyyy-MM-dd')}</div>
                    <div className="submit-container">
                        <button className="submit" onClick={handleEditToggle}>Edit Profile</button>
                        <button className="submit gray" onClick={handleDeleteProfile}>Delete Profile</button>
                        <button className="submit gray" onClick={handleSignOut}>Sign Out</button>
                    </div>
                </div>
            )}
        </div>
    );
    
}

export default Profile;