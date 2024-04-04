import React from 'react';
import { useMediaQuery } from 'react-responsive';
import AuthLayout from '../../layout/AuthLayout';
import ForgotForm from '../../components/auth/ForgotForm';

const ForgotPassword = () => {
  const isDesktopOrLaptop = useMediaQuery({
      query: '(min-device-width: 1224px)'
  });

  return (
    <AuthLayout>
        <ForgotForm></ForgotForm>
    </AuthLayout>
  )
};

export default ForgotPassword
