import { useState } from "react";
import "./Sales.css"

//This component includes a list of sale items

//TO DO: Redirect to Shopping Cart, with item added in
const ITEMS_KEY = "items";

function Sales() {
    //Hook to add items to cart
    const [cartItems, setCartItems] = useState([]);

    //Function to add item to cart
    function addItemToCart(item) {
        //Check if item already exists in local storage
        //If it does, don't add anything
        const items = JSON.parse(localStorage.getItem(ITEMS_KEY));
        if (items !== null) {
            if (items.find(obj => obj.prodName === item.prodName) !== undefined) {
                return cartItems;
            }
        }

        //Use callback to update local storage
        setCartItems(cartItems => {
            cartItems = [...cartItems, item];
            //Store item in local storage
            localStorage.setItem(ITEMS_KEY, JSON.stringify(cartItems));
            return cartItems;
        });
      
        
    };

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
                    <div class="desc">Large Corn - 6 pack <br/><br/><b>$3.00</b></div>
                    <button class="Add-to-cart-btn" 
                            onClick={() => addItemToCart({id: "1", prodName: "Large Corn - 6 pack", price: 3.00, qty: 1})}>
                                Add to cart
                    </button>
                </div>
                <div class="Sale-Item">
                    <a href="/">
                        <img src="./MuesliBar.jpg" alt="MuesliBar" width="450" height="300" />
                    </a>
                    <div class="desc">HealthNuts Muesli Bar - 5 pack <br/><br/><b>$3.50</b></div>
                    <button class="Add-to-cart-btn"
                            onClick={() => addItemToCart({id: "2", prodName: "HealthNuts Muesli Bar - 5 pack", price: 3.50, qty: 1})}>
                                Add to cart
                    </button>
                </div>
                <div class="Sale-Item">
                    <a href="/">
                        <img src="./Pasta.jpg" alt="Pasta" width="450" height="300" />
                    </a>
                    <div class="desc">Nature's Noodle Co. - 500g High Protein Pasta <br/><b>$4.00</b></div>
                    <button class="Add-to-cart-btn"
                            onClick={() => addItemToCart({id: "3", prodName: "Nature's Noodle Co. - 500g High Protein Pasta", price: 4.00, qty: 1})}>
                                Add to cart
                    </button>
                </div>
                <div class="Sale-Item">
                    <a href="/">
                        <img src="./Spinach.jpg" alt="Spinach" width="450" height="300" />
                    </a>
                    <div class="desc">Fresh Spinach - 300g <br/><br/><b>$2.50</b></div>
                    <button class="Add-to-cart-btn"
                            onClick={() => addItemToCart({id: "4", prodName: "Fresh Spinach - 300g", price: 4.00, qty: 1})}>
                                Add to cart
                    </button>
                </div>
                <div class="Sale-Item">
                    <a href="/">
                        <img src="./Yoghurt.jpg" alt="Yoghurt" width="450" height="300" />
                    </a>
                    <div class="desc">Yokos Unsweetened Yoghurt - 500g <br/><br/><b>$2.50</b></div>
                    <button class="Add-to-cart-btn"
                            onClick={() => addItemToCart({id: "5", prodName: "Yokos Unsweetened Yoghurt - 500g", price: 2.50, qty: 1})}>
                                Add to cart
                    </button>
                </div>
                <div class="Sale-Item">
                    <a href="/">
                        <img src="./bread.jpg" alt="bread" width="450" height="300" />
                    </a>
                    <div class="desc">Dough Delight Co. Wholemeal Bread Loaf <br/><b>$3.50</b></div>
                    <button class="Add-to-cart-btn"
                            onClick={() => addItemToCart({id: "6", prodName: "Dough Delight Co. Wholemeal Bread Loaf", price: 3.50, qty: 1})}>
                                Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sales;