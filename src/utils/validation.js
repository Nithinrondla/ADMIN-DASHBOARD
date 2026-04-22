export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequired = (value) => {
  return value && value.trim() !== '';
};

export const validateForm = (fields) => {
  const errors = {};

  if (!validateRequired(fields.username)) {
    errors.username = 'Username is required';
  }

  if (!validateRequired(fields.password)) {
    errors.password = 'Password is required';
  }

  if (fields.email && !validateEmail(fields.email)) {
    errors.email = 'Invalid email format';
  }

  return errors;
};
