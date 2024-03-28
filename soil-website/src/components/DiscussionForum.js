import React from "react";


function DiscussionForum() {
    const forumStyle = {
        backgroundColor: "#FFF9C7"
    };

    const ForumTitleStyle = {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    };

    const imageStyle = {
        width: "300px",
        height: "auto"
    };

    const ForumPostStyle = {
        margin: "5px",
        border: "1px solid #ccc",
        float: "left",
        width: "180px"
    };

    return (
        <div className="forum" style={forumStyle}>
            <h1>Join the Discussion Forum</h1>

                <div className="ForumPost" style={ForumPostStyle}>
                    <a target="_blank" href="/meal_1.jpg">
                        <img src="/meal_1.jpg" alt="meal_1.jpg" width="300px" height="300px" style={imageStyle}></img>
                    </a>
                </div> 

                <div className="ForumPost" style={ForumPostStyle}>
                    <a target="_blank" href="/meal_2.jpg">
                        <img src="/meal_2.jpg" alt="meal_2.jpg" width="300px" height="300px" style={imageStyle}></img>
                    </a>
                </div>

                <div className="ForumPost" style={ForumPostStyle}>
                    <a target="_blank" href="/meal_3.jpg">
                        <img src="/meal_3.jpg" alt="meal_3.jpg" width="300px" height="300px" style={imageStyle}></img>
                    </a>
                </div>
        </div>

    );
}

export default DiscussionForum;
