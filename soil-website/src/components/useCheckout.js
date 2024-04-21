import { useState, useEffect } from 'react';

//Form handles checkout form
const useCheckout = (callback, validate) => {

  //Use states track the following:
  //Values entered by the user
  //Errors detected
  //Submission 
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //Will submit a callback for a successful payment if
  //no errors are found
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  //Sets errors when form is submitted button is clicked
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  //Detects changes in input field values
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