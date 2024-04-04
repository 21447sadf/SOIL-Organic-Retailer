import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import useCheckout from "../components/useCheckout";
import validate from '../components/CheckoutValidationRules';

function Checkout() {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
      } = useCheckout(submitPayment, validate);

    const navigate = useNavigate();

    function submitPayment() {
    alert("No errors, submit callback called!");
    navigate("/Checkout/PaymentConfirm");
    };

    return (
        <div className="CheckoutWrapper">
            <div className="checkoutFormWrapper">

                <form onSubmit={handleSubmit} noValidate>            
                    <h1>Checkout</h1>
                    <h2>Shipping Details</h2>
                    <input className={`input ${errors.email && 'is-danger'}`} 
                        type="email" name="email" placeholder="Email" onChange={handleChange} 
                        value={values.email || ''} required /><br />
                            {errors.email && (
                                <p className="help is-danger">{errors.email}</p>
                            )}         
                    <input type="text" id="fname" name="fname" placeholder="First Name" required /><br />
                    <input type="text" id="lname" name="lname" placeholder="Last Name" required /><br />
                    <input type="text" id="address" name="address" placeholder="Address" required /><br />
                    <input type="text" id="suburb" name="suburb" placeholder="Suburb" required /><br />
                    <input type="text" id="postcode" name="postcode" placeholder="Postcode" required /><br />
                    <input type="text" id="phone" name="phone" placeholder="Phone" required /><br />
                    <br />
                    <br />
                    <br />
                    <h2>Payment</h2>
                    <input className={`input ${errors.cardNumber && 'is-danger'}`} 
                        type="cardNumber" name="cardNumber" placeholder="Card number" onChange={handleChange} 
                        value={values.cardNumber || ''} required /><br />
                        {errors.cardNumber && (
                        <p className="help is-danger">{errors.cardNumber}</p>
                        )}
                    <input className={`input ${errors.nameoncard && 'is-danger'}`} 
                        type="nameoncard" name="nameoncard" placeholder="Name on card" onChange={handleChange} 
                        value={values.nameoncard || ''} required /><br />
                        {errors.nameoncard && (
                        <p className="help is-danger">{errors.nameoncard}</p>
                        )}
                    <input className={`input ${errors.expiry && 'is-danger'}`} 
                        type="expiry" name="expiry" placeholder="Expiration date (MM/YY)" onChange={handleChange}
                        value={values.expiry || ''} required /><br />
                        {errors.expiry && (
                        <p className="help is-danger">{errors.expiry}</p>
                        )}
                    <input className={`input ${errors.cvc && 'is-danger'}`} 
                        type="cvc" name="cvc" placeholder="CVC" onChange={handleChange} 
                        value={values.cvc || ''} required /><br />
                        {errors.cvc && (
                        <p className="help is-danger">{errors.cvc}</p>
                        )}
                    <button type="continueToPayment">Pay Now</button>
                </form>    
            </div>
        </div>

    );

};

export default Checkout;