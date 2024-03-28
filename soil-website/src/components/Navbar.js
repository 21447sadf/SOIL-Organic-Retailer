import React from "react";

import "./Navbar.css";
function Navbar() {
  return (
 
    <nav className = "navbar">
      <ul className="no_style_list">
        <li>
          <a href="/">Home</a>
          <a href="/PlanYourDiet ">Plan your diet</a>
          <a href="/DIYToolkit ">DIY Gardening</a>
        </li>
      </ul>
    </nav>
    
  );
}

export default Navbar;
