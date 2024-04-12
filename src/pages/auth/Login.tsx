import React from 'react';
import AuthLayout from '../../layout/AuthLayout';
import LoginForm from '../../components/auth/form/LoginForm';

const Login = () => {
  return (
    <AuthLayout>
        <LoginForm></LoginForm>
    </AuthLayout>
  )
};

export default Login
