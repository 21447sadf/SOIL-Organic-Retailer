import React from "react";

function PlanYourDiet() {

    //STYLING
    //Text
    const textStyle = {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: "0px",
        left: "0px",
        height: "1000px",
        width: "700px",
        backgroundColor: "#FFF9C7"
    };

    //Image 
    const imageStyle = {
        position: "relative",
        width: "100%",
        height: "1000px",
        fit: "cover",
    };

    return (
        //Image wrapper
        <div className="PlanYourDietWrapper" style={imageStyle}>
            <img src="MealPlanning.jpg" alt="MealPlanning.jpg" height="1000px" width="100%"></img>
            {/* Text Wrapper */}
            <div className="text" style={textStyle}>
                <h1>Plan your nutritious diet!</h1>
            </div>
        </div>
    );
}

export default PlanYourDiet;