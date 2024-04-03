import React from "react";

function Footer() {
    const footerStyle = {
        FontFace: "font-family: TT-Commons-Pro-Expanded, src: url(../../public/Fontspring-DEMO-tt_commons_pro_expanded_regular.otf)",
        background: "linear-gradient(90deg, #fff7ad, #ffa9f9)",
        fontFamily: "TT-Commons-Pro-Expanded",
        width: "100%",
        height: "50px"
    };

    return (
    <footer className="Footer">
        <div className="container" style={footerStyle}>©Soil 2024</div>
    </footer>
    );
}

export default Footer;