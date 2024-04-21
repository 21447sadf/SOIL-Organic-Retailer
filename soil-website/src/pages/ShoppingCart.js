import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ChangeQtyBtn from "../components/changeQtyBtn";
import Price from "../components/Price"
import TotalPrice from "../components/TotalPrice";
import "./ShoppingCart.css";

const ITEMS_KEY = "items";

/**
 * Renders the shopping cart page.
 * @returns {JSX.Element} The shopping cart component.
 */
//This page displays items user has added to their cart
function ShoppingCart() {

    //Access cartItems from localStorage and display
    const cartItems = JSON.parse(localStorage.getItem('items'));

    let total = 0;
    
        //Hook to  remove items from cart
        const [items, setCartItems] = useState(JSON.parse(localStorage.getItem(ITEMS_KEY)));

        //Function to add item to cart
        function removeItemFromCart(item) {
            //Use callback to remove item and update local storage
            setCartItems(items => {
                items = items.filter(obj => obj.prodName !== item.prodName);
                //Store item in local storage
                localStorage.setItem(ITEMS_KEY, JSON.stringify(items));

                //Update price for remaining items in storage
                setFlagForPriceUpdate(prevState => !prevState);
                return items;
            });
        };

        const [flagForPriceUpdate, setFlagForPriceUpdate]  = useState(false);

        function handleQtyChange() {
            setFlagForPriceUpdate(prevState => !prevState);
        };

    return (
        <div className="cartWrapper">
            <div className="Your-Cart-Header">
                <h1>YOUR CART</h1>
            </div>
            <div className="shoppingCartTable">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    {/*Display all cart items as rows here*/}
                    {( cartItems && cartItems.length > 0) ? (cartItems.map((item, index) => (
                        <tr id = {`Item-${item.prodName}`}>
                            <td id="prodName">{item.prodName}</td>
                            <td>${item.price}</td>
                            <td id="changeQtyBtn">
                                <ChangeQtyBtn cartItem = {item} quantity={item.qty} onQtyChange={handleQtyChange} />
                            </td>
                            <td id="priceData">
                                <div className="price-and-clear">
                                        <Price cartItem={item.prodName} itemPrice={item.price} flagUpdate={flagForPriceUpdate} />
                                        <img 
                                        src="../clear_black_24dp.svg" 
                                        alt="remove-item-btn"
                                        id="remove-item-btn"
                                        onClick={() => removeItemFromCart(item)}>
                                        </img>
                                </div>
                            </td>
                        </tr>
                    ))
                ) :  (
                    // Empty cart message
                    <tr>
                        <td>Your cart is empty</td>
                    </tr>)}
                </table>
            </div>
            {/* Order Summary table */}
            <div className="Order-Summary">
                <table>
                    <th colSpan={2}>ORDER SUMMARY</th>
                    <tr id="subtotal-row">
                        <td>Subtotal</td>
                        <td class="rightAlign"><TotalPrice flagUpdate={flagForPriceUpdate}/></td>
                    </tr>
                    <tr id="total-row">
                        <td>TOTAL</td>
                        <td class="rightAlign"><TotalPrice flagUpdate={flagForPriceUpdate}/></td>
                    </tr>
                </table>           
                { cartItems.length > 0 ? 
                (<Link to="/Checkout">
                    <div className="checkout-Btn-Wrapper">
                        <button class="checkout-Btn">PROCEED TO CHECKOUT</button>
                    </div> 
                </Link>) : (
                    null
                )
                } 
                <Link to="/Sales">
                    <div className="continue-Shopping-Btn-Wrapper">
                        <button class="continue-Shopping-Btn">Continue Shopping</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ShoppingCart;