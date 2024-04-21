import React, { useState, useEffect } from "react";

//Function to calculate price of each product 
/**
 * Renders the price of a cart item.
 *
 * @param {Object} props - The component props.
 * @param {string} props.cartItem - The name of the cart item.
 * @param {number} props.itemPrice - The initial price of the cart item.
 * @param {boolean} props.flagUpdate - A flag indicating whether the price should be updated.
 * @returns {JSX.Element} The rendered price component.
 */
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