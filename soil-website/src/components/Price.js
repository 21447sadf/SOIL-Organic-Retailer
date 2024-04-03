import React, { useState, useEffect } from "react";

//Function to calculate price of each product 
const Price = ({ cartItem, itemPrice, flagUpdate }) => {
    const items = JSON.parse(localStorage.getItem("items"));
    const qty = items.find(obj => obj.prodName === cartItem).qty;
    const initPrice = items.find(obj => obj.prodName === cartItem).price;

    //Hook to control price state 
    const [price, setPrice] = useState(itemPrice);

    useEffect(() => {    
        const newPrice = qty * initPrice;
        setPrice(newPrice);
    }, [flagUpdate]);

    return (
    <p>${price}</p>
    );
};

export default Price;