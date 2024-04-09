import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from './AuthProvider';

//import "./SignIn";
import "./Navbar.css";
import {Link} from "react-router-dom";
import profilr_icon from './profile.png';
function Navbar() {
    const[isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    // const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
    const navigate = useNavigate();
    // const { isAuthenticated, signOut } = useAuth();
    const handleSignOut = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/'); // Redirect to the home page
    };
    useEffect(() => {
      const profile = localStorage.getItem('profile');
      setIsUserLoggedIn(profile!== null);
    }, []);

    useEffect(() => {
      
      const checkAuthStatus = () => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsUserLoggedIn(loggedIn);
      };
    
     
      window.addEventListener('storage', checkAuthStatus);
    
    
      checkAuthStatus();
    
    
      return () => window.removeEventListener('storage', checkAuthStatus);
    }, []);

    //Use state hook to  display number of items in cart
    const [numItems, setnumItems] = useState(0);
    
    useEffect(() => {
      const items = JSON.parse(localStorage.getItem("items"));
      if (items !== null) {
        setnumItems(items.length);
      }
      else {
        setnumItems(0);
      }
    }, []);


  return (
    <div className = "navbarWrapper">
    <nav className = "navbar">
      <div className = "listWrapper">
        <ul className="no_style_list">
          <li>
            <a href="/">Home</a>
            <a href="/Sales">Specials</a>
            <a href="/MealPlanning ">Plan your diet</a>
            <a href="/DIYToolkit ">DIY Gardening</a>
          </li>
        </ul>
      </div>

      {isUserLoggedIn? (
        <div>
          <Link to="/Profile">
           <img src = {profilr_icon} alt = "Profile" id = "profile-icon" />
          </Link>
          <Link to="/ShoppingCart">
            <img 
            src="../shopping_cart_black_24dp.svg" 
            alt="shopping-cart-btn"
            id="shopping-cart-btn">
            </img>
          </Link>
        </div>
        ) : (
        <div>
      <Link to="/SignIn">
        <button id="SignIn-Btn">Sign In</button>
      </Link>
      <Link to="/SignUp">
        <button id="SignUp-Btn">Sign Up</button>
      </Link>
      <Link to="/ShoppingCart">
          <img 
          src="../shopping_cart_black_24dp.svg" 
          alt="shopping-cart-btn"
          id="shopping-cart-btn">
          </img>
          <div className="numItems">{numItems}</div>
      </Link>
      </div>
        )}
    </nav>
   </div>

 

    
  );
}

export default Navbar;
