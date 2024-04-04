import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ChangeQtyBtn from "../components/changeQtyBtn";
import Price from "../components/Price"
import TotalPrice from "../components/TotalPrice";

const ITEMS_KEY = "items";

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
            <h1>Your cart</h1>

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
                            <td>{item.prodName}</td>
                            <td>${item.price}</td>
                            <td>
                                <ChangeQtyBtn cartItem = {item} quantity={item.qty} onQtyChange={handleQtyChange} />
                            </td>
                            <td>
                                <Price cartItem={item.prodName} itemPrice={item.price} flagUpdate={flagForPriceUpdate} />
                            </td>
                            <td><button onClick={() => removeItemFromCart(item)}>X</button></td>
                        </tr>
                    ))
                ) :  (
                    <tr>
                        <td>No items in the cart</td>
                    </tr>)}
                </table>
            </div>
            <div className="Order-Summary">
                <table>
                    <th>Order Summary</th>
                    <tr>Subtotal<td><TotalPrice flagUpdate={flagForPriceUpdate}/></td></tr>
                    <tr>TOTAL<td><TotalPrice flagUpdate={flagForPriceUpdate}/></td></tr>
                </table>
            </div>
            <Link to="/Checkout">
                <div className="checkout-Btn">
                    <button>Proceed To Checkout</button>
                </div> 
            </Link>
            <Link to="/Sales">
                <div className="continue-Shopping-Btn">
                    <button>Continue Shopping</button>
                </div>
            </Link>

        </div>
    );
}

export default ShoppingCart;