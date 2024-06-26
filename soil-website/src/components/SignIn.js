import React, { useState } from "react";
import './SignIn.css';
import { useNavigate , Link} from "react-router-dom";
import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png';
import { useAuth } from './AuthContext';

/**
 * Renders a sign-in form component.
 *
 * @returns {JSX.Element} The sign-in form component.
 */
function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setIsUserLoggedIn } = useAuth();

    // Function to handle the form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const storedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];   // Get the stored profiles from local storage
        const profile = storedProfiles.find(p => p.email === email && p.password === password);
        // Check if the profile exists
        if (profile) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loggedInEmail', email);
            alert('You have successfully signed in!');
            navigate('/Profile'); 
        } else {
            alert('The email or password you entered is incorrect.');
        }
        if (profile) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loggedInEmail', email);
            setIsUserLoggedIn(true); 
            
          }
    };
return (
    <div className='container'>
        <div className='header'>
            <div className="HeaderSignIn">Sign In</div>
            <div className="underline"></div>
        </div>
        <form className="inputs" onSubmit={handleSubmit}>
            <div className="input">
                <img src={email_icon} alt="" />
                <input 
                    type="email" 
                    placeholder="Email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />
            </div>
            <div className="submit-container">
                <button className="submit" type="submit">
                    Sign In
                </button>

            </div>
            <div className="signin-link">
          Don't have an account? <Link to="/SignUp">Sign Up</Link>
        </div>
        </form>
    </div>
);
}

export default SignIn;
