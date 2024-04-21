import React, { useState, useEffect } from "react";

//Function to calculate price of each product 
//boolean flagUpdate from parent triggers a re-render of this component
const Price = ({ cartItem, itemPrice, flagUpdate }) => {
    //Retrieves items from local storage
    const items = JSON.parse(localStorage.getItem("items"))
    const qty = items.find(obj => obj.prodName === cartItem).qty;
    const initPrice = items.find(obj => obj.prodName === cartItem).price;

    //Hook to control price state 
    const [price, setPrice] = useState(itemPrice);

    //Re-renders JSX containing price each time 
    //price value changes
    useEffect(() => {    
        const newPrice = qty * initPrice;
        setPrice(newPrice);
    }, [flagUpdate]);

    return (
        <p>${price}</p>
    );
};

export default Price;