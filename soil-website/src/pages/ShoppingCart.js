import React from "react";
import { useState, useEffect } from "react";
import ChangeQtyBtn from "../components/changeQtyBtn";

const ITEMS_KEY = "items";

function ShoppingCart() {
    //Access cartItems from localStorage and display
    const cartItems = JSON.parse(localStorage.getItem('items'));
    let total = 0;
    
    //Hook to add items to cart
        //Hook to add items to cart
        const [items, setCartItems] = useState(JSON.parse(localStorage.getItem(ITEMS_KEY)));

        //Function to add item to cart
        function removeItemFromCart(item) {
            //Use callback to remove item and update local storage
            setCartItems(items => {
                items = items.filter(obj => obj.prodName !== item.prodName);
                //Store item in local storage
                localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
                return items;
            });
          
            
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
                        <tr>
                            <td>{item.prodName}</td>
                            <td>{item.price}</td>
                            <td>
                                <ChangeQtyBtn minValue={1} maxValue={10} />
                            </td>
                            <td>{item.price * item.qty}</td>
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
                    <tr>Subtotal<td>${total}</td></tr>
                    <tr>TOTAL<td>${total}</td></tr>
                </table>
            </div>
            <div className="checkout-Btn">
                <button>Proceed To Checkout</button>
            </div>
            <div className="continue-Shopping-Btn">
                <button>Continue Shopping</button>
            </div>
        </div>
    );
}

export default ShoppingCart;