import React from "react";
//import "./SignIn";
import "./Navbar.css";
import {Link} from "react-router-dom";
function Navbar() {
  return (


    <div className = "navbarWrapper">
    <nav className = "navbar">
      <div className = "listWrapper">
        <ul className="no_style_list">
          <li>
            <a href="/">Home</a>
            <a href="/PlanYourDiet ">Plan your diet</a>
            <a href="/DIYToolkit ">DIY Gardening</a>
          </li>
        </ul>

      </div>
      <Link to="/SignIn">
        <button id="SignUp-Btn">Sign Up</button>
        <button id="SignIn-Btn">Sign In</button>
      </Link>
    </nav>
    {/* <div className="button">
      <Link to = "./SignIn">
      <button>
      Sign Up
      </button>
      </Link>
      <Link to = "./SignIn">
      <button>
      Sign In
      </button>
      </Link>
       */}
    </div>
    

 

    
  );
}

export default Navbar;
