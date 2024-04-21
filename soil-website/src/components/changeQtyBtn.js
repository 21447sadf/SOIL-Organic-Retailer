import React, { useEffect, useState } from "react";
import "./changeQtyBtn.css";

const ITEMS_KEY = "items"

/**
 * Represents a button component for changing quantity.
 * @param {Object} props - The component props.
 * @param {Object} props.cartItem - The cart item object.
 * @param {number} props.quantity - The initial quantity value.
 * @param {Function} props.onQtyChange - The callback function to be called when quantity changes.
 * @returns {JSX.Element} The ChangeQtyBtn component.
 */
const ChangeQtyBtn = ({ cartItem, quantity, onQtyChange }) => {
  const [count, setCount] = useState(quantity);

    //Re-renders the quantity value displayed in table
    useEffect(() => {
      setCount(quantity);
      updateLocalStorage(quantity);
    }, [quantity]);

    //Handles click of '+' button
    //Updates local storage with new qty and triggers a re-render
    const handleIncrementCounter = () => {
      if (count < 10) {
        setCount((prevState) => prevState + 1);
        updateLocalStorage(count + 1);
        onQtyChange();
      }
    };

    //Handles click of '-' button
    //Updates local storage with new qty and triggers a re-render
    const handleDecrementCounter = () => {
      if (count > 1) {
        setCount((prevState) => prevState - 1);
        updateLocalStorage(count - 1);
        onQtyChange();
      }
    };

  /**
   * Updates the local storage when the quantity is changed.
   * @param {number} qty - The new quantity value.
   */
  const updateLocalStorage = (qty) => {
    const currItems = JSON.parse(localStorage.getItem(ITEMS_KEY));
    if (currItems.find((obj) => obj.prodName === cartItem.prodName) !== undefined) {
      currItems.find((obj) => obj.prodName === cartItem.prodName).qty = qty;
      localStorage.setItem(ITEMS_KEY, JSON.stringify(currItems));
    }
  };

  return (
    <div className="btn-group">
      <button className="decrement-btn" onClick={handleDecrementCounter}>
        <span class="material-symbols-outlined">-</span>
      </button>
      <p>{count}</p>
      <button className="increment-btn" onClick={handleIncrementCounter}>
        <span class="material-symbols-outlined">+</span>
      </button>
    </div>
  );
};

export default ChangeQtyBtn;