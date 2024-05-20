import { useState } from 'react';
import { emailValidator, passwordValidator } from './validators';

export const useLoginFormValidator = form => {
  const [errors, setErrors] = useState({
    email: { dirty: false, error: false, message: '' },
    password: { dirty: false, error: false, message: '' },
  });

  const validateForm = ({ form, errors, field, forceTouchErrors = false }) => {
    let isValid = true;

    if (forceTouchErrors) {
      Object.keys(errors).forEach(fieldName => {
        errors[fieldName].dirty = true;
      });
    }

    if (field === 'email' || forceTouchErrors) {
      const emailMessage = emailValidator(form.email);
      errors.email.error = !!emailMessage;
      errors.email.message = emailMessage;
      isValid = !emailMessage && isValid;
    }

    if (field === 'password' || forceTouchErrors) {
      const passwordMessage = passwordValidator(form.password);
      errors.password.error = !!passwordMessage;
      errors.password.message = passwordMessage;
      isValid = !passwordMessage && isValid;
    }

    setErrors({ ...errors });

    return { isValid };
  };

  const onBlurField = e => {
    const field = e.target.name;
    const fieldError = errors[field];

    if (fieldError.dirty) return;

    const newErrors = {
      ...errors,
      [field]: {
        ...fieldError,
        dirty: true,
      },
    };

    validateForm({ form, errors: newErrors, field });
  };

  return {
    validateForm,
    onBlurField,
    errors,
  };
};
