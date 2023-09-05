"use client";

import { useState } from "react";

interface FormState {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

const useForm = (
  initialState: FormState,
  onSubmit: (formData: FormState) => void
) => {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fieldName: string
  ) => {
    const { value } = e.target;
    const formErrors: FormErrors = { ...errors };
  
    if (value.trim() === "") {
      formErrors[fieldName] = "This field is required";
    } else {
      delete formErrors[fieldName];
    }
  
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    setErrors(formErrors);
  };
  

  const validateForm = (): boolean => {
    const requiredFields = Object.entries(initialState)
      // .filter(([_, value]) => value !== "")
      .map(([key]) => key);
    
    console.log(requiredFields)

    const formErrors: FormErrors = {};
    let isValid = true;

    requiredFields.forEach((field) => {
      if (formData[field].trim() === "") {
        formErrors[field] = "This field is required";
        isValid = false;
      }
    });

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      // setFormData(initialState);
    }
  };
  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
  };
  return {
    formData,
    handleChange,
    handleSubmit,
    resetForm,
    errors,
  };
};

export default useForm;
