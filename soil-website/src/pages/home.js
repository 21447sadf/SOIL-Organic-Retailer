import React from "react";
import Slideshow from "../components/Slideshow";
import PlanYourDiet from "../components/PlanYourDiet";
import DIYVeggies from "../components/DIYVeggies";
import SignIn from "../components/SignUp";
import SignUp from "../components/SignIn";


/**
 * Renders the Home component.
 * @returns {JSX.Element} The rendered Home component.
 */
//Display of landing page components
function Home() {
    //Local storage is initialised with
    //Empty set of items
    localStorage.setItem("items", JSON.stringify([]));
    return (
        <div className="Home">
            <Slideshow />
            <PlanYourDiet />
            <DIYVeggies />
        </div>
    );
}

export default Home;