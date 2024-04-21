/**
 * Validates the form values for the checkout process.
 * @param {Object} values - The form values to be validated.
 * @returns {Object} - An object containing the validation errors, if any.
 */
export default function validate(values) {
    let errors = {};
    //Validate email
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    //Validate card number
    if (!values.cardNumber) {
      errors.cardNumber = 'Card number is required';
    } else if (values.cardNumber.length !== 16) {
      errors.password = 'Enter a valid card number';
    }
    //Validate name on card
    if (!values.nameoncard) {
        errors.nameoncard = 'Enter your name exactly as it\'s written on your card';
    }
    //Validate expiry
    if (!values.expiry) {
        errors.expiry = 'Enter a valid expiration date';
    }
    //Validate CVC
    if (!values.cvc || values.cvc.length !== 3) {
        errors.cvc = 'Enter the CVC or security code on your card';
    }
    return errors;
  };