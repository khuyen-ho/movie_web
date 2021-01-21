import { useState } from "react";

const useForm = (initialValues, validateOnchange = false, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));

    if (validateOnchange) {
      validate({ [name]: value });
    }
  };

  const resetForm = (event) => {
    setValues({});
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
    resetForm,
  };
};

export default useForm;
