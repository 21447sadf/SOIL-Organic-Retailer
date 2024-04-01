import React from "react";
import { useState } from "react";

function ShoppingCart() {
    //Access cartItems from localStorage and display
    const cartItems = JSON.parse(localStorage.getItem('items'));
    let total = 0;

    //State to update quantity field
    // [qty, setQty] = useState(0);

    // const increaseQty = (qty) => {
    //     setQty(qty + 1);
    // };


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
                    {cartItems !== null ? (cartItems.map((item, index) => (
                        <tr>
                            <td>{item.prodName}</td>
                            <td>{item.price}</td>
                            <td>
                                <button>-</button>
                                <input type="number" id="number" value={item.qty} />
                                <button onclick={increaseQty(item.qty)}>+</button>
                            </td>
                            <td>{item.price * item.qty}</td>
                        </tr>
                    ))
                ) :  (
                    <tr>
                        <td colSpan="4">No items in the cart</td>
                    </tr>)}
                    {/* <tr>
                        <td>Product Image + Name Goes here</td>
                        <td>Price goes here</td>
                        <td>Quantity + Option to change qty.</td>
                        <td>Total price goes here</td>
                    </tr> */}
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