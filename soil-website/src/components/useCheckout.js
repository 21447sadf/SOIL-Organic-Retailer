import { useState, useEffect } from 'react';

/**
 * Custom hook for handling form submission and validation.
 *
 * @param {Function} callback - The function to be called when form submission is successful.
 * @param {Function} validate - The function to validate form values.
 * @returns {Object} - An object containing handleChange, handleSubmit, values, and errors.
 */
const useCheckout = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useCheckout;