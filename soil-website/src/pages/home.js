import React from "react";
import Slideshow from "../components/Slideshow";
import PlanYourDiet from "../components/PlanYourDiet";
import DIYVeggies from "../components/DIYVeggies";

function Home() {
    return (
        <div className="Home">
            <p>Home page</p>
            <Slideshow />
            <PlanYourDiet />
            <DIYVeggies />
        </div>
    );
}

export default Home;