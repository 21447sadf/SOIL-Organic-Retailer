import React from "react";
import "./Sales.css"

//This component includes a list of sale items

function Sales() {
    return (
        <div class="Sales-Gallery">
            <div class="Sale-Items">
                <a href="/">
                    <img src="./Corn.jpg" alt="Corn" width="300" height="200" />
                </a>
                <div class="desc">6 Pack of Corn</div>
            </div>
            <div class="Sale-Items">
                <a href="/">
                    <img src="./MuesliBar.jpg" alt="MuesliBar" width="300" height="200" />
                </a>
                <div class="desc">HealthNuts Muesli Bar - 5 pack</div>
            </div>
            <div class="Sale-Items">
                <a href="/">
                    <img src="./Pasta.jpg" alt="Pasta" width="300" height="200" />
                </a>
                <div class="desc">Nature's Noodle Co. - 500g High Protein Pasta</div>
            </div>
            <div class="Sale-Items">
                <a href="/">
                    <img src="./Spinach.jpg" alt="Spinach" width="300" height="200" />
                </a>
                <div class="desc">Fresh Spinach - 300g</div>
            </div>
            <div class="Sale-Items">
                <a href="/">
                    <img src="./Yoghurt.jpg" alt="Yoghurt" width="300" height="200" />
                </a>
                <div class="desc">Yokos Unsweetened Yoghurt - 500g</div>
            </div>
        </div>
    );
}

export default Sales;