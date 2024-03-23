import React from "react";
import Slideshow from "../components/Slideshow";
import PlanYourDiet from "../components/PlanYourDiet";

function Home() {
    return (
        <div className="Home">
            <p>Home page</p>
            <Slideshow />
            <PlanYourDiet />
        </div>
    );
}

export default Home;