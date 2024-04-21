import React, { useState } from "react";
import "./SignIn.css";
import user_icon from "./person.png";
import email_icon from "./email.png";
import password_icon from "./password.png";
import { format } from "date-fns";
import { useAuth } from './AuthContext';
import { useNavigate, Link } from "react-router-dom";
import { validateName, validateEmail, validatePassword } from "./Validation";

/**
 * Renders a sign-up form component.
 *
 * @returns {JSX.Element} The sign-up form component.
 */
function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const { setIsUserLoggedIn } = useAuth();
    const handleSubmit = (event) => {
        event.preventDefault();

        const storedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
        const existingProfile = storedProfiles.find(profile => profile.email === email);

        if (existingProfile) {
            alert("Email is already in use. Please sign in.");
            return;
        }
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPasswordStrong = validatePassword(password);
    const doPasswordsMatch = password === confirmPassword;

    if (!isNameValid || !isEmailValid || !isPasswordStrong || !doPasswordsMatch) {
        if (!isNameValid) alert("Please enter your name.");
        else if (!isEmailValid) alert("Please enter a valid email address.");
        else if (!isPasswordStrong) alert("Password must be strong (at least 8 characters, including uppercase, lowercase, numbers, and symbols).");
        else if (!doPasswordsMatch) alert("Passwords do not match!");
        return;
    }

   
    const dateOfJoining = format(new Date(), "yyyy-MM-dd");
const newProfile = {
    name,
    email,
    password,
    dateOfJoining // Use the same key that we will access in the Profile component
};
    storedProfiles.push(newProfile);
    localStorage.setItem("profiles", JSON.stringify(storedProfiles));
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loggedInEmail', email);
    
    alert("Profile created!");
   
    navigate("/");
    if (newProfile) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loggedInEmail', email);
      setIsUserLoggedIn(true); 
      
    }


};

  return (
    <div className="container">
      <div className="header">
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
        <div className="signin-link">
          Already have an account? <Link to="/SignIn">Sign In</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;