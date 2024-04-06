import React, { useState } from "react";
import './SignIn.css';
import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png';

function SignIn() {

    

    return (
        <div className='container'>
            <div className='header'>
                <div className="HeaderSignIn">Sign In</div>
                <div className="underline"></div>
            </div>
            <form className="inputs" >
                
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input 
                        type="email" 
                        placeholder="Email Id" 
                       
                        required 
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input 
                        type="password" 
                        placeholder="Password"
                        required 
                    />
                    </div>
                      
               
                <div className="submit-container">
                    <button className="submit" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
  
}

export default SignIn
;
