import React from "react";
import { useState, useEffect } from "react";

function TotalPrice({ flagUpdate }) {

    //Function to calculate total price
    const items = JSON.parse(localStorage.getItem("items"));
    let total = 0; 
    function calcTotalPrice() {
        for (let i = 0; i < items.length; i++) {
            total += items[i].qty * items[i].price;
        }
        return total;
    }

    //Hook to control price state 
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => { 
        const total = calcTotalPrice();
        // const items = JSON.parse(localStorage.getItem("items"));
        // let total = 0; 
        // for (let i = 0; i < items.length; i++) {
        //     total += items[i].qty * items[i].price;
        // }
        setTotalPrice(total);
    }, [flagUpdate]);

    return (
        <p>${totalPrice.toFixed(2)}</p>
    );
};

export default TotalPrice;