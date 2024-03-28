import React from "react";
import "./Header.css";

/* Header Component includes:
   - Logo
   - Shopping Cart
*/

function Header() {
    return (
        <div className="HeaderWrapper">
            <header className="Header">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <div className="Header-Logo">SOIL</div>
                <button class="btn">
                    <i class="shopping-cart-btn"><span class="material-icons">shopping_cart</span></i>
                </button>
            </header>
        </div>

    );
}

export default Header;