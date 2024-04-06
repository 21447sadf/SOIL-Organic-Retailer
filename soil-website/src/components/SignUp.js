import React, { useState } from "react";
import './SignIn.css';
import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png';
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom"; 
import { validateName, validateEmail, validatePassword } from './Validation';

function SignUp() {
    // States for each input field to track the form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); 
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate inputs
        const isNameValid = validateName(name);
        const isEmailValid = validateEmail(email);
        const isPasswordStrong = validatePassword(password);
        const doPasswordsMatch = password === confirmPassword;
       
        if (!isNameValid) {
            alert('Please enter your name.');
            return;
        }

        if (!isEmailValid) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!isPasswordStrong) {
            alert('Password must be strong (at least 8 characters, including uppercase, lowercase, numbers, and symbols).');
            return;
        }

        if (!doPasswordsMatch) {
            alert('Passwords do not match!');
            return;
        }

        // Create a profile object to store in local storage
  // Include the date of joining when creating the profile
  const profile = {
    name,
    email,
    password, // Remember to handle password securely
    dateOfJoining: format(new Date(), 'yyyy-MM-dd') // Store the current date in 'YYYY-MM-DD' format
};

localStorage.setItem('profile', JSON.stringify(profile));

        // This is where the input fields would be cleared
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        alert('Profile created!'); // Feedback to the user
        navigate('/'); // Navigate to the login page
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className="HeaderSignUp">Sign Up</div>
                <div className="underline"></div>
            </div>
            <form className="inputs" onSubmit={handleSubmit}>
                <div className="input">
                    <img src={user_icon} alt="User Icon" />
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                </div>
                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input 
                        type="email" 
                        placeholder="Email Id" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Confirm Password Icon" />
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required 
                    />
                </div>
                <div className="submit-container">
                    <button className="submit" type="submit">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
