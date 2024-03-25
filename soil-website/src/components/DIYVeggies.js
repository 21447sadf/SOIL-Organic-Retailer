import React from "react";
import { Link } from "react-router-dom";

function DIYVeggies() {
        //STYLING
        //Image Container
        const DIYVeggiesStyle = {
            position: "relative",
            width: "100%",
            height: "500px",
            float: "right",
            backgroundColor: "blue"
        };

        const textStyle = {
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            top: "0px",
            right: "0px",
            height: "500px",
            width: "900px",
            backgroundColor: "#FFF9C7"
        };

    return (
        //Image wrapper
        <div className="DIYVeggies" style={DIYVeggiesStyle}>
            <img src="/GardenToolkit.png" alt="GardenToolkit.png" width="1020px" height="500px"/>
            {/* Text Wrapper */}
            <div className="text" style={textStyle}>
                <h1>Grow your own veggies with our beginner friendly toolkit for gardening!</h1>
                <Link to="/DIYToolkit">
                    <button>Learn More</button>
                </Link>
                
            </div>
        </div>
    );
}

export default DIYVeggies;