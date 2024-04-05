import React from "react";

function PaymentConfirm() {

    //Get items purchased from local storage
    const purchasedItems = JSON.parse(localStorage.getItem("items"));
    let total = 0;

    return (
        <div className="Receipt-Wrapper">
            <div className="Thank-you-message">
                <h1>Thank you for your order!</h1>
                <div className="Order-Summary-Wrapper">
                    <h1>Order Summary</h1>
                    <div className="Order-Summary">
                        {(purchasedItems.map((item, index) => (
                        <tr id = {`Item-${item.prodName}`}>
                            <td>{item.prodName}</td>
                            <td>${item.price}</td>
                            <td>{item.qty} x</td>
                            <td>${item.price}</td>
                            <td>{total += (item.qty * item.price)}</td>
                        </tr>
                    ))
                    )}
                    <tr>TOTAL: ${total}</tr>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentConfirm;