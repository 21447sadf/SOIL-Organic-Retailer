import React from "react";
import { NavLink } from 'react-router-dom';
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
