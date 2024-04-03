import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react'; // Import useState from react
import './SignIn.css'
import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png';

function SignIn() {
    // Initialize the state with useState hook
    const [action, setAction] = useState("Sign In");

    return (
        <div className='container'>
            <div className='header'>
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs"> 
                <div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Name" />
                </div>
                <div className="inputs">
                    {/* Conditional rendering based on action */}
                    {action === "Sign Up" && (
                        <div className="input">
                            <img src={email_icon} alt=""/>
                            <input type="email" placeholder="Email Id"/>
                        </div>
                    )}
                    <div className="input">
                        <img src={password_icon} alt=""/>
                        <input type="password" placeholder="Password"/>
                    </div>
                </div>
            </div>
            <div className="forgot-password">
                Forgot Password? <span> Click Here </span>
            </div>
            <div className="submit-container">
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>
                    Sign Up
                </div>
                <div className={action === "Sign In" ? "submit gray" : "submit"} onClick={() => setAction("Sign In")}>
                    Sign In
                </div>
            </div>
        </div>
    ); 
}

export default SignIn;
// to do: fix state should only show email and pass when sign in not email and name, and fix the space between the 
// 