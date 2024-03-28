import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
    return (
        <div className="signInBtn">
            <Link to="/SignInPage">
                <button>Sign In</button>
            </Link>  
        </div>
    ); 
}

export default SignIn;