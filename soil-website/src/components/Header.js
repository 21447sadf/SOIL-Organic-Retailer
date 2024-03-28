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
                <div className="Header-Logo">SOIL</div>
                <a href="/">
                    <img 
                    src="../shopping_cart_black_24dp.svg" 
                    alt="shopping-cart-btn"
                    id="shopping-cart-btn">
                    </img>
                </a>
            </header>
        </div>

    );
}

export default Header;