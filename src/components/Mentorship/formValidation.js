export const validateForm = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // LinkedIn validation (optional but must be valid URL if provided)
  if (formData.linkedin && formData.linkedin.trim()) {
    const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/.+/i;
    if (!linkedinRegex.test(formData.linkedin.trim())) {
      errors.linkedin = 'Please enter a valid LinkedIn URL';
    }
  }

  // Role validation
  if (!formData.role) {
    errors.role = 'Please select your current role';
  }

  // Program interest validation
  if (!formData.programInterest) {
    errors.programInterest = 'Please select a program';
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = 'Please share your goals and what you hope to achieve';
  } else if (formData.message.trim().length < 20) {
    errors.message = 'Please provide more detail (minimum 20 characters)';
  } else if (formData.message.trim().length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return errors;
};
