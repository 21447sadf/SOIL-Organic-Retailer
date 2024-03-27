import React from "react";

/* Header Component includes:
   - Logo
   - Shopping Cart
*/

function Header() {
    return (
        <header className="Header">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <div className="Header-Logo">Soil</div>
            <button class="btn">
                <i class="shopping-cart-btn"><span class="material-icons">shopping_cart</span></i>
            </button>
        </header>
    );
}

export default Header;