import React from 'react';
import { useMediaQuery } from 'react-responsive';
import AuthLayout from '../../layout/AuthLayout';
import ForgotForm from '../../components/auth/form/ForgotForm';

const ForgotPassword = () => {

  return (
    <AuthLayout>
        <ForgotForm></ForgotForm>
    </AuthLayout>
  )
};

export default ForgotPassword
