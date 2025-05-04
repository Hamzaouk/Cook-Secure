import * as Yup from 'yup';

const RegisterValidation = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  terms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
});

export default RegisterValidation;