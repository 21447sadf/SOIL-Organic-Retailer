import React from "react";
import "./PaymentConfirm.css";

/**
 * Renders the payment confirmation page.
 *
 * @returns {JSX.Element} The payment confirmation page component.
 */
//This page displays:
//Confirmation message
//Items purchased
function PaymentConfirm() {

    //Get items purchased from local storage
    const purchasedItems = JSON.parse(localStorage.getItem("items"));
    let total = 0;

    //Calculate total price paid
    for (let i = 0; i < purchasedItems.length; i++) {
        total += purchasedItems[i].price * purchasedItems[i].qty;
    }

    return (
        <div className="Receipt-Wrapper">
            <div className="Thank-you-message">
                <h1>Thank you for your order!</h1>
                <div className="Order-Summary-Wrapper">
                    <h2>Order Summary</h2>
                    {/* Display purchased items in table */}
                    <div className="Order-Summary-Table">
                        <table>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        {(purchasedItems.map((item, index) => (
                        <tr id = {`Item-${item.prodName}`}>
                            <td>{item.prodName}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.qty}</td>
                            <td>${(item.price * item.qty).toFixed(2)}</td>
                        </tr>
                    ))
                    )}
                    <td colspan="4" rowspan="1" id="Total-Row">TOTAL: ${total.toFixed(2)}</td>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentConfirm;