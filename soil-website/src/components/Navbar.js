import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        // <p>Navbar</p>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="../Sales">Specials</NavLink>
            <NavLink to="/PlanYourDiet">Plan your diet</NavLink>
            <NavLink to="/DIYToolkit">DIY Gardening</NavLink>
        </nav>
    )
};

export default Navbar;