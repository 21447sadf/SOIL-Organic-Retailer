import React from "react";
import "./Sales.css"

//This component includes a list of sale items

//TO DO: Redirect to Shopping Cart, with item added in

function Sales() {
    return (
        <div class="Sales-Container">
            <div class="Sales">
                <div class="Heading">
                    <h1>This week's specials</h1>
                </div>
                <div class="Sale-Item">
                    <a href="/">
                        <img src="./Corn.jpg" alt="Corn" width="450" height="300" />
                    </a>
                    <div class="desc">6 Pack of Corn <br/><br/><b>$5.00</b></div>
                    <button class="Add-to-cart-btn">Add to cart</button>
                </div>
                <div class="Sale-Item">
                    <a href="/">
                        <img src="./MuesliBar.jpg" alt="MuesliBar" width="450" height="300" />
                    </a>
                    <div class="desc">HealthNuts Muesli Bar - 5 pack <br/><br/><b>$7.00</b></div>
                    <button class="Add-to-cart-btn">Add to cart</button>
                </div>
                <div class="Sale-Item">
                    <a href="/">
                        <img src="./Pasta.jpg" alt="Pasta" width="450" height="300" />
                    </a>
                    <div class="desc">Nature's Noodle Co. - 500g High Protein Pasta <br/><b>$8.00</b></div>
                    <button class="Add-to-cart-btn">Add to cart</button>
                </div>
                <div class="Sale-Item">
                    <a href="/">
                        <img src="./Spinach.jpg" alt="Spinach" width="450" height="300" />
                    </a>
                    <div class="desc">Fresh Spinach - 300g <br/><br/><b>$6.50</b></div>
                    <button class="Add-to-cart-btn">Add to cart</button>
                </div>
                <div class="Sale-Item">
                    <a href="/">
                        <img src="./Yoghurt.jpg" alt="Yoghurt" width="450" height="300" />
                    </a>
                    <div class="desc">Yokos Unsweetened Yoghurt - 500g <br/><br/><b>$8.00</b></div>
                    <button class="Add-to-cart-btn">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Sales;